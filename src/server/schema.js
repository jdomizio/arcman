import {
    makeExecutableSchema,
    addMockFunctionsToSchema,
} from 'graphql-tools';
import config from 'config';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Application {
    id: String
    name: String,
    description: String
}

type Query {
    testString: String
    allApplications: [Application]
}
`;

export default function createSchema() {
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers: resolvers()
    });

    if (config.get('data.useMocks')) {
        addMockFunctionsToSchema({schema, mocks});
    }

    return schema;
}
