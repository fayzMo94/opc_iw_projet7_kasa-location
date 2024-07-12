import Banner from "../components/Banner";
import "../styles/About.scss";
import abtDatas from "../datas/aboutPgDatas.json";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <section className="about">
      <Banner />
      <main className="about__content">
        {abtDatas.map((data) => (
          <Collapse key={data.id} title={data.title} descr={data.description} />
        ))}
      </main>
    </section>
  );
};

export default About;
