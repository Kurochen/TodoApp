import Delete from "./Delete";
import { connect } from "react-redux";
import { deleteTodoAC } from "../../redux/todos";

// let mapStateToProps = state => {
//   return {
//     disable: state.todos.buttonCancelDisable
//   };
// };

let mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodoAC(id))
  };
};

export default connect(
  null,
  //mapStateToProps,
  mapDispatchToProps
)(Delete);