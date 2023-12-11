import React, { FormEvent, useState, Dispatch, SetStateAction } from "react";
import Button from "components/Button";
import { TodosProps } from "type/type";

import "./CreateTodo.style.scss";

interface CreateTodoProps {
  setTodos?: Dispatch<SetStateAction<TodosProps>>;
  todos: TodosProps;
}

function CreateTodo({ todos, setTodos }: CreateTodoProps) {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputValidation = (value: string) => {
    if (value.length >= 25) {
      setErrorMessage("글자는 25글자를 넘을 수 없습니다.");
      return "Error";
    } else {
      setErrorMessage("");
      setValue(value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValidation(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!setTodos) return;
    if (value.length <= 0) return alert("할 일을 입력해주세요!");

    const newArr = todos?.concat({ id: Date.now(), text: value, done: false });

    setTodos(newArr);
    setValue("");
  };

  return (
    <div className='create_todo_wrapper'>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='할 일을 입력하세요.' value={value} onChange={onChange} />
        <Button $type='primary' text='등록' />
      </form>
      {errorMessage && <p className='error_msg'>{errorMessage}</p>}
    </div>
  );
}

export default CreateTodo;
