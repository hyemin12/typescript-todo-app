import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../modules/todos";
import { CreateModeProps } from "../modules/type";

function TodoInsert({ setCreate, createMode }: CreateModeProps) {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length !== 0) {
      dispatch(addTodo(value));
      setValue("");
      setCreate(false);
    } else {
      alert("할 일을 입력해주세요!");
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
