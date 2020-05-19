import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './Logo';

export default function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Logo />
            </Toolbar>
        </AppBar>
    )
}