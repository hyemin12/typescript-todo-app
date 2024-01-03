import { Dispatch, SetStateAction } from "react";

interface InputProps {
  type: string;
  changeValue: Dispatch<SetStateAction<string>>;
  state: string;
  placeholder: string;
  isEdit?: boolean;
}

const Input = ({ state, changeValue, type, placeholder, isEdit }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  return (
    <input
      className={isEdit ? "edit" : undefined}
      type={type}
      value={state}
      onChange={onChange}
      placeholder={placeholder}
      disabled={!isEdit}
    />
  );
};

export default Input;
