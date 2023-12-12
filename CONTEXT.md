```tsx
import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { TodoProps, TodosProps } from "type/type";

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
interface TodoStateType {
  todos: TodosProps;
}
type Action =
  | { type: "ADD"; todo: TodoProps }
  | { type: "EDIT"; text: string; id: number }
  | { type: "TOGGLE_COMPLETE"; id: number }
  | { type: "DELETE"; id: number }
  | { type: "SEARCH"; query: string }
  | { type: "FILTER"; filter: string };
type TodoDispatch = Dispatch<Action>;

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);

function todoReducer(state: TodosProps, action: Action): TodosProps {
  switch (action.type) {
    case "ADD":
      return state.concat(action.todo);
    case "EDIT":
      return state.map((item) => (item.id === action.id ? { ...item, text: action.text } : item));
    case "TOGGLE_COMPLETE":
      return state.map((item) => (item.id === action.id ? { ...item, complete: !item.complete } : item));
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    case "SEARCH":
      return state.filter((item) => item.text.includes(action.query.toLowerCase()));
    case "FILTER":
      const FILTER_TYPE = action.filter.toUpperCase();
      let filteredTodo = state;

      if (FILTER_TYPE === "COMPLETE") {
        filteredTodo = state.filter((item) => item.complete);
      } else if (FILTER_TYPE === "UNCOMPLETE") {
        filteredTodo = state.filter((item) => !item.complete);
      }
      return filteredTodo;

    default:
      return state;
  }
}
export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={{ todos }}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const todos = useContext(TodoStateContext);
  if (!todos) throw new Error("TodoStateContext을 찾을 수 없습니다");
  return todos;
}
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext을 찾을 수 없습니다");
  return dispatch;
}

// checked 업데이트가 되지 않고, checked 업데이트 시 Provider 전체가 재렌더링된다는 단점...
```
