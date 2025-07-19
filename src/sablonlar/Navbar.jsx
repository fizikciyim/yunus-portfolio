import { useState, useRef, useEffect, useContext } from "react";
import Collapse from "bootstrap/js/dist/collapse";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // path'i kendi dosyana göre ayarla

function Navbar() {
  const location = useLocation(); // Şu anki URL bilgisi burada

  const sayfaBasliklari = {
    "/": "Ana Sayfa",
    "/about": "Hakkımda",
    "/photos": "Projelerim",
    "/contact": "İletişim",
    "/comments": "Yorumlar",
    "/signin": "Giriş Yap",
    "/register": "Kayıt Ol",
  };
  const baslik = sayfaBasliklari[location.pathname] || "Sayfa";

  const { kullanici, login, logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);
  const bsCollapseRef = useRef(null);

  // Bootstrap Collapse instance'ını sadece bir kere başlat
  useEffect(() => {
    if (collapseRef.current && !bsCollapseRef.current) {
      bsCollapseRef.current = new Collapse(collapseRef.current, {
        toggle: false,
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        collapseRef.current &&
        !collapseRef.current.contains(event.target)
      ) {
        bsCollapseRef.current?.hide();
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Navbar toggle butonuna tıklanınca
  const toggleNavbar = () => {
    if (bsCollapseRef.current) {
      if (isOpen) {
        bsCollapseRef.current.hide();
      } else {
        bsCollapseRef.current.show();
      }
      setIsOpen(!isOpen);
    }
  };

  // Navbar linklerine tıklanınca menüyü kapat
  const closeNavbar = () => {
    if (bsCollapseRef.current) {
      bsCollapseRef.current.hide();
      setIsOpen(false);
    }
  };

  const isLoggedIn = !!kullanici;

  // Aktif link için class belirleyen fonksiyon
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active-link" : "nav-link";
  };

  return (
    <nav
      className="navbar  navbar-dark bg-dark px-3 d-sm-none"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1050 }}
    >
      <Link className="navbar-brand" to={location.pathname}>
        {baslik}
      </Link>

      <div style={{ display: "flex", alignItems: "center" }}>
        {isLoggedIn && (
          <span
            style={{
              color: "white",
              marginRight: "10px",
              fontWeight: "bold",
            }}
          >
            <span className="fa fa-user fa-lg me-2"></span>
            {kullanici.userName}
          </span>
        )}

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className="collapse navbar-collapse"
        ref={collapseRef}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className={getNavLinkClass("/")} to="/" onClick={closeNavbar}>
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/about")}
              to="/about"
              onClick={closeNavbar}
            >
              Hakkımda
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/photos")}
              to="/photos"
              onClick={closeNavbar}
            >
              Projelerim
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/contact")}
              to="/contact"
              onClick={closeNavbar}
            >
              İletişim
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/comments")}
              to="/comments"
              onClick={closeNavbar}
            >
              Yorumlar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/art")}
              to="/art"
              onClick={closeNavbar}
            >
              Sanat
            </Link>
          </li>
        </ul>

        {isLoggedIn ? (
          <button
            className="btn btn-danger pe-2 ps-2 pt-0 pb-0 "
            onClick={logout}
          >
            Çıkış Yap
          </button>
        ) : (
          <div className="d-flex">
            <Link
              className={`${getNavLinkClass("/signin")} me-5 `}
              to="/signin"
              onClick={closeNavbar}
              style={{ color: "#e1eef4" }}
            >
              Giriş Yap
            </Link>
            <Link
              className={getNavLinkClass("/register")}
              to="/register"
              onClick={closeNavbar}
              style={{ color: "#e1eef4" }}
            >
              Kayıt Ol
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
