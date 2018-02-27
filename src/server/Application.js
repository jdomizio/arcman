import path from 'path';
import { v1 as neo4j } from 'neo4j-driver';
import config from 'config';
import express from 'express';
import fallback from 'express-history-api-fallback';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

import schema from './schema';

export default class Application {
    constructor(logger) {
        this.logger = logger;
        this.config = {
            serverConfig: config.get('server'),
            dbConfig: config.get('neo4j'),
            dataConfig: config.get('data'),
        };
        this.dbDriver = null;
        this.expressApp = null;
    }

    async init() {
        this.logger.info('Starting ARCMAN...');

        await this.db();
        await this.server();

        const port = this.config.serverConfig.port;
        this.expressApp.listen(port);

        this.logger.info('ARCMAN started and listening on %s', port);
    }

    async server() {
        this.logger.info('Starting express...');

        const publicPath =  (process.env.NODE_ENV !== 'production') ? path.join(__dirname, '../../dist/public') : './public';
        const app = this.expressApp = express();

        app.set('views', path.join(__dirname, 'src', 'server', 'views'));
        app.use(express.static(publicPath));
        app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema() }));
        app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
        app.use(fallback('index.html', { root: publicPath }));
    }

    async db() {
        this.logger.info('Setting up connection with neo4j...');

        const { dbConfig } = this.config;
        this.dbDriver = neo4j.driver(dbConfig.url, neo4j.auth.basic(dbConfig.username, dbConfig.password));
    }
}