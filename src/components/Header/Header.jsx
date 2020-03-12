import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';

// const useStyles = makeStyles(theme => ({
//     icon: {
//         marginRight: theme.spacing(2),
//     },
// }));

export default function Header() {
    //const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Logo />

            </Toolbar>
        </AppBar>
    )
}