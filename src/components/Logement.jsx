import { useParams } from "react-router-dom";
import listeLogements from "../datas/logements.json";

const Logement = () => {
  const { id } = useParams();
  const pickedLoge = listeLogements.find((loge) => loge.id === id);

  return (
    <div>
      <h1>{id}</h1>
      <p>Logement {pickedLoge.title}</p>
      <p>{pickedLoge.description}</p>
    </div>
  );
};

export default Logement;
