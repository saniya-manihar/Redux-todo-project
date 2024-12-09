import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";

export default function AddForm() {
  const [Task, setTask] = useState("");
  const dispatch = useDispatch();

  const submithandler = (e) => {
    e.preventDefault();
    if (Task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    dispatch(addTodo(Task));
    setTask("");
  };

  return (
    <form
      onSubmit={submithandler}
      className="flex flex-col items-center gap-4"
    >
      <input
        type="text"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
      >
        ➕ Add Task
      </button>
    </form>
  );
}
