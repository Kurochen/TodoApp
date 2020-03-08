import Description from "./Description";
import { connect } from "react-redux";
import { buttonsActiveOnAC, descriptionSaveAC } from "../../redux/todos";

let mapStateToProps = state => {
  return {
    description: state.todos.description,
    buttonCancelDidClick: state.todos.buttonCancelDidClick,
    buttonSaveDidClick: state.todos.buttonSaveDidClick
  };
};

let mapDispatchToProps = dispatch => {
  return {
    buttonsActiveOn: todoId => dispatch(buttonsActiveOnAC(todoId)),
    descriptionSave: description => dispatch(descriptionSaveAC(description))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
