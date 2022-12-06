import React, { Dispatch, SetStateAction } from "react";
import TodoItem from "./TodoItem";

import { TodosProps } from "../type";

function TodoList({
  todos,
  setTodos,
}: {
  todos: TodosProps;
  setTodos: Dispatch<SetStateAction<TodosProps>>;
}) {
  if (todos.length === 0) return <p className="empty-todo">할일이 없습니다.</p>;
  return (
    <>
      {todos && (
        <ul className="todo-list">
          {todos
            .sort((a, b) => (a.done > b.done ? 1 : -1))
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
