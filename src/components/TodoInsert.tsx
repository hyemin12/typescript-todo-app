import React, { FormEvent, useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../modules/todos";
import { TodosState } from "../modules/type";

interface InsertProps {
  createMode: boolean;
  setCreate: Dispatch<SetStateAction<boolean>>;
  setState: Dispatch<SetStateAction<TodosState>>;
  state: TodosState;
}

function TodoInsert({ setCreate, createMode, state, setState }: InsertProps) {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length <= 0) return alert("할 일을 입력해주세요!");
    const newArr = state?.concat({ id: Date.now(), text: value, done: false });
    if (newArr !== undefined) {
      setState(newArr);
      dispatch(addTodo(value));
      setValue("");
      setCreate(false);
    }
  };
  return (
    <div className={"create-todo" + (createMode ? " view" : "")}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          placeholder="할 일을 입력하세요."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoInsert;
