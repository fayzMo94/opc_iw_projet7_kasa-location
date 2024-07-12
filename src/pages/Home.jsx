import Banner from "../components/Banner";
import Card from "../components/Card";
import listeLogements from "../datas/logements.json";
import "../styles/Home.scss";

function Home() {
  return (
    <main className="home">
      <Banner />
      <section className="housingsContainer">
        {listeLogements.map((logement) => (
          <Card key={logement.id} id={logement.id} title={logement.title} />
        ))}
      </section>
    </main>
  );
}

export default Home;
