import React, { Component } from 'react';
import Page from 'components/Page';
import PageHeader from 'components/PageHeader';

export default class CreateApplicationView extends Component {
    render() {
        return (
            <Page className="arcman-applications-create">
                <PageHeader label="Create Application" />
                <section>
                    There should be a form here...
                </section>
            </Page>
        );
    }
}