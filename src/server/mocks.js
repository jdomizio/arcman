import casual from 'casual';
import { MockList } from 'graphql-tools';

const mocks = {
    String: () => 'It works!',
    Application: () => ({
        id: () => casual.uuid,
        name: () => casual.title,
        description: () => casual.sentence,
    }),
    Query: () => ({
        allApplications: () => new MockList([2, 6]),
    }),
};

export default mocks;
