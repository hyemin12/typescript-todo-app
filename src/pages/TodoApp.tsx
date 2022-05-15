import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import "../style.scss";

function TodoApp() {
  const [createMode, setCreate] = useState(false);
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <TodoList />
        {createMode ? (
          <TodoInsert />
        ) : (
          <div
            className="btn-create"
            onClick={() => {
              setCreate(!createMode);
            }}
          >
            <span className="icon-create"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
