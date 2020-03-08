import React from "react";
import SaveContainer from "./SaveContainer";
import CancelContainer from "./CancelContainer";
import DeleteContainer from "./DeleteContainer";

export default function ButtonGroup() {
  return (
    <>
      <SaveContainer />
      <CancelContainer />
      <DeleteContainer />
    </>
  );
}
