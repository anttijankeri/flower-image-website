import ImageContainer from "./ImageContainer";
import InputText from "../Input/InputText";
import InputCheckbox from "../Input/InputCheckbox";

const ImageData = () => {
  return (
    <form>
      <ImageContainer />
      <InputText inputName="userText" placeholder="" label="Note" />
      <InputText inputName="userGroup" placeholder="" label="Group" />
      <InputText inputName="objectLink" placeholder="" label="Plant" />
      <InputCheckbox inputName="shared" label="Shared" />
    </form>
  );
};

export default ImageData;
