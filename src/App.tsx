import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataLoader from "./components/Data/DataLoader";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PlantGroups from "./pages/PlantGroups";
import PlantDetails from "./pages/PlantDetails";
import PlantImages from "./pages/PlantImages";
import ImageDetails from "./pages/ImageDetails";
import ImageGroups from "./pages/ImageGroups";
import Profile from "./pages/Profile";
import AddImage from "./pages/AddImage";
import AddPlant from "./pages/AddPlant";
import Plants from "./pages/Plants";
import Images from "./pages/Images";

const App = () => {
  return (
    <div>
      <DataLoader />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/menu" Component={Menu}></Route>
        <Route path="/plantlist" Component={Plants}></Route>
        <Route path="/plantgroups" Component={PlantGroups}></Route>
        <Route path="/plant" Component={PlantDetails}></Route>
        <Route path="/plantimages" Component={PlantImages}></Route>
        <Route path="/imagelist" Component={Images}></Route>
        <Route path="/imagegroups" Component={ImageGroups}></Route>
        <Route path="/image" Component={ImageDetails}></Route>
        <Route path="/addimage" Component={AddImage}></Route>
        <Route path="/addplant" Component={AddPlant}></Route>
        <Route path="/profile" Component={Profile}></Route>
      </Routes>
    </div>
  );
};

export default App;
