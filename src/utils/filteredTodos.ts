import { TodoProps, TodosProps } from "type/todoType";

export const filterCompleteTodo = (todos: TodosProps) => {
  return todos.filter((todo: TodoProps) => todo.complete);
};

export const filterActiveTodo = (todos: TodosProps) => {
  return todos.filter((todo: TodoProps) => !todo.complete);
};
