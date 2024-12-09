import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markasDone } from "../features/todo/todoslice";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const clickhandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const done = (id) => {
    dispatch(markasDone(id));
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex flex-col items-center py-8 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold  mb-8 drop-shadow-md">📝 My Todo List</h1>

      {/* Add Task Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mb-8">
     
        <AddForm />
      </div>

      {/* Task List */}
      
      <div className="rounded-lg shadow-lg mt-8 w-full max-w-lg p-6 bg-white">
       
       <h4>Task to be added 👉 : </h4>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md transition-all ease-in-out duration-300 ${
                todo.isDone ? "line-through text-gray-500" : "hover:bg-blue-50"
              }`}
            >
              <span className={`text-lg ${todo.isDone ? "text-gray-500" : "text-gray-900"}`}>
                {todo.task}
              </span>
              <div className="flex items-center gap-6"> {/* Increased the gap here */}
                {/* Delete Button */}
                <button
                  onClick={() => clickhandler(todo.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all ease-in-out duration-300 flex items-center gap-1"
                >
                  🗑️
                  <span className="hidden md:inline">Delete</span>
                </button>

                {/* Mark as Done Checkbox */}
                <input
                  type="checkbox"
                  checked={todo.isDone} // If isDone is true, the checkbox will be checked
                  onChange={() => done(todo.id)} // Call the done function when checkbox is clicked
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
