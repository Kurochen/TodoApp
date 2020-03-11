import Save from "./Save";
import { connect } from "react-redux";
import { buttonSaveOffAC } from "../../redux/todos";

// let mapStateToProps = state => {
//   return {
//     disable: state.todos.buttonSaveDisable
//   };
// };

let mapDispatchToProps = dispatch => {
  return {
    saveOff: id => dispatch(buttonSaveOffAC(id))
  };
};

export default connect(
  null,
  // mapStateToProps,
  mapDispatchToProps
)(Save);
