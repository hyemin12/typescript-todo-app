import useTodoStore from "store/store";
import styles from "./filterRadios.module.scss";

const FilterRadio = ({ value }: { value: string }) => {
  const { filterType, todos, filterTodo } = useTodoStore();

  const handleItemClick = () => {
    filterTodo(value);
  };

  return (
    <div className={styles.radio_wrapper} onClick={handleItemClick}>
      <input
        type='radio'
        id={`filter${value}`}
        name='todo-filter'
        checked={filterType.toLowerCase() === value.toLowerCase()}
        value={value}
        disabled={todos.length === 0}
        onChange={() => {}}
      />
      <label htmlFor={`filter${value}`}>{value}</label>
    </div>
  );
};

export default FilterRadio;
