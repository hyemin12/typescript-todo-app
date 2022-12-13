import { Dispatch, SetStateAction } from "react";

interface InputProps {
  type: string;
  changeValue: Dispatch<SetStateAction<any>>;
  state: any;
  placeholder: string;
}

const Input = ({ state, changeValue, type, placeholder }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  return (
    <input
      type={type}
      value={state}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
