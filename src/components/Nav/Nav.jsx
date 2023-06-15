import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Nav() {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const [menuLaguage, setMenuLaguage] = useState(false);
  const divMenu = useRef(null);
  const buttonActive = useRef(null);

  useEffect(() => {
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

  function handleLaguage(e) {
    e.stopPropagation();
    setMenuLaguage(!menuLaguage);
  }
  

  return (
    <>
      <nav className={style.nav}>
        <Link to="/" className={style.logoLink}>
          <h2 className={style.logo}>Tomás Sandoval</h2>
        </Link>
        <ul className={style.list}>
          <Link to="/about" className={style.linkList}>
            About
          </Link>
          <Link to="/portfolio" className={style.linkList}>
            Portfolio
          </Link>
          <Link to="/contact" className={style.linkList}>
            Contact Me
          </Link>
          <button onMouseEnter={handleLaguage} className={style.linkList} style={{border: "none"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
            </svg>
          </button>
        </ul>
        {anchoPantalla <= 800 ? (
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
        ) : null}
      </nav>
      <h3 className={style.subtitle}>Tomás Sandoval • Full-Stack Developer</h3>
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
      </div>
    </>
  );
}

export default Nav;
