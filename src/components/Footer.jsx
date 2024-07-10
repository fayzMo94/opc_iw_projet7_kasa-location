import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img
          className="footer__logo"
          src={require("../assets/footer LOGO.png")}
          alt="logo du footer"
        />
      </NavLink>
      <small className="footer__copyright">
        © 2020 Kasa. All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
