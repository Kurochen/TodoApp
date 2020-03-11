import React from "react";
import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    //fontSize: "1.8em",
    //textAlign: "right",
  }
});

export default function TextTask(props) {
  const classes = useStyles();
  const [text, setText] = useState(props.data);

  // useEffect(() => {
  //   setText(props.description);
  // }, [props.buttonCancelDidClick]);

  // useEffect(() => {
  //   props.descriptionSave(text);
  // }, [props.buttonSaveDidClick]);

  console.log(props)

  function onChange(event) {
    setText(event.target.value);
    props.buttonsActiveOn();
  }
  return (
    <InputBase
      placeholder="Описание задачи"
      fullWidth={true}
      className={classes.root}
      onChange={onChange}
      value={text}
      multiline={true}
    />
  );
}
