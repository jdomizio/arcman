import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'common/relayEnvironment';
import View from './View';

function renderApplicationsView({ error, props }) {
    if (error) {
        return <div>Error!</div>;
    }
    if (!props) {
        return <div>Loading...</div>;
    }

    return <View {...props} />;
}

export default class ApplicationsView extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query ApplicationsQuery {
                      allApplications {
                        id
                        name
                        description
                      }
                    }
                `}
                render={renderApplicationsView}
            />
        );
    }
}
