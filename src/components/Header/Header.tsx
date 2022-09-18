import { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/Header/icons/Logo.svg";
import { ReactComponent as LogoText } from "../../assets/Header/Rootz.svg";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const Header = () => {
  const [navOpened, setNavOpened] = useState(true);

  const toggleMenu = () => {
    setNavOpened((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <LogoIcon />
        <LogoText />
      </div>
      <BurgerMenu navOpened={navOpened} toggleMenu={toggleMenu} />
      <nav className={navOpened ? "navigation opened" : "navigation"}>
        <ul>
          <li className="navigation__point">Home</li>
          <li className="navigation__point">Our mission</li>
          <li className="navigation__point">Places</li>
          <li className="navigation__point">Team</li>
        </ul>
        <button className="navigation__apply-btn">Apply</button>
      </nav>
    </header>
  );
};

export default Header;
