import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import CreateBtn from "./components/CreateBtn";

import { RootState } from "./modules";
import { getTodo } from "./modules/todos";
import "./style.scss";
import useLocalStorage from "./hooks/useLocalStorage";

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
  // const todos = useSelector((state: RootState) => state.todoReducer);

  const dispatch = useDispatch();
  const [todos, setTodos] = useLocalStorage("todoApp", initialState);
  console.log(todos);
  const [createMode, setCreate] = useState<boolean>(false);

  const getData = async () => {
    const res = await localStorage.getItem("todoApp");
    if (res !== null) {
      dispatch(getTodo(JSON.parse(res)));
    } else {
      dispatch(
        getTodo([
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
        ])
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="inner">
          <Header todos={todos} />
          <TodoList todos={todos} setTodos={setTodos} />
          <TodoInsert
            createMode={createMode}
            setCreate={setCreate}
            todos={todos}
            setTodos={setTodos}
          />
          <CreateBtn createMode={createMode} setCreate={setCreate} />
        </div>
      </div>
    </div>
  );
}

export default App;
