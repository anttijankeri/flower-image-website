import LogoutButton from "../components/Auth0/LogoutButton";
import Title from "../components/Header/Title";
import MenuButton from "../components/Misc/MenuButton";

const Menu = () => {
  return (
    <>
      <header>
        <Title />
      </header>
      <body>
        <MenuButton text="Add Plant" link="/addplant" />
        <MenuButton text="Add Image" link="/addimage" />
        <MenuButton text="Plants" link="/plantlist" />
        <MenuButton text="Images" link="/imagelist" />
        <MenuButton text="Profile" link="/profile" />
        <LogoutButton />
      </body>
    </>
  );
};

export default Menu;
