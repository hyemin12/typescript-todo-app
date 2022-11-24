## 타입스크립트 리덕스

1. 리덕스 리듀서 모듈 생성

- modules
  - index.ts (combineReducers로 리듀서 모듈 하나로 통합)
  - todo.ts (액션, 액션생성함수, 리듀서)
    <br>

2. 액션, 액션생성함수 작성 (modules/todo.ts)

2-1. action 타입 정의
필요한 액션 타입을 상수로 설정, <br>
액션 타입들을 상수화 시켜두면 추후에 코드 수정에 있어 용이함

```js
const ADD_TODO = "todos/ADD_TODO" as const;
const DELETE_TODO = "todo/DELETE_TODO" as const;
const TOGGLE_TODO = "todo/TOGGLE_TODO" as const;
```

<br>
2-2. action 생성 함수
모듈을 외부에서 사용할 수 있도록 export 함

```js
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
```

<br>
2-3. action 객체 타입 설정
ReturnType<T>는 유틸리티 타입의 한 종류로 전역적으로 사용이 가능함, <br>
함수T의 반환 타입으로 구성된 타입으로 구성된 타입을 만들어줌

```js
export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>;
```

하단과 동일

```js
type TodoAction =
  | {
      type: "todo/ADD_TODO",
      payload: string,
    }
  | {
      type: "todo/DELETE_TODO",
      payload: number,
    }
  | {
      type: "todo/TOGGLE_TODO",
      payload: number,
    };
```

<br>
<br>

3. state에 대해 필요한 타입과 초기값 설정

```js
export type Todo = {
  id: number,
  text: string,
  done: boolean,
};

export type TodosState = Todo[];

const initialState: TodosState = [
  {
    id: 1234,
    text: "타입스크립트 공부하기",
    done: false,
  },
  {
    id: 555,
    text: "할일 완료!",
    done: true,
  },
];
```

<Br>

4. 리듀서 함수 생성

```js
function todoReducer(
  state: TodosState = initialState,
  action: TodoAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: Date.now(),
        text: action.payload,
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
```

<br>
<br>

5. rootReducer 만들기 (modules/index.ts)
   combineReducers로 리듀서 모듈 하나로 통합

```js
import { combineReducers } from "redux";
import todoReducer from "./todos";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```

6. 최상위 컴포넌트 Provider로 감싸기 (store 생성)

6-1. createStore()

```js
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

import App from "./App";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```

6-2. configureStore()

```js
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./modules/todos";

import App from "./App";

const store = configureStore({ reducer: todoReducer });
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```
