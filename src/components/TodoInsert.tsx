import React, { FormEvent, useState, Dispatch, SetStateAction } from "react";

import Input from "./Input";

import { TodosProps } from "../type";

interface InsertProps {
  createMode: boolean;
  setCreate: Dispatch<SetStateAction<boolean>>;
  setTodos: Dispatch<SetStateAction<TodosProps>>;
  todos: TodosProps;
}

function TodoInsert({ setCreate, createMode, todos, setTodos }: InsertProps) {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value.length <= 0) return alert("할 일을 입력해주세요!");

    const newArr = todos?.concat({ id: Date.now(), text: value, done: false });

    setTodos(newArr);
    setValue("");
    setCreate(false);
  };
  return (
    <div className={"create-todo" + (createMode ? " view" : "")}>
      <form onSubmit={onSubmit}>
        <Input
          type={"text"}
          placeholder={"할 일을 입력하세요."}
          state={value}
          changeValue={setValue}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoInsert;
