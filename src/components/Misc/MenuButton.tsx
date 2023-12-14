import { FC } from "react";
import { MenuButtonProps } from "../../types";
import { Link } from "react-router-dom";

const MenuButton: FC<MenuButtonProps> = ({ text, link }) => {
  return (
    <Link to={link}>
      <button>{text}</button>
    </Link>
  );
};

export default MenuButton;
