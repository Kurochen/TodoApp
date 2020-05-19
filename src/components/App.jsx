import React from "react";
import { Provider } from "react-redux";
import store from "../redux/combineReducers";
import { makeStyles } from "@material-ui/core/styles";
import TableLayout from "./Table/TableLayout";
import ModalContainer from './Modal/ModalContainer'
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundColor: '#eaebeb'
  },
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(7),
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline />
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>
          <TableLayout />
          <ModalContainer />
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}