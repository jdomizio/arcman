import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './style.css';

const version = '[AIV]{version}[/AIV]';

export default class HomeView extends Component {
    render() {
        return (
            <section className="arcman-home">
                <header className="__title">
                    <h1>ARCMAN {version}</h1>
                    <img className="__logo" src="/logo45.svg" alt="ARCMAN" />
                    <p className="light">Architecture Manager</p>
                </header>
                <Divider />
                <article>
                    <header>
                        <h2>What is <b>ARCMAN?</b></h2>
                    </header>
                    <p className="light">ARCMAN is a tool to help map out applications, environments, and deployments</p>
                </article>
            </section>
        );
    }
}
