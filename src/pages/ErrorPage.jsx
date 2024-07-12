import { NavLink } from "react-router-dom";
import "../styles/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="errorPg">
      <h1 className="errorPg__title">404</h1>
      <p className="errorPg__p">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink className={"errorPg__homeLink"} to={"/"}>
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default ErrorPage;
