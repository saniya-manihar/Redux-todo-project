import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/todoslice"
const store = configureStore({
  reducer: {
    todos: todosReducer, 
  },
});

export default store;
