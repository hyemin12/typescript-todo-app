# typescript Todo App

## 기능

- Todo Item 추가
- Todo Item 삭제
- Todo Item 완료 여부 (체크박스)
- 남은 할일 개수

<br>
<br>

todo list 로컬스토리지에서 관리

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
