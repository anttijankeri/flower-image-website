import { FC } from "react";
import { InputDateProps } from "../../types";

const InputDate: FC<InputDateProps> = ({ inputName, label }) => {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input type="date" name={inputName} />
    </div>
  );
};

export default InputDate;
