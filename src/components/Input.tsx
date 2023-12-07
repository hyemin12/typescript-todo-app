import { Dispatch, SetStateAction } from "react";

interface InputProps {
  type: string;
  changeValue: Dispatch<SetStateAction<any>>;
  state: string;
  placeholder: string;
  $isEdit?: boolean;
}

const Input = ({ state, changeValue, type, placeholder, $isEdit }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  return (
    <input
      className={$isEdit ? "edit" : " "}
      type={type}
      value={state}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={$isEdit}
    />
  );
};

export default Input;
