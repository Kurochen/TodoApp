import React from "react";
import { Provider } from "react-redux";
import store from "../redux/combineReducers";
//import Navbar from "./Navbar";
//import Body from "./Main";
//import Footer from "./Footer";
import ButtonGroup from "./Buttons/ButtonGroup";
import DescriptionContainer from "./Text/DescriptionContainer";
import TitleContainer from "./Text/TitleContainer";
//import ButtonDelete from "./Buttons/ButtonDelete";
//import ButtonSave from "./Buttons/ButtonSave";
import { makeStyles } from "@material-ui/core/styles";
import TableLayout from "./Table/TableLayout";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#fafafa"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ButtonGroup />
      <TitleContainer />
      <DescriptionContainer />
      <TableLayout />

      <div className={classes.root}>
        {/* <Navbar />
      <Body />
      <Footer /> */}
      </div>
    </Provider>
  );
}

//test github