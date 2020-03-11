import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#00b0ff",
    margin: "-5px"
  }
});

export default function Cancel(props) {
  const classes = useStyles();

  function onClick() {
    props.cancelOff(props.id);
  }

  return (
    <IconButton className={classes.root} disabled={props.buttonCancelDisable} onClick={onClick}>
      <CancelIcon fontSize="small" />
    </IconButton>
  );
}
