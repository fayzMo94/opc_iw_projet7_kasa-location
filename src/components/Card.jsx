import { NavLink } from "react-router-dom";
import "../styles/Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <div className="cardContainer" style={{backgroundImage: `url(${cover})`}}>
      <NavLink className={"cardContainer__link"} to={`logement/${id}`}>
        <p className="cardContainer__link--txt">{title}</p>
      </NavLink>
    </div>
  );
};

export default Card;
