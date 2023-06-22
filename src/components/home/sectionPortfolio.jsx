import style from './sectionPortfolio.module.css'
import image from '../../assets/DisenioPortfolio.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SectionPortfolio(){


  const [t, i18n] = useTranslation("global")

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])

    return (
        <section className={style.container} data-aos='fade-right'>
        <div className={style.skew}></div>
        <div className={style.textContainer}>
          <h3 className={style.titleAbout}>{t("home.portfolio-section.portfolio-section-title")}</h3>
          <p className={style.paragraph}>
          {t("home.portfolio-section.portfolio-section-text")}
          </p>
          <Link to={"/portfolio"} className={style.aboutButton}>{t("home.portfolio-section.portfolio-section-button")}</Link>
        </div>
        <picture className={style.imageContainer}>
          <img
            src={image}
            alt="Tomás Ilustration"
            className={style.image}
          />
        </picture>
        <div className={style.skew2}></div>
      </section>
      );
}