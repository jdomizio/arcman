import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
import PageHeader from 'components/PageHeader';

export default function View({ allApplications }) {
    return (
        <Page className="arcman-applications">
            <PageHeader label="Applications">
                <RaisedButton
                    containerElement={<Link to="/Applications/Create" />}
                    label="Create"
                    primary
                    onClick={() => {
                        console.log('Create Application');
                    }}
                />
            </PageHeader>
            <section>
                <Table selectable={false}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allApplications.map(a => (
                            <TableRow key={a.id}>
                                <TableRowColumn>{a.id}</TableRowColumn>
                                <TableRowColumn>{a.name}</TableRowColumn>
                                <TableRowColumn>{a.description}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </Page>
    );
}