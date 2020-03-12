import React from "react";
import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";

export default function Description(props) {
  const [text, setText] = useState(props.description);

  useEffect(() => {
    setText(props.description);
  }, [props.buttonCancelDidClick]);

  useEffect(() => {
    props.descriptionSave(text, props.id);
  }, [props.buttonSaveDidClick]);

  function onChange(event) {
    setText(event.target.value);
    props.buttonsActiveOn(props.id);
  }

  return (
    <InputBase
      placeholder="Описание задачи"
      fullWidth={true}
      onChange={onChange}
      value={text}
      multiline={true}
    />
  );
}
