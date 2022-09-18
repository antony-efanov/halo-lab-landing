import { FC } from "react";
import { IBurgerMenuProps } from "./types";

const BurgerMenu: FC<IBurgerMenuProps> = ({ navOpened, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className={
        navOpened ? "navigation__burger-menu opened" : "navigation__burger-menu"
      }
    ></div>
  );
};

export default BurgerMenu;
