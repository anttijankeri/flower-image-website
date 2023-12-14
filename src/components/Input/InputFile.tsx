import { FC } from "react";
import { InputFileProps } from "../../types";

const InputFile: FC<InputFileProps> = ({ inputName, label }) => {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input type="file" name={inputName} />
    </div>
  );
};

export default InputFile;
