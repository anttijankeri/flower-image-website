export interface PlantObject {}

export interface ImageObject {}

export interface IAppState {
  error: string;
  loading: boolean;
  userId: string;
  loggedIn: boolean;
  plants: PlantObject[];
  images: ImageObject[];
}

export interface IAppContext {
  state: IAppState;
  updateState: (state: Partial<IAppState>) => void;
}
