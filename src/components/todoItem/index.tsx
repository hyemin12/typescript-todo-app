import React, { useState } from "react";
import Checkbox from "components/checkbox";
import Input from "components/Input";
import Button from "components/Button";
import useTodoStore from "store/store";
import { TodoProps } from "type/type";
import styles from "./todoItem.module.scss";

const EDIT_ICON_CLASS = "fas fa-pen";
const DELETE_ICON_CLASS = "fas fa-minus-circle";
const CHECK_ICON_CLASS = "fas fa-check";

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
    <li className={(complete ? "done " : "") + styles.item}>
      <Checkbox state={todo} />

      {isEdit ? <Input type='text' state={newText} changeValue={setNewText} placeholder='' /> : <p>{todo.text}</p>}

      {isEdit ? (
        <Button action={handleEdit} icon={CHECK_ICON_CLASS} $type='primary' />
      ) : (
        <div className='btn_wrapper'>
          <Button action={handleEdit} icon={EDIT_ICON_CLASS} $type='default' $disabled={complete} />
          <Button action={() => deleteTodo(id)} icon={DELETE_ICON_CLASS} $type='danger' />
        </div>
      )}
    </li>
  );
}

export default TodoItem;
