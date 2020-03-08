import React from "react";
import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // fontSize: "1.8em"
  }
});

export default function TextTask({
  description,
  buttonsActiveOn,
  buttonCancelDidClick,
  buttonSaveDidClick,
  descriptionSave
}) {
  const classes = useStyles();
  const [text, setText] = useState(description);

  useEffect(() => {
    setText(description);
  }, [buttonCancelDidClick]);

  useEffect(() => {
    descriptionSave(text);
  }, [buttonSaveDidClick]);

  function onChange(event) {
    setText(event.target.value);
    buttonsActiveOn();
  }
  return (
    <InputBase
      placeholder="Описание задачи"
      fullWidth={true}
      className={classes.root}
      onChange={onChange}
      value={text}
    />
  );
}
