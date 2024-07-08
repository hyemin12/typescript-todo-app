import React, { useState } from "react";
import Header from "components/Header";
import Welcome from "components/Welcome";
import Button from "components/Button";
import { filterCompleteTodo } from "utils/filteredTodos";
import useTodoStore from "store/store";
import "assets/scss/style.scss";
import CreateTodo from "components/CreateTodo";
import TodoList from "components/TodoList";
import FilterRadios from "components/FilterRadios";

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
