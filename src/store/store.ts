import { FilterTypes, TodoProps, TodosProps } from "type/todoType";
import { filterActiveTodo } from "utils/filteredTodos";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState: TodosProps = [];
const initialFilterType = "All";

interface TodoState {
  todos: TodosProps;
  filterType: FilterTypes;
  addTodo: (todo: TodoProps) => void;
  editTodo: ({ text, id }: { text: string; id: number }) => void;
  toggleCompleteTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  searchTodo: (query: string) => void;
  filterTodo: (filter: string) => void;
  deleteCompleteTodo: () => void;
}

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: initialState,
      filterType: initialFilterType,
      // 할일 추가
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      // 할일 수정
      editTodo: ({ text, id }) =>
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, text: text } : item
          ),
        })),
      // 할일 완료
      toggleCompleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, complete: !item.complete } : item
          ),
        })),
      // 할일 삭제
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== id),
        })),
      // 할일 검색
      searchTodo: (query) =>
        set((state) => ({
          todos: state.todos.filter((item) =>
            item.text.includes(query.toLowerCase())
          ),
        })),
      // 할일 필터
      filterTodo: (filterType) =>
        set(() => ({
          filterType: filterType as FilterTypes,
        })),
      // 완료된 할일 전체 삭제
      deleteCompleteTodo: () =>
        set((state) => ({
          todos: filterActiveTodo(state.todos),
        })),
    }),
    { name: "todo-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useTodoStore;
