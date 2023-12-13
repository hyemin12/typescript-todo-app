import React from "react";
import FilterRadio from "./FiterRadio";
import useTodoStore from "store/store";

const Filters = () => {
  const { filterTodo } = useTodoStore();

  const onFilterTodos = (e: any) => {
    const { value } = e.target;
    if (!value) return;
    filterTodo(value);
  };
  return (
    <fieldset className='todo-filter-fieldset'>
      <FilterRadio name='todo-filter' value='All' action={onFilterTodos} />
      <FilterRadio name='todo-filter' value='Active' action={onFilterTodos} />
      <FilterRadio name='todo-filter' value='Complete' action={onFilterTodos} />
    </fieldset>
  );
};

export default Filters;
