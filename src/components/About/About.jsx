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

export default function About() {
  const containerRef = useRef(null);
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


  const scrollSpeed = 2;
  const scrollDirection = 1;

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
    containerScroll
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
                  About Me
                </button>
              </li>
              <li className="option">
                <button
                  onClick={handleOption}
                  value={"education"}
                  className="about-subtitle"
                >
                  Education
                </button>
              </li>
              <li className="option">
                <button
                  onClick={handleOption}
                  value={"history"}
                  className="about-subtitle"
                >
                  My history with programming
                </button>
              </li>
              <li className="option">
                <button
                  onClick={handleOption}
                  value={"hobbies"}
                  className="about-subtitle"
                >
                  Hobbies
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-panel">
          {selectedOption === "about-me" && (
            <div className="center-panel" data-aos="fade-up">
              <div className="title-container">
                <h2 className="about-title">About Me</h2>
                <img src={hand} alt="hand-icon" className="icon-subtitle" />
              </div>
              <div className="hr-about"></div>
              <p className="about-description">
                Hello! My name is Tomás Sandoval, a passionate 19-year-old
                software developer from Buenos Aires, Argentina. I specialize in
                the front-end field, and although I don't have extensive
                professional experience yet, I have had the opportunity to work
                on various projects during my education at the institution where
                I acquired my skills. What excites me the most about my work is
                the constant need to keep learning. The software development
                industry evolves rapidly, and I love staying updated and
                adapting to the new challenges that arise. For me, continuous
                learning is essential to provide innovative and high-quality
                solutions. Recently, I had the pride of graduating as a
                full-stack developer from Henry Academy, where I acquired a
                solid set of technical skills and learned to develop complete
                web applications, from the frontend to the backend. In my
                approach to work, curiosity and a continuous desire to learn
                play a central role. I am always looking for new ways to improve
                my code and find creative solutions to the challenges I face. I
                firmly believe that the best way to grow professionally is to
                maintain an open mindset and be willing to explore new
                technologies and methodologies.
              </p>
            </div>
          )}
          {selectedOption === "education" && (
            <div className="center-panel" data-aos="fade-up">
              <div className="title-container">
                <h2 className="about-title">Education</h2>
                <img
                  src={gradution}
                  alt="graduation-icon"
                  className="icon-subtitle"
                />
              </div>
              <div className="hr-about"></div>
              <p className="about-description">
                I trained as a full stack developer at "SoyHenry," a web
                development specialized bootcamp. During my time at "SoyHenry,"
                I was able to strengthen and expand my programming skills. Not
                only did I learn the fundamentals, but I also had the
                opportunity to apply my knowledge to solid and scalable
                projects, both in collaboration with other developers and
                working individually. The bootcamp at "SoyHenry" was a
                transformative experience. Not only did they teach me how to
                program, but they also provided me with the tools to tackle
                real-world challenges in the web development field. It was an
                opportunity to gain practical experience and immerse myself
                fully in the world of programming. <br />
                I am grateful for this rewarding experience that propelled me to
                continue growing in this vast field. In addition to my training
                at "SoyHenry", I continue to educate myself through
                self-learning. I have taken various courses in areas such as web
                design, digital marketing and SEO, among others. <br />I firmly
                believe in the importance of staying updated and acquiring
                knowledge in complementary areas to software development. This
                mindset of constant learning allows me to provide more
                comprehensive and effective solutions to the challenges I face
                in my work. I am excited to continue my professional growth and
                collaborate on challenging projects. If you are interested in
                working together or have any questions, please feel free to
                contact me. I hope to have the opportunity to contribute to your
                project!
              </p>
            </div>
          )}
          {selectedOption === "history" && (
            <div className="center-panel" data-aos="fade-up">
              <div className="title-container">
                <h2 className="about-title">My history with programming</h2>
                <img
                  src={iconProgramming}
                  alt="history-icon"
                  className="icon-subtitle"
                />
              </div>
              <div className="hr-about"></div>
              <p className="about-description">
                My programming journey began when I was 16 years old. I was part
                of a generation that grew up alongside computers, and as I
                delved into the vast world of the internet, my curiosity about
                how websites, applications, and entire businesses were created
                grew exponentially. This led me to take my first steps into the
                programming field, and it blew my mind to realize that it's not
                just lines of code—it's innovation, creativity, and solutions.
                It's the gateway to a world of infinite possibilities. At the
                age of 17, I made the decision to dedicate my life to this
                field, and to this day, I still have that constant desire to
                learn and provide solutions to the world. <br />I can still
                vividly remember my first "Hello World!" :'D
              </p>
            </div>
          )}
          {selectedOption === "hobbies" && (
            <div className="center-panel" data-aos="fade-up">
              <div className="title-container">
                <h2 className="about-title">Hobbies</h2>
                <img
                  src={dumbell}
                  alt="hobbies-icon"
                  className="icon-subtitle"
                />
              </div>
              <div className="hr-about"></div>
              <p className="about-description">
                In addition to my passion for programming, I have several
                hobbies that I am passionate about. I enjoy reading personal
                development books, which inspire me and help me grow. I also
                dedicate time to physical exercise to stay fit and take care of
                my health. Furthermore, simRacing is another one of my great
                passions, as I love the thrill of virtual racing. These hobbies
                allow me to find balance in my life and enjoy different forms of
                creativity and entertainment.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="skills-container">
        <h2 className="title-skills">Skills</h2>
        <div ref={containerRef} className="skills-content">
          {skills.map((skill, index) => {
            return (
              <div className="skill-container" key={index}>
                <div className="title-skill-container">
                  <h3 className="skill-name">{skill.name}</h3>
                  <img className="skill-img" src={skill.img} alt={skill.name} />
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
    <Footer/>
    </>
  );
}
