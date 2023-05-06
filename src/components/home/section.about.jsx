import style from "./section.home.module.css";
import aboutImage from "../../assets/Tomas illustration.png";

function SectionAbout() {
  return (
    <section className={style.container}>
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
