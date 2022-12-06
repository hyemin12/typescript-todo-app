import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoProps, TodosProps } from "../type";

interface ItemProps {
  todo: TodoProps;
  todos: TodosProps;
  setTodos: Dispatch<SetStateAction<TodosProps>>;
}

function TodoItem({ todo, todos, setTodos }: ItemProps) {
  const [checked, setChecked] = useState(todo.done);

  // 할일 완료 토글함수
  const handleToggle = () => {
    const newArr = todos.map((item) =>
      item.id === todo.id ? { ...item, done: !item.done } : item
    );
    setTodos(newArr);
  };
  // 할일 삭제
  const handleDelete = () => {
    const newArr = todos.filter((item) => item.id !== todo.id);
    setTodos(newArr);
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
