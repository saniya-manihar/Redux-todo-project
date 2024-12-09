import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
 // todos: [{ id: "abc", task: "", isDone: false }], // Correct structure
 todos: []
};

const todoslice = createSlice({
  name: "todoslice",
  initialState,
  reducers: {
    // Reducer to add a new todo
    addTodo: (state, action) => {
      const newtodo = {
        id: nanoid(), // Generate a unique ID
        task: action.payload, // Task from payload
        isDone: false, // Default value for isDone
      };
      state.todos.push(newtodo); // Add to the todos array
    },

    // Reducer to delete a todo by ID
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Reducer to mark a todo as done by ID
    markasDone: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true; // Update isDone to true
        }
      });
    },
  },
});

// Exporting actions and reducer
export const { addTodo, deleteTodo, markasDone } = todoslice.actions;
export default todoslice.reducer;
