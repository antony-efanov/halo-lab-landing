import { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/Header/icons/Logo.svg";
import { ReactComponent as LogoText } from "../../assets/Header/Rootz.svg";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { Logo } from "./components/Logo";

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);

  const toggleMenu = () => {
    setNavOpened((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
        <LogoText />
      </div>
      <BurgerMenu navOpened={navOpened} toggleMenu={toggleMenu} />
      <nav className={navOpened ? "navigation opened" : "navigation"}>
        <ul>
          <a href="#hero">
            <li onClick={toggleMenu} className="navigation__point">
              Home
            </li>
          </a>
          <a href="#slider">
            <li onClick={toggleMenu} className="navigation__point">
              Our mission
            </li>
          </a>
          <a href="#faq">
            <li onClick={toggleMenu} className="navigation__point">
              Places
            </li>
          </a>
          <a href="#team">
            <li onClick={toggleMenu} className="navigation__point">
              Team
            </li>
          </a>
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className={
          navOpened
            ? "generic-button navigation__apply-btn opened"
            : "generic-button navigation__apply-btn"
        }
      >
        Apply
      </button>
    </header>
  );
};

export default Header;
