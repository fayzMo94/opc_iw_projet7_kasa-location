import "../styles/Rating.scss";
import redStar from "../assets/redStar.png";
import grayStar from "../assets/grayStar.png";

const Rating = ({ rating }) => {
  const stars = [...Array(5)];

  return (
    <div className="rating">
      {stars.map((star, index) => {
        const ratingNum = index + 1;

        return (
          <img
            key={index}
            src={ratingNum <= rating ? redStar : grayStar}
            alt="rating star"
          />
        );
      })}
    </div>
  );
};

export default Rating;
