import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TableHead from './TableHead'
import TableBodyContainer from './TableBodyContainer'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    description: {
        '&& textarea': {
            textAlign: "right"
        },
    }
});

const TableLayout = (props) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead />
                    <TableBodyContainer />
                </Table>
            </TableContainer >
        </Container>
    )
}

export default TableLayout