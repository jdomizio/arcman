import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Navigation from './Navigation';

import './style.css';

export default class Layout extends Component {
    state = {
        drawerOpen: false,
    };

    toggleDrawer = () => {
        this.setDrawer(!this.state.drawerOpen);
    };

    setDrawer = value => {
        this.setState({
            drawerOpen: value,
        });
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="arcman">
                    <AppBar
                        title="ARCMAN"
                        iconElementLeft={
                            <IconButton onClick={this.toggleDrawer}>
                                <NavigationMenu />
                            </IconButton>
                        } />
                    <main>
                        {this.props.children}
                    </main>
                    <Navigation open={this.state.drawerOpen} setDrawer={this.setDrawer} />
                </div>
            </MuiThemeProvider>
        );
    }
}