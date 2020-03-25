import TableBody from "./TableBody";
import { connect } from "react-redux";
import {
    buttonCancelOffAC,
    buttonSaveOffAC,
    deleteTodoAC,

    titleSaveAC,
    descriptionSaveAC,
    buttonsActiveOnAC,
} from "../../redux/todos";

let mapStateToProps = state => {
    return {
        state: state.todos
    };
};

let mapDispatchToProps = dispatch => {
    return {
        cancelOff: id => dispatch(buttonCancelOffAC(id)),
        saveOff: id => dispatch(buttonSaveOffAC(id)),
        deleteTodo: id => dispatch(deleteTodoAC(id)),

        descriptionSave: (text, id) => dispatch(descriptionSaveAC(text, id)),
        titleSave: (text, id) => dispatch(titleSaveAC(text, id)),
        buttonsActiveOn: todoId => dispatch(buttonsActiveOnAC(todoId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableBody);
