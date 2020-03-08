import React from "react";
import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "1.2em"
  }
});

export default function TitleTask({
  title,
  buttonsActiveOn,
  buttonCancelDidClick,
  titleSave,
  buttonSaveDidClick
}) {
  const classes = useStyles();
  const [text, setText] = useState(title);

  useEffect(() => {
    setText(title);
  }, [buttonCancelDidClick]);

  useEffect(() => {
    console.log(text);
    titleSave(text);
  }, [buttonSaveDidClick]);

  function onChange(event) {
    setText(event.target.value);
    buttonsActiveOn();
  }

  return (
    <InputBase
      placeholder="Название задачи"
      fullWidth={true}
      className={classes.root}
      onChange={onChange}
      value={text}
    />
  );
}
