import useTodoStore from "store/store";
import { filterActiveTodo } from "utils/filteredTodos";
import { getDate } from "utils/getDate";

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

      {remain.length > 0 ? (
        <span>할일 {remain.length}개 남음</span>
      ) : (
        <span>할일이 없어요</span>
      )}
    </header>
  );
}
export default Header;
