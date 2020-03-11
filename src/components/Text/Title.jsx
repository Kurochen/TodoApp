import React from "react";
import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "1.3em"
  }
});

export default function TitleTask(props) {
  const classes = useStyles();
  const [text, setText] = useState(props.title);

  // useEffect(() => {
  //   setText(props.title);
  // }, [props.buttonCancelDidClick]);

  // useEffect(() => {
  //   //console.log(text);
  //   props.titleSave(text);
  // }, [props.buttonSaveDidClick]);

  function onChange(event) {
    setText(event.target.value);
    props.buttonsActiveOn();
  }

  return (
    <InputBase
      placeholder="Название задачи"
      fullWidth={true}
      className={classes.root}
      onChange={onChange}
      value={text}
      multiline={true}
    />
  );
}
