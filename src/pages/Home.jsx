import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import listeLogements from "../datas/logements.json";
import "../styles/Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(listeLogements);
  }, []);

  return (
    <main className="home">
      <Banner />
      <section className="housingsContainer">
        {logements &&
          logements.map((logement) => (
            <Card key={logement.id} id={logement.id} title={logement.title} />
          ))}
      </section>
    </main>
  );
}

export default Home;
