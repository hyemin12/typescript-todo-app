import { Dispatch, SetStateAction } from "react";
import { TodoProps } from "../type";

interface CheckboxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  state: TodoProps;
  onToggle: () => void;
}

const Checkbox = ({ checked, setChecked, state, onToggle }: CheckboxProps) => {
  const { id, done } = state;
  return (
    <>
      <input
        type="checkbox"
        id={`check-${id}`}
        onClick={onToggle}
        onChange={() => {
          setChecked(!checked);
        }}
        checked={done}
      />
      <label htmlFor={`check-${id}`}>
        {checked ? <i className="fas fa-check"></i> : ""}
      </label>
    </>
  );
};
export default Checkbox;
