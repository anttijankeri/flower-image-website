import PlantSearch from "./PlantSearch";
import NavMenu from "./NavMenu";
import Title from "./Title";

const Header = () => {
  return (
    <header>
      <NavMenu />
      <Title />
      <PlantSearch />
    </header>
  );
};

export default Header;
