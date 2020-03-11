import Description from "./Description";
import { connect } from "react-redux";
import { buttonsActiveOnAC, descriptionSaveAC } from "../../redux/todos";

// let mapStateToProps = state => {
//   return {
//     description: state.todos.description,
//     buttonCancelDidClick: state.todos.buttonCancelDidClick,
//     buttonSaveDidClick: state.todos.buttonSaveDidClick
//   };
// };

let mapDispatchToProps = dispatch => {
  return {
    buttonsActiveOn: id => dispatch(buttonsActiveOnAC(id)),
    descriptionSave: (text, id) => dispatch(descriptionSaveAC(text, id))
  };
};

export default connect(
  null,
  //mapStateToProps,
  mapDispatchToProps
)(Description);
