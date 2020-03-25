import React from 'react';
import TableBody_2 from '@material-ui/core/TableBody'; //anti conflict
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Text/Title';
import Description from '../Text/Description';
import ButtonGroup from '../Buttons/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    description: {
        '&& textarea': {
            textAlign: "right"
        },
    }
});

const TableBody = (props) => {
    const classes = useStyles();
    return (
        <TableBody_2>
            {props.state.map(row => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        <Title
                            buttonCancelDidClick={row.buttonCancelDidClick}
                            buttonSaveDidClick={row.buttonSaveDidClick}
                            title={row.title}
                            id={row.id}
                            buttonsActiveOn={props.buttonsActiveOn}
                            titleSave={props.titleSave}
                        />
                    </TableCell>
                    <TableCell align="right" className={classes.description}>
                        <Description
                            buttonCancelDidClick={row.buttonCancelDidClick}
                            buttonSaveDidClick={row.buttonSaveDidClick}
                            description={row.description}
                            id={row.id}
                            buttonsActiveOn={props.buttonsActiveOn}
                            descriptionSave={props.descriptionSave}
                        />
                    </TableCell>
                    <TableCell align="right">
                        <ButtonGroup
                            buttonCancelDisable={row.buttonCancelDisable}
                            buttonSaveDisable={row.buttonSaveDisable}
                            id={row.id}
                            cancelOff={props.cancelOff}
                            saveOff={props.saveOff}
                            deleteTodo={props.deleteTodo}
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody_2>
    )
}

export default TableBody;