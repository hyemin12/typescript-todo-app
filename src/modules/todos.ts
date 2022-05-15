// Action Type 정의
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const DELETE_TODO = "todos/DELETE_TODO" as const;

// action 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
  },
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
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>;

// type 초기값
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [];

// reducer
function todoReducer(
  state: TodosState = initialState,
  action: TodoAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
export default todoReducer;
