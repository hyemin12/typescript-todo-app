import useTodoStore from "store/store";
import { TodoProps } from "type/type";
import styles from "./checkbox.module.scss";

const Checkbox = ({ state }: { state: TodoProps }) => {
  const { id, complete } = state;
  const { toggleCompleteTodo } = useTodoStore();

  const onToggleComplete = () => {
    toggleCompleteTodo(id);
  };

  return (
    <div className={styles.checkbox}>
      <input type='checkbox' id={`check-${id}`} onClick={onToggleComplete} checked={complete} />
      <label htmlFor={`check-${id}`}>{complete ? <i className='fas fa-check'></i> : ""}</label>
    </div>
  );
};
export default Checkbox;
