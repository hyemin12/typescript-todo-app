import React from "react";
import useTodoStore from "store/store";
interface FilterItemProps {
  name: string;
  value: string;

  action: (e: any) => void;
}

const FilterRadio = ({ name, value, action }: FilterItemProps) => {
  const { filter, todos } = useTodoStore();
  return (
    <div className='filter-radio' onClick={action}>
      <input
        type='radio'
        id={`filter${value}`}
        name={name}
        checked={filter.toLowerCase() === value.toLowerCase()}
        value={value}
        disabled={todos.length === 0}
        onChange={() => {}}
      />
      <label htmlFor={`filter${value}`}>{value}</label>
    </div>
  );
};

export default FilterRadio;
