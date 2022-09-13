import { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/Header/icons/Logo.svg";
import { ReactComponent as LogoText } from "../../assets/Header/Rootz.svg";
import BurgerMenu from "../utils/BurgerMenu/BurgerMenu";

const Header = () => {
  const [navOpened, setNavOpened] = useState(true);

  const toggleMenu = () => {
    setNavOpened((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="logo">
        <LogoIcon />
        <LogoText />
      </div>
      <BurgerMenu navOpened={navOpened} toggleMenu={toggleMenu} />
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list--point">Home</li>
          <li className="navigation__list--point">Our mission</li>
          <li className="navigation__list--point">Places</li>
          <li className="navigation__list--point">Team</li>
        </ul>
        <button className="navigation__applyBtn">Apply</button>
      </nav>
    </header>
  );
};

export default Header;
