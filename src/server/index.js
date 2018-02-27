import { createLogger, format, transports } from 'winston';
import config from 'config';
import Application from './Application';

const logConfig = config.get('logging');

global = global || {};

global.logger = createLogger({
    level: logConfig.level,
    format: format.combine(
        format.splat(),
        format.simple(),
    ),
    transports: []
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console());
}

global.app = new Application(global.logger);

global.app.init();



