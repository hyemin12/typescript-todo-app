import { TodoProps, TodosProps } from "type/type";
import { create } from "zustand";
import { persist, createJSONStorage, createWebStorage, StateCreator } from "zustand/middleware";

const initialState: TodosProps = [
  {
    id: 1234,
    text: "타입스크립트 공부하기",
    complete: false,
  },
  {
    id: 555,
    text: "할일 완료!",
    complete: true,
  },
];

interface TodoState {
  todos: TodosProps;
  addTodo: (todo: TodoProps) => void;
  editTodo: ({ text, id }: { text: string; id: number }) => void;
  toggleCompleteTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  searchTodo: (query: string) => void;
  filterTodo: (filter: string) => void;
  deleteCompleteTodo: () => void;
}

const useTodoStore = create(
  persist<TodoState>(
    (set) => ({
      todos: initialState,
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      editTodo: ({ text, id }) =>
        set((state) => ({
          todos: state.todos.map((item) => (item.id === id ? { ...item, text: text } : item)),
        })),
      toggleCompleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((item) => (item.id === id ? { ...item, complete: !item.complete } : item)),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== id),
        })),
      searchTodo: (query) =>
        set((state) => ({
          todos: state.todos.filter((item) => item.text.includes(query.toLowerCase())),
        })),
      filterTodo: (filter) =>
        set((state) => {
          const FILTER_TYPE = filter.toUpperCase();

          if (FILTER_TYPE === "COMPLETE") {
            return { todos: state.todos.filter((item) => item.complete) };
          } else if (FILTER_TYPE === "UNCOMPLETE") {
            return { todos: state.todos.filter((item) => !item.complete) };
          }

          return { todos: state.todos };
        }),
      deleteCompleteTodo: () =>
        set((state) => ({
          todos: state.todos.filter((item) => !item.complete),
        })),
    }),
    { name: "todo-storage", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useTodoStore;
