import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "green",
    margin: "-5px"
  }
});

export default function SaveButton(props) {
  const classes = useStyles();

  function onClick() {
    props.saveOff(props.id);
  }
  return (
    <IconButton className={classes.root} disabled={props.buttonSaveDisable} onClick={onClick}>
      <SaveIcon fontSize="small" />
    </IconButton>
  );
}
