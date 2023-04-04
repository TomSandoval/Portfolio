import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    function actualizarAnchoPantalla() {
      setAnchoPantalla(window.innerWidth);
    }

    window.addEventListener("resize", actualizarAnchoPantalla);

    return () => {
      window.removeEventListener("resize", actualizarAnchoPantalla);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setMenu(false);
  }, []);

  return (
    <div style={{position: "relative"}}>
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
        </ul>
        {anchoPantalla <= 730 ? (
          <div>
            <button
              className={menu ? style.movilButtonOpen : style.movilButton}
              onClick={toggleMenu}
            >
              <span className={style.burgerMenuLine}></span>
              <span className={style.burgerMenuLine}></span>
              <span className={style.burgerMenuLine}></span>
            </button>
          </div>
        ) : null}
      </nav>
      <h3 className={style.subtitle}>Tomás Sandoval • Full-Stack Developer</h3>
        <div className={menu ? style.containerMenuActive : style.containerMenu}>
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
              <img className={style.iconMenu} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAORJREFUSEvtldERgjAQRHc70U60E6lEqUSsRDqRTs7ZDGZiJAQC/DDmN9y9273LQWx8uHF+7AhgZicAdwCHhbZ1ACqSrfJ4i8zsCUCQNU5H8hgDrM9cA7gWUhoAF5eYdMWHChxAFwV2eVvMzOdJAnRhZuqFqsmpaUhWQcxrVAEAVfMgeeuDUs3/amavWn10J2lR4H0dQGI1cdU/SqcAxBpSo+rcCMZVh4MxFfCJ8Wqm9mcuwKsBoOq916lxLgHMehp/QNauIYvWXHYtyXO8KvRitRaWbtThdZ3VXPjBjn6ZhQ5kw94SR4MZE7a3tgAAAABJRU5ErkJggg==" />
              <Link to="/contact" className={style.movilLink}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Nav;
