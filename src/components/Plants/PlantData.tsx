import InputCheckbox from "../Input/InputCheckbox";
import InputDate from "../Input/InputDate";
import InputDiary from "../Input/InputDiary";
import InputText from "../Input/InputText";

const PlantData = () => {
  return (
    <form>
      {/* genusName: dataTypes.StringData,
  speciesName: dataTypes.StringData,
  commonName: dataTypes.StringData,
  identifyingInfo: dataTypes.StringData,
  placeOfOrigin: dataTypes.StringData,
  acquiredFrom: dataTypes.StringData,
  growingNote: dataTypes.StringData,
  freeNote: dataTypes.StringData,
  publication: dataTypes.StringData,
  purchasePrice: dataTypes.StringData,
  salePrice: dataTypes.StringData,
  collectionTag: dataTypes.StringData,

  forSale: dataTypes.BooleanData,

  dateAcquired: dataTypes.DateData,
  dateFirstFlower: dataTypes.DateData,
  dateLastFlower: dataTypes.DateData,
  dateRemoved: dataTypes.DateData,

  events: dataTypes.DiaryDataArray, */}
      <InputText inputName="genusName" label="genusName" placeholder="" />
      <InputText inputName="speciesName" label="speciesName" placeholder="" />
      <InputText inputName="commonName" label="commonName" placeholder="" />
      <InputText
        inputName="identifyingInfo"
        label="identifyingInfo"
        placeholder=""
      />
      <InputText
        inputName="placeOfOrigin"
        label="placeOfOrigin"
        placeholder=""
      />
      <InputText inputName="acquiredFrom" label="acquiredFrom" placeholder="" />
      <InputText inputName="growingNote" label="growingNote" placeholder="" />
      <InputText inputName="freeNote" label="freeNote" placeholder="" />
      <InputText inputName="publication" label="publication" placeholder="" />
      <InputText
        inputName="purchasePrice"
        label="purchasePrice"
        placeholder=""
      />
      <InputText inputName="salePrice" label="salePrice" placeholder="" />
      <InputText
        inputName="collectionTag"
        label="collectionTag"
        placeholder=""
      />
      <InputDate inputName="dateAcquired" label="dateAcquired" />
      <InputDate inputName="dateFirstFlower" label="dateFirstFlower" />
      <InputDate inputName="dateLastFlower" label="dateLastFlower" />
      <InputDate inputName="dateRemoved" label="dateRemoved" />
      <InputCheckbox inputName="forSale" label="For Sale" />
      <InputCheckbox inputName="shared" label="Shared" />
      <InputDiary inputName="diary" label="Diary" />
    </form>
  );
};

export default PlantData;
