import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to={"/"}>Acceuil</Link>
        <Link to={"/about-us"}>A propos</Link>
      </nav>
    </div>
  );
};

export default Header;
