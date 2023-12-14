import { Dispatch, SetStateAction } from "react";
import TodoItem from "components/TodoItem";
import useTodoStore from "store/store";
import { filterActiveTodo, filterCompleteTodo } from "utils/filteredTodos";
import { TodosProps } from "type/type";

interface TodoListProps {
  setWelcomeTip: Dispatch<SetStateAction<boolean>>;
}

const filteredTodo = ({ todos, filter }: { todos: TodosProps; filter: string }) => {
  const FILTER_TYPE = filter.toUpperCase();
  switch (FILTER_TYPE) {
    case "COMPLETE":
      return filterCompleteTodo(todos);
    case "ACTIVE":
      return filterActiveTodo(todos);
    default:
      return todos;
  }
};

function TodoList({ setWelcomeTip }: TodoListProps) {
  const { todos, filter } = useTodoStore();
  const openWelcomeTip = () => {
    setWelcomeTip(true);
  };
  const filteredTodos = filteredTodo({ todos, filter });

  if (todos.length <= 0)
    return (
      <div className='empty-todo'>
        <h4>새로운 할일을 추가해보세요!</h4>
        <p>할 일을 입력하고, 등록버튼을 누르면 할일을 추가할 수 있어요.</p>
        <div className='tool-tip-wrapper'>
          <p>todo가 처음이신가요? </p>
          <p className='tool-tip-btn' role='button' onClick={openWelcomeTip}>
            사용방법 알아보기
          </p>
        </div>
      </div>
    );
  if (filteredTodos.length === 0)
    return (
      <div className='empty-todo'>
        <h4>{filter === "active" ? "진행 중인" : "완료된"}할 일이 없습니다.</h4>
      </div>
    );
  return (
    <ul className='todo-list'>
      {filteredTodos
        .sort((a, b) => (a.complete > b.complete ? 1 : -1))
        .map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </ul>
  );
}

export default TodoList;
