import useTodoStore from "store/store";
import { TodoProps } from "type/todoType";
import styles from "assets/scss/checkbox.module.scss";

const Checkbox = ({ state }: { state: TodoProps }) => {
  const { id, complete } = state;
  const { toggleCompleteTodo } = useTodoStore();

  const onToggleComplete = () => {
    toggleCompleteTodo(id);
  };

  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        id={`check-${id}`}
        checked={complete}
        onChange={onToggleComplete}
      />
      <label htmlFor={`check-${id}`}>
        {complete ? <i className='fas fa-check'></i> : ""}
      </label>
    </div>
  );
};
export default Checkbox;
