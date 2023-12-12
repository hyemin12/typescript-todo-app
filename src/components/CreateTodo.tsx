import React, { FormEvent, useState } from "react";
import Button from "components/Button";
import useTodoStore from "store/store";

function CreateTodo() {
  const { addTodo } = useTodoStore();
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

    if (value.length <= 0) return alert("할 일을 입력해주세요!");

    const newTodo = { id: Date.now(), text: value, complete: false };

    addTodo(newTodo);
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
