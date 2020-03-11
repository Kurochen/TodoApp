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
import Description from '../Text/Description'
import ButtonGroup from '../Buttons/ButtonGroup';
import Box from '@material-ui/core/Box';
import DescriptionContainer from '../Text/DescriptionContainer';
import ButtonGroupContainer from '../Buttons/ButtonGroupContainer';

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

    console.log('TableLayout', props);

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
                        {props.state.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    <TitleContainer
                                        buttonCancelDidClick={row.buttonCancelDidClick}
                                        buttonSaveDidClick={row.buttonSaveDidClick}
                                        title={row.title}
                                        id={row.id}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <Box className={classes.description}>
                                        <DescriptionContainer
                                            buttonCancelDidClick={row.buttonCancelDidClick}
                                            buttonSaveDidClick={row.buttonSaveDidClick}
                                            description={row.description}
                                            id={row.id} />
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <ButtonGroupContainer
                                        buttonCancelDisable={row.buttonCancelDisable}
                                        buttonSaveDisable={row.buttonSaveDisable}
                                        id={row.id}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Container>
    )
}

export default TableLayout