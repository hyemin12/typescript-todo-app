import { Dispatch, SetStateAction } from "react";
import { TodoProps } from "../type/type";

interface CheckboxProps {
  checked: boolean;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  state: TodoProps;
  onToggle: () => void;
}

const Checkbox = ({ checked, state, onToggle }: CheckboxProps) => {
  const { id, done } = state;

  return (
    <>
      <input type='checkbox' id={`check-${id}`} onClick={onToggle} onChange={onToggle} checked={done} />
      <label htmlFor={`check-${id}`}>{checked ? <i className='fas fa-check'></i> : ""}</label>
    </>
  );
};
export default Checkbox;
