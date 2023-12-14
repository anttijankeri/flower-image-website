import { FC } from "react";
import { InputTextProps } from "../../types";

const InputText: FC<InputTextProps> = ({ inputName, placeholder, label }) => {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input type="text" name={inputName} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
