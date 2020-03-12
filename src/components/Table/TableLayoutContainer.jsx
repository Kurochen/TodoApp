import TableLayout from "./TableLayout";
import { connect } from "react-redux";
// import {
//     buttonsActiveOnAC,
//     titleSaveAC,
//     descriptionSaveAC
// } from "../../redux/todos";

let mapStateToProps = state => {
    return {
        state: state.todos
    };
};

// let mapDispatchToProps = dispatch => {
//     return {
//         descriptionSave: description => dispatch(descriptionSaveAC(description)),
//         titleSave: title => dispatch(titleSaveAC(title)),
//         buttonsActiveOn: todoId => dispatch(buttonsActiveOnAC(todoId))
//     }
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(TableLayout);
