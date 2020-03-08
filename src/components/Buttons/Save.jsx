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

export default function SaveButton({ saveOff, disable }) {
  const classes = useStyles();
  return (
    <IconButton className={classes.root} disabled={disable} onClick={saveOff}>
      <SaveIcon fontSize="small" />
    </IconButton>
  );
}
