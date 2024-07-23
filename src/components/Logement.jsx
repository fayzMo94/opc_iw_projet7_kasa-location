import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import { useEffect, useState } from "react";
import "../styles/Logement.scss";
import Rating from "./Rating";
import ErrorPage from "../pages/ErrorPage";
import Collapse from "./Collapse";
import Loader from "../components/Loader";

const Logement = () => {
  const [sliderImgs, setSliderImgs] = useState([]);
  const [listeLogements, setListeLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const pickedLoge = listeLogements.find((loge) => loge.id === id);

  useEffect(() => {
    async function fetchDatas() {
      setIsLoading(true);
      try {
        const response = await fetch("/datas/logements.json");
        const datas = await response.json();
        setListeLogements(datas);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDatas();
  }, []);

  useEffect(() => {
    if (pickedLoge) {
      setSliderImgs(pickedLoge.pictures);
    }
  }, [id, pickedLoge]);

  if (isLoading) {
    return <Loader />;
  }

  if (!pickedLoge) {
    return <ErrorPage />;
  }

  return (
    <main className="logement">
      <Carrousel sliderImgs={sliderImgs} />
      <section className="logement__infos">
        <div className="logement__infos__main">
          <h2>{pickedLoge?.title}</h2>
          <p>{pickedLoge?.location}</p>
          <ul className="logement__infos__main-tags">
            {pickedLoge &&
              pickedLoge?.tags.map((tag, index) => (
                <li key={`tag-${index}`}>{tag}</li>
              ))}
          </ul>
        </div>
        <div className="logement__infos__host">
          <article className="logement__infos__host-profile">
            <h4>{pickedLoge?.host.name}</h4>
            <img
              className="host-profile-pic"
              src={pickedLoge?.host.picture}
              alt={pickedLoge?.host.name + " profile picture"}
            />
          </article>
          <Rating rating={pickedLoge?.rating} />
        </div>
      </section>
      <div className="logement__collapses">
        <Collapse title="Description" descr={pickedLoge?.description} />
        <Collapse title="Équipements" descr={pickedLoge?.equipments} />
      </div>
    </main>
  );
};

export default Logement;
