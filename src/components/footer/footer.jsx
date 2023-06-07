import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { useState, useEffect } from "react";

export default function Footer() {

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    function actualizarAnchoPantalla() {
      setAnchoPantalla(window.innerWidth);
    }

    window.addEventListener("resize", actualizarAnchoPantalla);

    return () => {
      window.removeEventListener("resize", actualizarAnchoPantalla);
    };
  }, []);

  return (
    <footer className={style.footer}>
      <div className={style.leftContainer}>
        <h5>Services:</h5>
        <ul>
          <li>- Design and development of professional websites.</li>
          <li>- Web application development.</li>
          <li>- System integration.</li>
          <li>- Performance optimization.</li>
          <li>- Maintenance and support.</li>
        </ul>
        </div>
        <h3>Tomás Sandoval</h3>
        <div className={style.rightContainer}>
          <Link
            to="https://www.linkedin.com/in/tom%C3%A1s-sandoval/"
            target="_blank"
            className={style.socialIcons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={anchoPantalla < 800 ? "30" : "44"}
              height={anchoPantalla < 800 ? "30" : "44"}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)" }}
            >
              <circle cx="4.983" cy="5.009" r="2.188"></circle>
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
            </svg>
          </Link>
          <Link to="/contact" className={style.socialIcons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={anchoPantalla < 800 ? "30" : "44"}
              height={anchoPantalla < 800 ? "30" : "44"}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)" }}
            >
              <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
            </svg>
          </Link>
          <Link
            to="https://github.com/TomSandoval"
            target="_blank"
            className={style.socialIcons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={anchoPantalla < 800 ? "30" : "44"}
              height={anchoPantalla < 800 ? "30" : "44"}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
          </Link>
        </div>
    </footer>
  );
}
