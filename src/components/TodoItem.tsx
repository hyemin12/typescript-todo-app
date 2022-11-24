import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, toggleTodo } from "../modules/todos";
import { TodoProps } from "../modules/type";

function TodoItem({ todo }: { todo: TodoProps }) {
  const [checked, setChecked] = useState(todo.done);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <li className={(checked ? "done " : "") + "todo-item"}>
      <input
        type="checkbox"
        id={`check-${todo.id}`}
        onClick={handleToggle}
        onChange={() => {
          setChecked(!checked);
        }}
        checked={todo.done}
      />
      <label htmlFor={`check-${todo.id}`}>
        {checked ? <i className="fas fa-check"></i> : ""}
      </label>
      <p>{todo.text}</p>
      <span className="btn-delete" onClick={handleDelete}>
        <i className="fas fa-minus-circle"></i>
      </span>
    </li>
  );
}

export default TodoItem;
