import Save from "./Save";
import { connect } from "react-redux";
import { buttonSaveOffAC } from "../../redux/todos";

let mapStateToProps = state => {
  return {
    disable: state.todos.buttonSaveDisable
  };
};

let mapDispatchToProps = dispatch => {
  return {
    saveOff: pusto => dispatch(buttonSaveOffAC(pusto))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Save);
