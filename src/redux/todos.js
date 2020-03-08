import { data } from "./data";

const ADD_TODO = "ADD_TODO";
const BUTTONS_ACTIVE_ON = "BUTTONS_ACTIVE_ON";
const BUTTON_SAVE_OFF = "BUTTON_SAVE_OFF";
const BUTTON_CANCEL_OFF = "BUTTON_CANCEL_OFF";
const DESCRIPTION_SAVE = "DESCRIPTION_SAVE";
const TITLE_SAVE = "TITLE_SAVE";

// let initialState = {
//   title: "Kurochen title",
//   description: "Kurochen description",
//   buttonSaveDisable: true,
//   buttonCancelDisable: true,
//   buttonCancelDidClick: 1,
//   buttonSaveDidClick: 1
// };

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "BUTTONS_ACTIVE_ON":
      return {
        ...state,
        buttonCancelDisable: false,
        buttonSaveDisable: false
      };
    case "BUTTON_CANCEL_OFF":
      return {
        ...state,
        buttonCancelDisable: true,
        buttonSaveDisable: true,
        buttonCancelDidClick: !state.buttonCancelDidClick
      };
    case "BUTTON_SAVE_OFF":
      return {
        ...state,
        buttonCancelDisable: true,
        buttonSaveDisable: true,
        buttonSaveDidClick: !state.buttonSaveDidClick
      };
    case "DESCRIPTION_SAVE":
      return {
        ...state,
        description: action.text
      };
    case "TITLE_SAVE":
      return {
        ...state,
        title: action.text
      };
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export const descriptionSaveAC = text => ({
  type: DESCRIPTION_SAVE,
  text
});
export const titleSaveAC = text => ({
  type: TITLE_SAVE,
  text
});
export const buttonsActiveOnAC = todoId => ({
  type: BUTTONS_ACTIVE_ON,
  todoId
});
export const buttonCancelOffAC = pusto => ({
  type: BUTTON_CANCEL_OFF,
  pusto
});
export const buttonSaveOffAC = text => ({
  type: BUTTON_SAVE_OFF,
  text
});
let nextTodoId = 1
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export default todos;
