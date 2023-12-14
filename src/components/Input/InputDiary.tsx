import { FC } from "react";
import { InputDiaryProps } from "../../types";

const InputDiary: FC<InputDiaryProps> = ({ inputName, label }) => {
  return (
    <form>
      <label htmlFor={inputName + "Date"}>{label + " Date"}</label>
      <input type="date" name={inputName + "Date"} id="" />
      <label htmlFor={inputName + "Note"}>{label + " Note"}</label>
      <input type="text" name={inputName + "Note"} id="" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default InputDiary;
