import React, { useState } from "react";
import Checkbox from "components/Checkbox";
import Input from "components/Input";
import Button from "components/Button";
import useTodoStore from "store/store";
import { TodoProps } from "type/type";

function TodoItem({ todo }: { todo: TodoProps }) {
  const { id, text, complete } = todo;
  const { editTodo, deleteTodo } = useTodoStore();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newText, setNewText] = useState(text);

  // 할일 수정 함수
  const handleEdit = () => {
    if (isEdit && text !== newText) {
      editTodo({ id, text: newText });
    }
    setIsEdit(!isEdit);
  };

  return (
    <li className={(complete ? "done " : "") + "todo-item"}>
      <Checkbox state={todo} />

      {isEdit ? <Input type='text' state={newText} changeValue={setNewText} placeholder='' /> : <p>{todo.text}</p>}

      {isEdit ? (
        <Button action={handleEdit} icon='fas fa-check' $type='primary' />
      ) : (
        <div className='btn_wrapper'>
          <Button action={handleEdit} icon='fas fa-pen' $type='default' $disabled={complete} />
          <Button action={() => deleteTodo(id)} icon={"fas fa-minus-circle"} $type='danger' />
        </div>
      )}
    </li>
  );
}

export default TodoItem;
