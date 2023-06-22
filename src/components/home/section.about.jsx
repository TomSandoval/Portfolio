import style from "./section.home.module.css";
import aboutImage from "../../assets/Mesa de trabajo 1.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SectionAbout() {

  const [t,i18n] = useTranslation("global")

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <section className={style.container} data-aos='fade-left'>
    <div className={style.textContainer}>
      <h3 className={style.titleAbout}>{t("home.about-me-section.about-me-section-title")}</h3>
      <p className={style.paragraph}>
        {t("home.about-me-section.about-me-section-text")}
      </p>
      <Link to={"/about"} className={style.aboutButton}>{t("home.about-me-section.about-me-section-button")}</Link>
    </div>
    <picture className={style.imageContainer}>
      <img
        src={aboutImage}
        alt="Tomás Ilustration"
        className={style.image}
      />
    </picture>

  </section>
  );
}

export default SectionAbout;
