import TodoItem from "./TodoItem";

import { TodosState } from "../modules/type";

function TodoList({ todos }: { todos: TodosState }) {
  if (todos.length === 0) return <p className="empty-todo">할일이 없습니다.</p>;
  return (
    <>
      {todos && (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
