import style from "./home.module.css";
import image from "../../assets/welcome2.png";
import SectionAbout from "./section.about";
import styleAbout from "./section.home.module.css"

function Home() {
  return (
    <article className={style.article}>
      <section className={style.welcome}>
        <div className={style.welcomeContain}>
          <h1 className={style.welcomeTitle}>
            Hi!
            <br />I am Tomás
          </h1>
          <p className={style.welcomeSubtitle}>Full Stack Web Developer</p>
        </div>
        <div className={style.imageContainer}>
          <img src={image} alt="" className={style.welcomeImage} />
        </div>
        <div className={style.skew}></div>
      </section>
      <section className={styleAbout.container}>
        <div className={styleAbout.textContainer}>
          <h3 className={styleAbout.titleAbout}>About</h3>
          <p className={styleAbout.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <picture className={styleAbout.imageContainer}>
          <img src="" alt="" className={styleAbout.image} />
        </picture>
      </section>
    </article>
  );
}

export default Home;
