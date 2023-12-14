export interface PlantObject {
  id: string;
}

export interface ImageObject {
  id: string;
  userText: string;
  userGroup: string;
  objectLink: string;
  shared: boolean;
  url: string;
}

export interface IAppState {
  error: string;
  loading: boolean;
  userId: string;
  loggedIn: boolean;
  plants: PlantObject[];
  images: ImageObject[];
  addedDiaryEvents: DiaryEvent[];
}

export interface DiaryEvent {
  date: number;
  note: string;
}

export interface IAppContext {
  state: IAppState;
  updateState: (state: Partial<IAppState>) => void;
}

export interface InputProps {
  inputName: string;
  label: string;
}

export interface InputTextProps extends InputProps {
  placeholder: string;
}

export interface InputFileProps extends InputProps {}

export interface InputDateProps extends InputProps {}

export interface InputCheckboxProps extends InputProps {}

export interface InputDiaryProps extends InputProps {}

export interface GroupListProps {
  items: string[];
}

export interface GroupItemProps {
  item: string;
}

export interface ImageItemProps {
  imageId: string;
}

export interface ImageListProps {
  images: ImageItemProps[];
}

export interface PlantItemProps {
  plantId: string;
}

export interface PlantListProps {
  plants: PlantItemProps[];
}

export interface MenuButtonProps {
  text: string;
  link: string;
}
