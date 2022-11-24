import { TodosState, TodoProps } from "../modules/type";

function Header({ todos }: { todos: TodosState }) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const remain = todos.filter((todo: TodoProps) => todo.done === false);
  return (
    <header>
      <h4>
        {year}년 {month}월 {date}일
      </h4>
      <p>{week[day]}요일</p>
      <span>할일 {remain.length}개 남음</span>
    </header>
  );
}
export default Header;
