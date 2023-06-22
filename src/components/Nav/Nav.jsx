import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import usaFlag from "../../assets/USA-flag.png";
import spainFlag from "../../assets/Spain-flag.png";
import Select from "react-select";

const OptionWithImage = ({ value, label, imageSrc }) => ({
  value,
  label: (
    <div>
      <img
        src={imageSrc}
        alt={label}
        style={{ width: "18px", marginRight: "5px" }}
      />
      {label}
    </div>
  ),
});

function Nav() {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const divMenu = useRef(null);
  const buttonActive = useRef(null);
  const [t, i18n] = useTranslation("global");
  
  const options = [
    { value: "en", label: "English", imageSrc: usaFlag },
    { value: "es", label: "Español", imageSrc: spainFlag },
  ];

  let lang = window.localStorage.getItem("leng");
  
  useEffect(() => {

    if (!!lang) {
      const value = JSON.parse(lang);
      i18n.changeLanguage(value.value)
    }

    function actualizarAnchoPantalla() {
      setAnchoPantalla(window.innerWidth);
    }
    
    window.addEventListener("resize", actualizarAnchoPantalla);
    
    return () => {
      window.removeEventListener("resize", actualizarAnchoPantalla);
    };
  }, []);
  
  useEffect(() => {
    function handleDocumentClick(e) {
      if (
        divMenu.current &&
        buttonActive.current &&
        divMenu.current.className.includes("containerMenuActive") &&
        e.target !== divMenu.current &&
        e.target !== buttonActive.current
        ) {
        setMenu(false);
      }  
    }
    document.addEventListener("click", handleDocumentClick);
    
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  function toggleMenu(e) {
    e.stopPropagation(); // Evitar propagación del evento al documento
    setMenu(!menu);
  }
  
  const handleLaguage = (e) => {
    i18n.changeLanguage(e.value);
    if (e.value == "es") {
      window.localStorage.setItem("leng", JSON.stringify(options[1]))
    } else {
      window.localStorage.setItem("leng", JSON.stringify(options[0]))
    }
  };
  
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "170px",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    control: (provided) => ({
      ...provided,
      background: "#206FCA",
      border: "none",
      borderRadius: "4px",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#f8f8f8" : "white",
      color: state.isSelected ? "blue" : "black",
    }),
  };


  const handleLaguageMobile = e => {
    e.stopPropagation();
    i18n.changeLanguage(e.target.value);
    setMenu(false)
  }

  return (
    <>
      <nav className={style.nav}>
        <Link to="/" className={style.logoLink}>
          <h2 className={style.logo}>Tomás Sandoval</h2>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className={style.list}>
            <Link to="/about" className={style.linkList}>
              {t("navbar.about-button")}
            </Link>
            <Link to="/portfolio" className={style.linkList}>
              {t("navbar.portfolio-button")}
            </Link>
            <Link to="/contact" className={style.linkList}>
              {t("navbar.contact-me-button")}
            </Link>
          </ul>
          { anchoPantalla >= 800 &&
            <Select
            styles={customStyles}
            onChange={handleLaguage}
            isSearchable={false}
            defaultValue={lang ? OptionWithImage(JSON.parse(lang)) : OptionWithImage(options[0])}
            name="language"
            options={options.map((o) => OptionWithImage(o))}
          />
          }
          
        </div>

        {anchoPantalla <= 800 && (
          <div>
            <button
              className={menu ? style.movilButtonOpen : style.movilButton}
              onClick={toggleMenu}
              ref={buttonActive}
            >
              <span className={style.burgerMenuLine}></span>
              <span className={style.burgerMenuLine}></span>
              <span className={style.burgerMenuLine}></span>
            </button>
          </div>
        )}
      </nav>
      <h3 className={style.subtitle}>Tomás Sandoval • Full-Stack Developer</h3>
      {anchoPantalla <= 800 && (
        <div
          id="menu"
          ref={divMenu}
          className={menu ? style.containerMenuActive : style.containerMenu}
        >
          <div className={style.listContainer}>
            <ul className={style.movilListMenu}>
              <li>
                <img
                  className={style.iconMenu}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP9JREFUSEvFlOsNwjAMhO82gUmgm8AkwCSwCd2EMonRSU3VpmkcGir8q1Kj++zzg9g4uLE+igBmtgNwAXAC0AFoAdxI6jsbLsDMjgCeCRWJn0kKthglgBcAVZCKjuR+NcDMZMndcaHJVZGtwMyuvfc5hnqhd8nwAEv+j8XUh8dagLxXg7fpgbLKTJF+Z/3XA3eKekjYA1mmCCNavwfeInn/iyrwRGr2QON3ABCsGWuFk/H+ekz7xmrBlqYnTnrxbMwscqbGc2s2VSlA7vZ4gNltmgAKT4MHmZyOGCDfdeBqoiXZBIEYUGNP0JzYFAOsJvUha3LQ/e+i/aSaX4jkND45MFsZqs//kwAAAABJRU5ErkJggg=="
                />
                <Link to="/about" className={style.movilLink}>
                  About
                </Link>
              </li>
              <li>
                <img
                  className={style.iconMenu}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALBJREFUSEvdVdsNgzAMvNuk3aRMVnWSrsIm7SaHgpoKkBubKKiAf/xh2WefX8TGwo3jowgg6QbgDiBpS3oAD5JJm+IBvABcnCp7kl0tgJIjSTMRSUX76FvKzgvg2WcAAb6j8zDry7cCSRG+wyC5L1OAkc9Wkvt2IoBW1CzjhCla7kIe0Z8L9tmd/QCspfCEU+Q17RAUtbxFb5JX65o+Aw/GY8u+pp5Xrf2/T78266nfAOAlYRlxaeJjAAAAAElFTkSuQmCC"
                />
                <Link to="/portfolio" className={style.movilLink}>
                  Portfolio
                </Link>
              </li>
              <li>
                <img
                  className={style.iconMenu}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAORJREFUSEvtldERgjAQRHc70U60E6lEqUSsRDqRTs7ZDGZiJAQC/DDmN9y9273LQWx8uHF+7AhgZicAdwCHhbZ1ACqSrfJ4i8zsCUCQNU5H8hgDrM9cA7gWUhoAF5eYdMWHChxAFwV2eVvMzOdJAnRhZuqFqsmpaUhWQcxrVAEAVfMgeeuDUs3/amavWn10J2lR4H0dQGI1cdU/SqcAxBpSo+rcCMZVh4MxFfCJ8Wqm9mcuwKsBoOq916lxLgHMehp/QNauIYvWXHYtyXO8KvRitRaWbtThdZ3VXPjBjn6ZhQ5kw94SR4MZE7a3tgAAAABJRU5ErkJggg=="
                />
                <Link to="/contact" className={style.movilLink}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.languageContainer}>
              <button onClick={handleLaguageMobile} value="es" className={style.buttonLanguage}><img className={style.flagMobile} src={spainFlag} alt="es"/> Español</button>
              <button onClick={handleLaguageMobile} value="en" className={style.buttonLanguage}> <img className={style.flagMobile} src={usaFlag} alt="usa" /> English</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
