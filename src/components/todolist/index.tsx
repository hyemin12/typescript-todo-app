import React, { Dispatch, SetStateAction } from "react";
import TodoItem from "components/todoItem/";
import Button from "components/Button";
import { TodosProps } from "type/type";

import "./TodoList.style.scss";

function TodoList({ todos, setTodos }: { todos: TodosProps; setTodos: Dispatch<SetStateAction<TodosProps>> }) {
  if (todos.length <= 0)
    return (
      <div className='empty-todo'>
        <h4>새로운 할일을 추가해보세요!</h4>
        <p>할 일을 입력하고, 등록버튼을 누르면 할일을 추가할 수 있어요.</p>
        <div className='tool-tip-wrapper'>
          <p>todo가 처음이신가요? </p>
          <p className='tool-tip-btn' role='button'>
            사용방법 알아보기
          </p>
        </div>
      </div>
    );
  return (
    <ul className='todo-list'>
      {todos
        .sort((a, b) => (a.done > b.done ? 1 : -1))
        .map((todo) => (
          <TodoItem todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
        ))}
    </ul>
  );
}

export default TodoList;
