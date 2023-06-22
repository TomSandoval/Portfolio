import style from "./home.module.css";
import image from "../../assets/welcome2.png";
import SectionAbout from "./section.about";
import SectionPortfolio from "./sectionPortfolio";
import SectionContact from "./contactSection";
import Footer from "../footer/footer";
import { useTranslation } from "react-i18next";

function Home() {

  const [t, i18n] = useTranslation("global")

  return (
    <>
    <article className={style.article}>
      <section className={style.welcome}>
        <div className={style.welcomeContain}>
          <h1 className={style.welcomeTitle}>
            {t("home.welcome-message")}
            <br />{t("home.welcome-iam")}
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
