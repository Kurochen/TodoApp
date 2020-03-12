import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

const Logo = () => {
    const classes = useStyles();

    return (
        <>
            <LibraryBooksIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap to="/">
                {'ToDo'}
            </Typography>
        </>
    )
}

export default Logo