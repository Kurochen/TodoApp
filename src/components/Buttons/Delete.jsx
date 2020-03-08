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

export default function Delete({ onClick }) {
  const classes = useStyles();
  return (
    <IconButton className={classes.root}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}
