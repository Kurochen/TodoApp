import TableLayout from "./TableLayout";
import { connect } from "react-redux";

let mapStateToProps = state => {
    return {
        state: state.todos
    };
};

export default connect(
    mapStateToProps
)(TableLayout);
