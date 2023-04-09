import style from "./section.home.module.css";

function SectionAbout() {
  return (
      <section className={style.container}>
        <div className={style.textContainer}>
          <h3 className={style.title}>About</h3>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <picture className={style.imageContainer}>
          <img src="" alt="" className={style.image} />
        </picture>
      </section>
  );
}

export default SectionAbout;
