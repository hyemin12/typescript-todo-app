import useTodoStore from "store/store";
import { filterActiveTodo } from "utils/filteredTodos";

const getDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return { year, month, date, week: week[day] };
};

function Header() {
  const { year, month, date, week } = getDate();
  const { todos } = useTodoStore();

  const remain = filterActiveTodo(todos);

  return (
    <header>
      <h4>
        {year}년 {month}월 {date}일
      </h4>
      <p>{week}요일</p>

      {remain.length > 0 ? <span>할일 {remain.length}개 남음</span> : <span>할일이 없어요</span>}
    </header>
  );
}
export default Header;
