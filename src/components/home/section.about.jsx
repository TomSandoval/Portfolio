import style from "./section.home.module.css";
import aboutImage from "../../assets/Mesa de trabajo 1.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function SectionAbout() {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <section className={style.container} data-aos='fade-left'>
    <div className={style.textContainer}>
      <h3 className={style.titleAbout}>About Me</h3>
      <p className={style.paragraph}>
        Hi! I'm Tomás Sandoval, a full stack developer passionate about
        designing and developing efficient and user-friendly web
        applications. I live in Argentina and honed my skills as a developer
        at Henry Academy. If you want to know more about me, click the
        following button!
      </p>
      <button className={style.aboutButton}>More about me!</button>
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
