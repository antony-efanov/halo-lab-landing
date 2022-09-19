import { FC } from "react";
import { IBurgerMenuProps } from "./types";

const BurgerMenu: FC<IBurgerMenuProps> = ({ navOpened, toggleMenu }) => {
  return (
    <div
      className={navOpened ? "burger-wrapper opened" : "burger-wrapper"}
      onClick={toggleMenu}
      onScroll={() => false}
    >
      <div
        className={
          navOpened
            ? "navigation__burger-menu opened"
            : "navigation__burger-menu"
        }
      ></div>
    </div>
  );
};

export default BurgerMenu;
