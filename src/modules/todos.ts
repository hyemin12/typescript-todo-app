import {
  GET_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TodosState,
} from "./type";

// action 생성 함수
export const getTodo = (todos: TodosState) => ({
  type: GET_TODO,
  payload: todos,
});
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

// action type
export type TodoAction =
  | ReturnType<typeof getTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>;

// reducer
function todoReducer(state: TodosState = [], action: TodoAction): TodosState {
  switch (action.type) {
    case GET_TODO:
      state = [...action.payload];
      return state;
    case ADD_TODO:
      const newArr = state.concat({
        id: Date.now(),
        text: action.payload,
        done: false,
      });
      console.log(newArr);
      localStorage.setItem("todoApp", JSON.stringify(newArr));
      return newArr;

    case TOGGLE_TODO:
      const toggleArr = state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      localStorage.setItem("todoApp", JSON.stringify(toggleArr));
      return toggleArr;

    case DELETE_TODO:
      const deleteArr = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todoApp", JSON.stringify(deleteArr));
      return deleteArr;

    default:
      return state;
  }
}
export default todoReducer;
