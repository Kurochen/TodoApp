import React from "react";
import SaveContainer from "./SaveContainer";
import CancelContainer from "./CancelContainer";
import DeleteContainer from "./DeleteContainer";

export default function ButtonGroupContainer(props) {
  //console.log('ButtonGroupContainer', props)

  return (
    <>
      <SaveContainer buttonSaveDisable={props.buttonSaveDisable} id={props.id} />
      <CancelContainer buttonCancelDisable={props.buttonCancelDisable} id={props.id} />
      <DeleteContainer />
    </>
  );
}
