import "./About.css";
import Me from "../../assets/Me.png";
import hand from "../../assets/hand.png";
import gradution from "../../assets/graduation cap.png";
import iconProgramming from "../../assets/programming icon.png";
import dumbell from "../../assets/dumbell.png";
import JavascriptLogo from "../../assets/Javascript.png";
import ReactLogo from "../../assets/React.png";
import NodeLogo from "../../assets/Nodejs.png";
import HtmlLogo from "../../assets/HTML.png";
import CssLogo from "../../assets/CSS3.png";
import PythonLogo from "../../assets/Python.png";
import IllustratorLogo from "../../assets/Illustrator.png";
import AfterEffectsLogo from "../../assets/After Effects.png";
import TypescriptLogo from "../../assets/Typescript.png";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "animate.css";
import Footer from "../footer/footer";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global");

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [containerScroll, setContainerScroll] = useState(0);
  const [selectedOption, setSelectedOption] = useState("about-me");
  const [javascriptLevel, setJavascriptLevel] = useState(0);
  const [typescriptLevel, setTypescriptLevel] = useState(0);
  const [reactLevel, setReactLevel] = useState(0);
  const [nodeLevel, setNodeLevel] = useState(0);
  const [htmlLevel, setHtmlLevel] = useState(0);
  const [cssLevel, setCssLevel] = useState(0);
  const [reactNativeLevel, setReactNativeLevel] = useState(0);
  const [pythonLevel, setPythonLevel] = useState(0);

  const [illustratorLevel, setIllustratorLevel] = useState(0);
  const [afterEffectsLevel, setAfterEffectsLevel] = useState(0);

  const skills = [
    {
      name: "Javascript",
      img: JavascriptLogo,
      level: javascriptLevel,
    },
    {
      name: "HTML",
      img: HtmlLogo,
      level: htmlLevel,
    },
    {
      name: "CSS3",
      img: CssLogo,
      level: cssLevel,
    },
    {
      name: "React.js",
      img: ReactLogo,
      level: reactLevel,
    },
    {
      name: "Node.js",
      img: NodeLogo,
      level: nodeLevel,
    },
    {
      name: "Typescript",
      img: TypescriptLogo,
      level: typescriptLevel,
    },
    {
      name: "React Native",
      img: ReactLogo,
      level: reactNativeLevel,
    },
    {
      name: "Python",
      img: PythonLogo,
      level: pythonLevel,
    },
    {
      name: "Illustrator",
      img: IllustratorLogo,
      level: illustratorLevel,
    },
    {
      name: "After Effects",
      img: AfterEffectsLogo,
      level: afterEffectsLevel,
    },
  ];

  useEffect(() => {
    const addLevel = setTimeout(() => {
      if (javascriptLevel < 80) {
        setJavascriptLevel(javascriptLevel + 1);
      }
      if (reactLevel < 90) {
        setReactLevel(reactLevel + 1);
      }
      if (nodeLevel < 80) {
        setNodeLevel(nodeLevel + 1);
      }
      if (htmlLevel < 90) {
        setHtmlLevel(htmlLevel + 1);
      }
      if (cssLevel < 90) {
        setCssLevel(cssLevel + 1);
      }
      if (typescriptLevel < 80) {
        setTypescriptLevel(typescriptLevel + 1);
      }
      if (reactNativeLevel < 75) {
        setReactNativeLevel(reactNativeLevel + 1);
      }
      if (pythonLevel < 70) {
        setPythonLevel(pythonLevel + 1);
      }
      if (illustratorLevel < 75) {
        setIllustratorLevel(illustratorLevel + 1);
      }
      if (afterEffectsLevel < 65) {
        setAfterEffectsLevel(afterEffectsLevel + 1);
      }
    }, 10);

    function actualizarAnchoPantalla() {
      setAnchoPantalla(window.innerWidth);
    }

    window.addEventListener("resize", actualizarAnchoPantalla);

    return () => {
      window.removeEventListener("resize", actualizarAnchoPantalla);
      clearTimeout(addLevel);
    };
  }, [
    javascriptLevel,
    reactLevel,
    nodeLevel,
    htmlLevel,
    cssLevel,
    reactNativeLevel,
    pythonLevel,
    illustratorLevel,
    afterEffectsLevel,
    containerScroll,
  ]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleOption = (e) => {
    e.stopPropagation();
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <section className="about-container">
        <div className="about-content">
          <div className="left-panel">
            <div className="img-container">
              <img className="me-img" src={Me} alt="Tomás Sandoval" />
              <h2 className="about-title">Tomás Sandoval</h2>
            </div>
            <div className="hr-about"></div>
            <div className="options-container">
              <ul style={{ listStyle: "none" }}>
                <li className="option">
                  <button
                    onClick={handleOption}
                    value={"about-me"}
                    className="about-subtitle"
                  >
                    {t("about-me-component.options.about-me")}
                  </button>
                </li>
                <li className="option">
                  <button
                    onClick={handleOption}
                    value={"education"}
                    className="about-subtitle"
                  >
                    {t("about-me-component.options.education")}
                  </button>
                </li>
                <li className="option">
                  <button
                    onClick={handleOption}
                    value={"history"}
                    className="about-subtitle"
                  >
                    {t("about-me-component.options.history")}
                  </button>
                </li>
                <li className="option">
                  <button
                    onClick={handleOption}
                    value={"hobbies"}
                    className="about-subtitle"
                  >
                    {t("about-me-component.options.hobbies")}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-panel">
            {selectedOption === "about-me" && (
              <div className="center-panel" data-aos="fade-up">
                <div className="title-container">
                  <h2 className="about-title">
                    {t("about-me-component.titles.about-me")}
                  </h2>
                  <img src={hand} alt="hand-icon" className="icon-subtitle" />
                </div>
                <div className="hr-about"></div>
                <p className="about-description">
                  {t("about-me-component.descriptions.about-me")}
                </p>
              </div>
            )}
            {selectedOption === "education" && (
              <div className="center-panel" data-aos="fade-up">
                <div className="title-container">
                  <h2 className="about-title">
                    {t("about-me-component.titles.education")}
                  </h2>
                  <img
                    src={gradution}
                    alt="graduation-icon"
                    className="icon-subtitle"
                  />
                </div>
                <div className="hr-about"></div>
                <p className="about-description">
                  {t("about-me-component.descriptions.education.first")} <br />
                  {t("about-me-component.descriptions.education.second")} <br />
                  {t("about-me-component.descriptions.education.three")}
                </p>
              </div>
            )}
            {selectedOption === "history" && (
              <div className="center-panel" data-aos="fade-up">
                <div className="title-container">
                  <h2 className="about-title">
                    {t("about-me-component.titles.history")}
                  </h2>
                  <img
                    src={iconProgramming}
                    alt="history-icon"
                    className="icon-subtitle"
                  />
                </div>
                <div className="hr-about"></div>
                <p className="about-description">
                  {t("about-me-component.descriptions.history.first")} <br />
                  {t("about-me-component.descriptions.history.second")}
                </p>
              </div>
            )}
            {selectedOption === "hobbies" && (
              <div className="center-panel" data-aos="fade-up">
                <div className="title-container">
                  <h2 className="about-title">
                    {t("about-me-component.titles.hobbies")}
                  </h2>
                  <img
                    src={dumbell}
                    alt="hobbies-icon"
                    className="icon-subtitle"
                  />
                </div>
                <div className="hr-about"></div>
                <p className="about-description">
                {t("about-me-component.descriptions.hobbies")}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="skills-container">
          <h2 className="title-skills">{t("about-me-component.skills-title")}</h2>
          <div className="skills-content">
            {skills.map((skill, index) => {
              return (
                <div className="skill-container" key={index}>
                  <div className="title-skill-container">
                    <h3 className="skill-name">{skill.name}</h3>
                    <img
                      className="skill-img"
                      src={skill.img}
                      alt={skill.name}
                    />
                  </div>
                  <p className="level-skill">{skill.level}%</p>
                  <div className="skill-bar">
                    <div className={skill.name.split(".")[0] + "-level"}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
