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

let mapDispatchToProps = dispatch => {
  return {
    buttonsActiveOn: id => dispatch(buttonsActiveOnAC(id)),
    titleSave: (text, id) => dispatch(titleSaveAC(text, id))
  };
};

export default connect(
  null,
  // mapStateToProps,
  mapDispatchToProps
)(Title);
