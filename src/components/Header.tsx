import { Todo } from "../modules/todos";

type TodoLengthProps = {
  todos: Todo[];
};
function Header({ todos }: TodoLengthProps) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  console.log(now);
  return (
    <header>
      <h4>
        {year}년 {month}월 {date}일
      </h4>
      <p>{week[day]}요일</p>
      <span>할일 {todos.length}개 남음</span>
    </header>
  );
}
export default Header;
