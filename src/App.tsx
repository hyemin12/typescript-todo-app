import React, { useState } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import CreateBtn from "./components/CreateBtn";

import useLocalStorage from "./hooks/useLocalStorage";

import "./style.scss";

const initialState = [
  {
    id: 1234,
    text: "타입스크립트 공부하기",
    done: false,
  },
  {
    id: 555,
    text: "할일 완료!",
    done: true,
  },
];

function App() {
  const [todos, setTodos] = useLocalStorage("todoApp", initialState);

  const [createMode, setCreate] = useState<boolean>(false);

  return (
    <div className='App'>
      <div className='container'>
        <div className='inner'>
          <Header todos={todos} />
          <TodoInsert createMode={createMode} setCreate={setCreate} todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
