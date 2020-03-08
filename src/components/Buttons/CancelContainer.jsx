import Cancel from "./Cancel";
import { connect } from "react-redux";
import { buttonCancelOffAC } from "../../redux/todos";

let mapStateToProps = state => {
  return {
    disable: state.todos.buttonCancelDisable
  };
};

let mapDispatchToProps = dispatch => {
  return {
    cancelOff: pusto => dispatch(buttonCancelOffAC(pusto))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cancel);
