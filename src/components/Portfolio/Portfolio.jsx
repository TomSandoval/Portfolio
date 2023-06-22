import "./Portfolio.css";
import {projects_en, projects_es} from "../../utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../footer/footer";

export default function Portfolio() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section className="portfolio-section">
        <h1 className="portfolio-title">{t("portfolio-component.title")}</h1>
        <div className="projects-container">
          { i18n.language === "en" ? projects_en.map((project, index) => {
            return (
              <div className="card-project" key={index}>
                <div className="image-project-container">
                  <img
                    className={
                      project.active ? "image-project" : "image-project-blur"
                    }
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div className="info-project">
                  <h2 className="name-project">
                    {project.active
                      ? project.name
                      : `${project.name} (in process)`}
                  </h2>
                  <div className="hr-portfolio"></div>
                  <p
                    className={
                      project.active
                        ? "description-project"
                        : "description-project-blur"
                    }
                  >
                    {project.description}
                  </p>
                  <div className="technologies-container">
                    <ul className="list-technologies">
                      {project.technologies.map((technology, index) => {
                        return (
                          <li className="technology" key={index}>
                            <span className="technology-span">
                              {technology}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {project.active && (
                    <div className="links-project">
                      <Link
                        className="link-project"
                        to={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          style={{ fill: "rgba(255, 255, 255, 1)" }}
                        >
                          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
                        {t("portfolio-component.see-project")}
                      </Link>
                      <Link
                        className="link-project"
                        to={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style={{ fill: "rgba(255, 255, 255, 1)" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                          ></path>
                        </svg>
                        {t("portfolio-component.see-code")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          }) : projects_es.map((project, index) => {
            return (
              <div className="card-project" key={index}>
                <div className="image-project-container">
                  <img
                    className={
                      project.active ? "image-project" : "image-project-blur"
                    }
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div className="info-project">
                  <h2 className="name-project">
                    {project.active
                      ? project.name
                      : `${project.name} (in process)`}
                  </h2>
                  <div className="hr-portfolio"></div>
                  <p
                    className={
                      project.active
                        ? "description-project"
                        : "description-project-blur"
                    }
                  >
                    {project.description}
                  </p>
                  <div className="technologies-container">
                    <ul className="list-technologies">
                      {project.technologies.map((technology, index) => {
                        return (
                          <li className="technology" key={index}>
                            <span className="technology-span">
                              {technology}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {project.active && (
                    <div className="links-project">
                      <Link
                        className="link-project"
                        to={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          style={{ fill: "rgba(255, 255, 255, 1)" }}
                        >
                          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
                        {t("portfolio-component.see-project")}
                      </Link>
                      <Link
                        className="link-project"
                        to={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style={{ fill: "rgba(255, 255, 255, 1)" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                          ></path>
                        </svg>
                        {t("portfolio-component.see-code")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          }) }
        </div>
      </section>
      <Footer />
    </>
  );
}
