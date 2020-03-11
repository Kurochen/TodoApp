import Title from "./Title";
import { connect } from "react-redux";
import { buttonsActiveOnAC, titleSaveAC } from "../../redux/todos";

// let mapStateToProps = state => {
//   return {
//     title: state.todos.title,
//     buttonCancelDidClick: state.todos.buttonCancelDidClick,
//     buttonSaveDidClick: state.todos.buttonSaveDidClick
//   };
// };

// let mapDispatchToProps = dispatch => {
//   return {
//     buttonsActiveOn: todoId => dispatch(buttonsActiveOnAC(todoId)),
//     titleSave: title => dispatch(titleSaveAC(title))
//   };
// };

export default connect(
  // mapStateToProps,
  //mapDispatchToProps
)(Title);
