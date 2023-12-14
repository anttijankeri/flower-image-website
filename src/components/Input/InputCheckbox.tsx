import { FC } from "react";
import { InputCheckboxProps } from "../../types";

const InputCheckbox: FC<InputCheckboxProps> = ({ inputName, label }) => {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input type="checkbox" name={inputName} />
    </div>
  );
};

export default InputCheckbox;
