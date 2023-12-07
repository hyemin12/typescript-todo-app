import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoProps, TodosProps } from "type/type";
import Checkbox from "components/Checkbox";
import Input from "components/Input";
import Button from "components/Button";

import "./TodoItem.style.scss";

interface ItemProps {
  todo: TodoProps;
  todos: TodosProps;
  setTodos: Dispatch<SetStateAction<TodosProps>>;
}

function TodoItem({ todo, todos, setTodos }: ItemProps) {
  const [checked, setChecked] = useState(todo.done);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState(todo.text);

  // 할일 완료 토글함수
  const handleToggle = () => {
    const newArr = todos.map((item) => (item.id === todo.id ? { ...item, done: !item.done } : item));
    setTodos(newArr);
  };
  // 할일 수정 함수
  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit && todo.text !== newTodo) {
      const newArr = todos.map((item) => (item.id === todo.id ? { ...item, text: newTodo } : item));
      setTodos(newArr);
    }
  };
  // 할일 삭제
  const handleDelete = () => {
    const newArr = todos.filter((item) => item.id !== todo.id);
    setTodos(newArr);
  };
  return (
    <li className={(checked ? "done " : "") + "todo-item"}>
      <Checkbox state={todo} checked={checked} setChecked={setChecked} onToggle={handleToggle} />

      {isEdit ? <Input type='text' state={newTodo} changeValue={setNewTodo} placeholder='' /> : <p>{todo.text}</p>}

      {isEdit ? (
        <Button action={handleEdit} icon='fas fa-check' $type='primary' />
      ) : (
        <div className='btn_wrapper'>
          <Button action={handleEdit} icon='fas fa-pen' $type='default' $disabled={checked} />
          <Button action={handleDelete} icon={"fas fa-minus-circle"} $type='danger' />
        </div>
      )}
    </li>
  );
}

export default TodoItem;
