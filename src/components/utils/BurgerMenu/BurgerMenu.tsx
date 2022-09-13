import { FC } from "react";
import { IBurgerMenuProps } from "./types";

const BurgerMenu: FC<IBurgerMenuProps> = ({ navOpened, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className={navOpened ? "burgerMenu opened" : "burgerMenu"}
    ></div>
  );
};

export default BurgerMenu;
