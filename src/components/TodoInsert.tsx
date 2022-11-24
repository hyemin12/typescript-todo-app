import React, { FormEvent, useState } from "react";

type TodoInsertProps = {
  onInsert: (text: string) => void;
  mode: boolean;
};

function TodoInsert({ onInsert, mode }: TodoInsertProps) {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length !== 0) {
      onInsert(value);
      setValue("");
    }
  };
  return (
    <div className={"create-todo" + (mode ? " view" : "")}>
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
