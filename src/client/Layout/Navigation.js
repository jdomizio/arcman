import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { withRouter, Link } from 'react-router-dom';

function Navigation({ open, setDrawer, ...rest }) {
    console.log(rest);
    return (
        <Drawer docked={false} open={open} onRequestChange={setDrawer}>
            <MenuItem containerElement={<Link to="/"/>} onClick={() => setDrawer(false)}>Home</MenuItem>
            <Divider />
            <MenuItem containerElement={<Link to="/Applications" />} onClick={() => setDrawer(false)}>Applications</MenuItem>
            <Divider />
        </Drawer>
    );
}

export default withRouter(Navigation);