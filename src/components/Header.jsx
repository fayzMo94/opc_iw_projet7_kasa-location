import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <img src="../assets/KasaLOGO.png" alt="logo Kasa" />
      <nav>
        <NavLink to={"/"}>Acceuil</NavLink>
        <NavLink to={"/about-us"}>A propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
