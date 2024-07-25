import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.scss";
import Loader from "../components/Loader";

function Home() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDatas() {
      setIsLoading(true);
      try {
        const response = await fetch("/datas/logements.json");
        const datas = await response.json();
        setLogements(datas);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDatas();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="home">
      <Banner />
      <section className="housingsContainer">
        {logements &&
          logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
      </section>
    </main>
  );
}

export default Home;
