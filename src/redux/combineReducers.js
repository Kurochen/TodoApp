import { combineReducers, createStore } from "redux";
import todos from "./todos";
//import visibilityFilter from "./visibilityFilter";

let reducers = combineReducers({
  todos
  //visibilityFilter
});

let store = createStore(reducers);

window.store = store;

export default store;
