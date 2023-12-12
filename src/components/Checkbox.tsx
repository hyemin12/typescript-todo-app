import useTodoStore from "store/store";
import { TodoProps } from "../type/type";

const Checkbox = ({ state }: { state: TodoProps }) => {
  const { id, complete } = state;
  const { toggleCompleteTodo } = useTodoStore();

  const onToggleComplete = () => {
    toggleCompleteTodo(id);
  };

  return (
    <div className='checkbox'>
      <input type='checkbox' id={`check-${id}`} onChange={() => {}} onClick={onToggleComplete} checked={complete} />
      <label htmlFor={`check-${id}`}>{complete ? <i className='fas fa-check'></i> : ""}</label>
    </div>
  );
};
export default Checkbox;
