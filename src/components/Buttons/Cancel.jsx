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

export default function Cancel({ disable, cancelOff }) {
  const classes = useStyles();

  // function test() {
  //   return console.log("test");
  // }
  //console.log(cancelOff);

  return (
    <IconButton className={classes.root} disabled={disable} onClick={cancelOff}>
      <CancelIcon fontSize="small" />
    </IconButton>
  );
}
