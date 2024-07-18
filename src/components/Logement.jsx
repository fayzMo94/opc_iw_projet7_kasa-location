import { useParams } from "react-router-dom";
import listeLogements from "../datas/logements.json";
import Carrousel from "./Carrousel";
import { useEffect, useState } from "react";
import "../styles/Logement.scss";
import Rating from "./Rating";
import ErrorPage from "../pages/ErrorPage";
import Collapse from "./Collapse";

const Logement = () => {
  const [sliderImgs, setSliderImgs] = useState([]);
  const { id } = useParams();
  const pickedLoge = listeLogements.find((loge) => loge.id === id);

  useEffect(() => {
    if (pickedLoge) {
      setSliderImgs(pickedLoge.pictures);
    }
  }, [id, pickedLoge]);

  if (!pickedLoge) {
    return <ErrorPage />;
  }

  return (
    <main className="logement">
      <Carrousel sliderImgs={sliderImgs} />
      <section className="logement__infos">
        <div className="logement__infos__main">
          <h2>{pickedLoge.title}</h2>
          <p>{pickedLoge.location}</p>
          <ul className="logement__infos__main-tags">
            {pickedLoge.tags.map((tag, index) => (
              <li key={`tag-${index}`}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="logement__infos__host">
          <article className="logement__infos__host-profile">
            <h4>{pickedLoge.host.name}</h4>
            <img
              className="host-profile-pic"
              src={pickedLoge.host.picture}
              alt={pickedLoge.host.name + " profile picture"}
            />
          </article>
          <Rating rating={pickedLoge.rating} />
        </div>
      </section>
      <div className="logement__collapses">
        <Collapse title="Description" descr={pickedLoge.description} />
        <Collapse title="Équipements" descr={pickedLoge.equipments} />
      </div>
    </main>
  );
};

export default Logement;
