import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import HomeView from 'views/Home';
import ApplicationsView from 'views/Applications';
import CreateApplicationView from 'views/Applications/Create';

import Layout from './Layout';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" component={HomeView} exact />
                        <Route path="/Applications" component={ApplicationsView} exact />
                        <Route path="/Applications/Create" component={CreateApplicationView} exact />
                        <Route component={HomeView} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}
