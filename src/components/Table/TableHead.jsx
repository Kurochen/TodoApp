import React from 'react';
import TableHead_2 from '@material-ui/core/TableHead'; //anti conflict
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TableHead = () => {

    return (
        <TableHead_2>
            <TableRow>
                <TableCell>{'Title'}</TableCell>
                <TableCell align="right">{'Description'}</TableCell>
                <TableCell align="right">{'Actions'}</TableCell>
            </TableRow>
        </TableHead_2>
    )
}

export default TableHead