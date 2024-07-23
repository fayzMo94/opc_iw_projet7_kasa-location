import Banner from "../components/Banner";
import "../styles/About.scss";
import Collapse from "../components/Collapse";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const About = () => {
  const [abtDatas, setAbtDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAbtDatas() {
      setIsLoading(true);
      try {
        const response = await fetch("/datas/aboutPgDatas.json");
        const datas = await response.json();
        setAbtDatas(datas);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAbtDatas();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="about">
      <Banner />
      <main className="about__content">
        {abtDatas &&
          abtDatas.map((data) => (
            <Collapse
              key={data.id}
              title={data.title}
              descr={data.description}
            />
          ))}
      </main>
    </section>
  );
};

export default About;
