import React from "react";
import Save from "./Save";
import Cancel from "./Cancel";
import Delete from "./Delete";

export default function ButtonGroup(props) {
  return (
    <>
      <Save
        buttonSaveDisable={props.buttonSaveDisable}
        id={props.id}
        saveOff={props.saveOff}
      />
      <Cancel
        buttonCancelDisable={props.buttonCancelDisable}
        id={props.id}
        cancelOff={props.cancelOff}
      />
      <Delete
        id={props.id}
        deleteTodo={props.deleteTodo}
      />
    </>
  );
}
