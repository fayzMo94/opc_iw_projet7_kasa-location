import "../styles/Collapse.scss";
import arrow from "../assets/ArrowUp.png";
import { useState } from "react";

const Collapse = ({ title, descr }) => {
  const [colToggle, setColToggle] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__bar" onClick={() => setColToggle(!colToggle)}>
        <h3>{title}</h3>
        <img
          className={colToggle ? "arrow arrow--down" : "arrow arrow--up"}
          src={arrow}
          alt="montrer contenus"
        />
      </div>
      <article
        className={
          colToggle ? "collapse__content" : "collapse__content--hidden"
        }
      >
        <p>{descr}</p>
      </article>
    </div>
  );
};

export default Collapse;
