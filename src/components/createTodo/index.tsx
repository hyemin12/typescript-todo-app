import React, { FormEvent, useState } from "react";
import Button from "components/Button";
import useTodoStore from "store/store";
import styles from "./createTodo.module.scss";

function CreateTodo() {
  const { addTodo } = useTodoStore();
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (value: string) => {
    if (value.length >= 25) {
      return "글자는 25글자를 넘을 수 없습니다.";
    }
    return null;
  };

  const validateAndSetInput = (inputValue: string) => {
    const error = validateInput(inputValue);
    if (error) return setErrorMessage(error);
    setErrorMessage("");
    setValue(inputValue);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    validateAndSetInput(inputValue);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: value, complete: false };
    addTodo(newTodo);
    setValue("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='할 일을 입력하세요.' required value={value} onChange={onChange} />
        <Button $type='primary' text='등록' />
      </form>
      {errorMessage && <p className={styles.error_msg}>{errorMessage}</p>}
    </div>
  );
}

export default CreateTodo;
