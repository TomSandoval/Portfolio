import style from "./home.module.css";
import image from "../../assets/welcome2.png";
import SectionAbout from "./section.about";
import SectionPortfolio from "./sectionPortfolio";
import SectionContact from "./contactSection";
import Footer from "../footer/footer";

function Home() {
  return (
    <>
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
      <SectionAbout/>
      <SectionPortfolio/>
      <SectionContact/>
    </article>
    <Footer/>
    </>
  );
}

export default Home;
