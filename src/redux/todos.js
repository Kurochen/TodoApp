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



//console.log('Data', data)

const todos = (state = data, action) => {
  switch (action.type) {
    case "BUTTONS_ACTIVE_ON":
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            buttonCancelDisable: false,
            buttonSaveDisable: false
          }
          : todo);
    case "BUTTON_CANCEL_OFF":
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            buttonCancelDisable: true,
            buttonSaveDisable: true,
            buttonCancelDidClick: !todo.buttonCancelDidClick
          }
          : todo);
    case "BUTTON_SAVE_OFF":
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            buttonCancelDisable: true,
            buttonSaveDisable: true,
            buttonSaveDidClick: !todo.buttonSaveDidClick
          }
          : todo);
    case "DESCRIPTION_SAVE":
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            description: action.text
          }
          : todo);
    case "TITLE_SAVE":
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            title: action.text
          }
          : todo);
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export const descriptionSaveAC = (text, id) => ({
  type: DESCRIPTION_SAVE,
  text,
  id
});
export const titleSaveAC = (text, id) => ({
  type: TITLE_SAVE,
  text,
  id
});
export const buttonsActiveOnAC = id => ({
  type: BUTTONS_ACTIVE_ON,
  id
});
export const buttonCancelOffAC = id => ({
  type: BUTTON_CANCEL_OFF,
  id
});
export const buttonSaveOffAC = id => ({
  type: BUTTON_SAVE_OFF,
  id
});
let nextTodoId = 1
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export default todos;
