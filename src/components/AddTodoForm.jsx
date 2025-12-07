import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

function AddTodoForm({ theme }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return; // ignore empty input
    dispatch(addTodo(trimmedTitle));
    setTitle(""); // clear input
  };

  const inputClass = `todo-input ${theme}-input`;
  const buttonClass = `todo-btn ${theme}-button`;

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Add a task."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={inputClass}
      />
      <button type="submit" className={buttonClass}>
        I Got This!
      </button>
    </form>
  );
}

export default AddTodoForm;
