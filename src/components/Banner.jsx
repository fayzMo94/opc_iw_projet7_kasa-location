import { useLocation } from "react-router-dom";
import "../styles/Banner.scss";
import { useEffect, useState } from "react";

const Banner = () => {
  const [abtPage, setAbtPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about-us") {
      setAbtPage(!abtPage);
    }
  }, []);

  return (
    <section
      className={abtPage ? "banner banner-bg-img2" : "banner banner-bg-img1"}
    >
      {!abtPage && (
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      )}
    </section>
  );
};

export default Banner;
