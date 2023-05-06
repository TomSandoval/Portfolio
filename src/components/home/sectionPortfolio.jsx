import style from './sectionPortfolio.module.css'
import image from '../../assets/Portfolio fixed.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function SectionPortfolio(){

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])

    return (
        <section className={style.container} data-aos='fade-right'>
        <div className={style.skew}></div>
        <div className={style.textContainer}>
          <h3 className={style.titleAbout}>Portfolio</h3>
          <p className={style.paragraph}>
          Check out my work, from basic landing pages to professional e-commerce sites built with market-leading technologies. I perform well working independently, but what I enjoy most is working with a team that shares the same passion for programming!
          </p>
          <button className={style.aboutButton}>Check my works here!</button>
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