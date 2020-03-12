import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#ab003c",
    margin: "-5px"
  }
});

export default function Delete(props) {
  const classes = useStyles();

  function onClick() {
    props.deleteTodo(props.id);
  }

  return (
    <IconButton className={classes.root} onClick={onClick}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}
