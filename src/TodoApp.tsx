import React, { useState } from "react";
import CreateTodo from "components/createTodo";
import Header from "components/Header";
import TodoList from "components/todoList";
import Welcome from "components/Welcome";
import Button from "components/Button";
import FilterRadios from "components/filterRadios";
import { filterCompleteTodo } from "utils/filteredTodos";
import useTodoStore from "store/store";
import "assets/scss/style.scss";

function TodoApp() {
  const { deleteCompleteTodo, todos } = useTodoStore();
  const [welcomeTip, setWelcomeTip] = useState(false);

  return (
    <div className='inner'>
      {welcomeTip ? (
        <Welcome setWelcomeTip={setWelcomeTip} />
      ) : (
        <>
          <Header />
          <CreateTodo />
          <TodoList setWelcomeTip={setWelcomeTip} />
          <div className='feature-wrapper'>
            <FilterRadios />
            <Button
              $type='transparent'
              text='완료 할일 삭제'
              $disabled={filterCompleteTodo(todos).length === 0}
              action={deleteCompleteTodo}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default TodoApp;
