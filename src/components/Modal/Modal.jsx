import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'right',
        paddingTop: theme.spacing(3),
    },
}));

export default function FormDialog(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        setOpen(false);
    }

    const handleAdd = () => {
        console.log(title, description)
        props.addTodo(title, description);
        setTitle('');
        setDescription('');
        setOpen(false);
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    return (
        <Container maxWidth="md" className={classes.root}>
            <Fab color="primary" aria-label="add" size="medium" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add task</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        value={title}
                        onChange={handleChangeTitle}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        type="text"
                        fullWidth
                        value={description}
                        onChange={handleChangeDescription}
                        multiline={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        {'Cancel'}
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        {'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}