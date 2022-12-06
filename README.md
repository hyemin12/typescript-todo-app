# typescript Todo App

<a href="https://hm-tsc-todo-app.netlify.app/" target="_blank"><img src="https://raw.githubusercontent.com/hyemin12/2022_portfolio/master/public/assets/nodejs-mysql.webp" /></a>
이미지를 클릭하면 배포 사이트로 이동합니다.

<hr>

## 기능

- Todo Item 추가
- Todo Item 삭제
- Todo Item 완료 여부 (체크박스)
- 남은 할일 개수

<br>
<br>

## 컴포넌트 구성

- Header : 날짜 및 남은 할일 개수
- TodoList : 할일 목록 리스트 <br>(TodoItem으로 이루어져 있음)
- TodoInsert : 투두 작성 컴포넌트 <br>(add 버튼 누르면 새로운 할일 목록 생성)
- CreateBtn : 할일 작성 컴포넌트를 보여주고, 숨기는 버튼 <br>(create 모드로 전환 시 + 모양이 x 모양으로 변경되고, TodoInsert 컴포넌트가 보여짐)
- TodoItem : 할일 목록 <br>(완료 여부 checkbox, 할일 내용, 삭제버튼으로 이루어져있음)

<br>
<br>

2022.12 ver.

## useLocalStorage 훅 만들어서 로컬스토리지를 통해 투두리스트 데이터 관리

App에서 useLocalStorage 훅을 불러와서, 하위 컴포넌트들에게 전달하여 state 값 변경함

```js
// hooks/useLocalStorage.js
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const localDB = JSON.parse(localStorage.getItem(key));

  const [state, setState] = useState(localDB || initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
export default useLocalStorage;
```

```js
// App.js

function App() {
  const [todos, setTodos] = useLocalStorage("todoApp", initialState);

  const [createMode, setCreate] = useState < boolean > false;

  return (
    <div className="App">
      <div className="container">
        <div className="inner">
          <Header todos={todos} />
          <TodoList todos={todos} setTodos={setTodos} />
          <TodoInsert
            createMode={createMode}
            setCreate={setCreate}
            todos={todos}
            setTodos={setTodos}
          />
          <CreateBtn createMode={createMode} setCreate={setCreate} />
        </div>
      </div>
    </div>
  );
}

export default App;
```

2022.11 ver.

## todo list 로컬스토리지에서 관리

1. 첫 로드 시 로컬스토리지에서 해당 투두 리스트 가져오기 (비동기)

- 없을 경우: 초기값 세팅
- 있을 경우: JSON.parse해서 dispatch 하기

2. redux store에서 state값으로 세팅

3. state 가져와서 각 컴포넌트에서 사용하기

```js
// App.js

// todos 가져오기 (redux store에서)
const todos = useSelector((state: RootState) => state.todoReducer);

const dispatch = useDispatch();

// 첫 로드 시 todolist 가져오기
const getData = async () => {
  const res = await localStorage.getItem("todoApp");
  if (res !== null) {
    dispatch(getTodo(JSON.parse(res)));
  } else {
    dispatch(
      getTodo([
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
      ])
    );
  }
};

useEffect(() => {
  getData();
}, []);
```
