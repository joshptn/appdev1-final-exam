import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todosSlice";

function TodoItem({ todo, theme }) {
  const dispatch = useDispatch();
  const [isFalling, setIsFalling] = useState(false);

  // Toggle completion
  const handleToggle = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  // Trigger delete animation
  const handleDeleteClick = () => {
    setIsFalling(true);
  };

  // Remove todo after animation ends
  const handleTransitionEnd = () => {
    if (isFalling) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <div
      className={`todo ${theme}-todo ${todo.completed ? "completed" : ""} ${isFalling ? "fall" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <li className="todo-item">{todo.title}</li>

      <button className={`check-btn ${theme}-button`} onClick={handleToggle}>
        <i className="fas fa-check"></i>
      </button>

      <button className={`delete-btn ${theme}-button`} onClick={handleDeleteClick}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
