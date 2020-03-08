import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TitleContainer from '../Text/TitleContainer';
import DescriptionContainer from '../Text/DescriptionContainer'
import ButtonGroup from '../Buttons/ButtonGroup';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    description: {
        //backgroundColor: 'blue',
        '&& textarea': {
            textAlign: "right"
        },
    }
});


const TableLayout = ({ todos }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{'Title'}</TableCell>
                            <TableCell align="right">{'Description'}</TableCell>
                            <TableCell align="right">{'Actions'}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"todos.id"}>
                            <TableCell component="th" scope="row">
                                <TitleContainer />
                            </TableCell>
                            <TableCell align="right">
                                <Box className={classes.description}>
                                    <DescriptionContainer />
                                </Box>
                            </TableCell>
                            <TableCell align="right">
                                <ButtonGroup />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer >
        </Container>
    )
}

export default TableLayout