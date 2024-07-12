import { NavLink } from "react-router-dom";
import "../styles/Card.scss";

const Card = ({ id, title }) => {
  return (
    <div className="cardContainer">
      <NavLink className={"cardContainer__link"} to={`logement/${id}`}>
        <p className="cardContainer__link--txt">{title}</p>
      </NavLink>
    </div>
  );
};

export default Card;
