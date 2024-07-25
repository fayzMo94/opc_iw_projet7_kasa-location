import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

const navLinks = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "A propos",
    href: "/about-us",
  },
];

const Header = () => {
  return (
    <header className="header">
      <NavLink className="header__logo" to={"/"}>
        <img src={require("../assets/KasaLOGO.png")} alt="logo Kasa" />
      </NavLink>
      <nav className="header__nav">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.href}
            className={({ isActive }) => {
              return "navLinks " + (isActive ? " activeLink" : "");
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
