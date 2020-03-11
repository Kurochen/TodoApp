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

export default function Description(props) {
  const classes = useStyles();
  const [text, setText] = useState(props.description);

  useEffect(() => {
    setText(props.description);
  }, [props.buttonCancelDidClick]);

  useEffect(() => {
    props.descriptionSave(text, props.id);
  }, [props.buttonSaveDidClick]);

  console.log('Description', props)

  function onChange(event) {
    setText(event.target.value);
    props.buttonsActiveOn(props.id);
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
