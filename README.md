# typescript Todo App

<a href="https://hm-tsc-todo-app.netlify.app/" target="_blank"><img src="https://raw.githubusercontent.com/hyemin12/2022_portfolio/master/public/assets/nodejs-mysql.webp" /></a>
이미지를 클릭하면 배포 사이트로 이동합니다.

- 할일 목록을 보여주는 목록과 할 일을 추가 기능 구현

  - 신규 유저 Welcoming 툴팁
    - 일을 한번도 추가하지 않은 유저에게는 버튼에 환영과 함께 설명이 담긴 안내 툴팁을 노출
  - 할 일 입력 형식 검증
    - 사용자가 입력하는 할 일의 내용이 특정 형식(최소 글자 수, 특정 키워드 포함 등)을 충족하는지 검증하는 로직을 추가
  - 최근 추가된 할일을 우선 표시
    - 사용자가 새로운 할 일을 추가하면, 그 할 일을 목록의 가장 위에 표시하는 기능

- 구현된 기능에 할 일 완료 기능을 추가

  - 완료된 할 일에 대한 통계 제공
    - 사용자가 완료한 할 일의 수를 표시하고, 일정 기간 동안 완료한 할 일의 추세를 보여주는 기능입니다.
  - 할 일 완료 시간 기록
    - 할 일을 완료했을 때의 시간을 기록하여, 사용자가 각 할 일을 얼마나 빨리 또는 늦게 완료했는지 추적할 수 있게 합니다
  - 할 일 완료 알림 설정
    - 사용자가 할 일을 완료하지 않았을 경우, 설정된 시간에 알림을 보내주는 기능입니다.

- 할 일 상태에 따른 필터링 기능을 추가

  - 필터링된 할 일 목록을 저장 / 불러오기 기능
    - 사용자가 설정한 필터링 조건(예: 완료된 할 일만 보기, 미완료된 할 일만 보기)을 로컬 저장소에 저장하고, 앱을 다시 실행할 때 이전의 필터링 상태를 유지하게 하는 기능입니다
  - 필터링 옵션에 우선 순위 설정
    - 사용자가 다양한 필터링 조건(예: 마감 기한이 임박한 할 일, 추가된 지 오래된 할 일 등)을 설정할 수 있으며, 이들 중 어떤 조건을 우선 적용할지 설정할 수 있는 기능입니다.
  - 필터링 기준을 사용자가 직접 생성/수정할 수 있는 기능
    - 예를 들어, 사용자가 '긴급', '중요', '일반' 등과 같은 자신만의 카테고리를 만들어 할 일을 분류하고, 이 카테고리별로 필터링 할 수 있는 기능입니다.

- 할 일 검색 기능을 추가해주세요
  - 실시간 검색 결과 강조 기능
    - 검색어와 일치하는 부분을 강조하여 사용자가 쉽게 일치하는 할 일을 찾을 수 있게 하는 기능입니다.
  - 검색 히스토리 저장 및 빠른 접근 기능
    - 이전에 검색했던 내용을 저장하고, 사용자가 이를 쉽게 다시 검색할 수 있게 하는 기능입니다.
  - 고급 검색 옵션 제공
    - 사용자가 특정 날짜 범위, 특정 카테고리, 할 일의 완료 상태 등 세부적인 기준을 설정하여 검색할 수 있는 기능입니다.

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
- TodoList : 할일 목록 리스트 <br>(TodoItem으로 이루어져 있음, 존재하지 않으면 존재하지 않는 메세지 출력)
- TodoItem : 할일 (Checkbox : 할일 완료 여부 체크, Input : 할일 수정 시 화면에 출력, Button: 수정, 삭제 버튼)
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
  // setTodos : setState와 같은 역할, 변경시키면 localStorage가 변경됨
  const [todos, setTodos] = useLocalStorage("todoApp", initialState);

  const [createMode, setCreate] = useState < boolean > false;

  return (
    <div className='App'>
      <div className='container'>
        <div className='inner'>
          <Header todos={todos} />
          <TodoList todos={todos} setTodos={setTodos} />
          <TodoInsert createMode={createMode} setCreate={setCreate} todos={todos} setTodos={setTodos} />
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
