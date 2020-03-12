import Modal from "./Modal";
import { connect } from "react-redux";
import { addTodoAC } from "../../redux/todos";

let mapDispatchToProps = dispatch => {
    return {
        addTodo: (title, description) => dispatch(addTodoAC(title, description))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Modal);