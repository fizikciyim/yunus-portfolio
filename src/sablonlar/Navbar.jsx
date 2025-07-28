import { useState, useRef, useEffect, useContext } from "react";
import Collapse from "bootstrap/js/dist/collapse";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // path'i kendi dosyana göre ayarla

function Navbar() {
  const location = useLocation(); // Şu anki URL bilgisi burada
  // iconu sayfaya göre belirle
  const getIconClass = (path) => {
    switch (path) {
      case "/":
        return "fa-home";
      case "/about":
        return "fa-info-circle";
      case "/photos":
        return "fa-folder-open";
      case "/contact":
        return "fa-envelope";
      case "/comments":
        return "fa-comments";
      case "/art":
        return "fa-pencil-alt";
      case "/signin":
        return "fa-sign-in-alt";
      case "/register":
        return "fa-user-plus";

      default:
        return "fa-home";
    }
  };

  const sayfaBasliklari = {
    "/": "Ana Sayfa",
    "/about": "Hakkımda",
    "/photos": "Projelerim",
    "/contact": "İletişim",
    "/comments": "Yorumlar",
    "/art": "Sanat",
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

  const getIconStyle = (path) => ({
    color: location.pathname === path ? "white" : "",
  });

  return (
    <nav
      className="navbar  navbar-dark bg-dark px-3 d-sm-none"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1050 }}
    >
      <Link className="navbar-brand" to={location.pathname}>
        <div className="d-flex   align-items-center">
          <i
            className={`fa ${getIconClass(location.pathname)} w3-xxlarge me-3`}
            style={{ color: "white" }}
          />{" "}
          <h2 className="mb-0">{baslik}</h2>
        </div>
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
              <i
                className="fa fa-home w3-xlarge me-2"
                style={getIconStyle("/")}
              />
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/about")}
              to="/about"
              onClick={closeNavbar}
            >
              <i
                className="fa fa-info-circle w3-xlarge me-2"
                style={getIconStyle("/about")}
              />
              Hakkımda
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/photos")}
              to="/photos"
              onClick={closeNavbar}
            >
              <i
                className="fa fa-folder-open w3-xlarge me-2"
                style={getIconStyle("/photos")}
              />
              Projelerim
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/contact")}
              to="/contact"
              onClick={closeNavbar}
            >
              <i
                className="fa fa-envelope w3-xlarge me-2"
                style={getIconStyle("/contact")}
              />
              İletişim
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/comments")}
              to="/comments"
              onClick={closeNavbar}
            >
              <i
                className="fa fa-comments w3-xlarge me-2"
                style={getIconStyle("/comments")}
              />
              Yorumlar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getNavLinkClass("/art")}
              to="/art"
              onClick={closeNavbar}
            >
              <i
                className="fa fa-pencil-alt w3-xlarge me-2"
                style={getIconStyle("/art")}
              />
              Sanat
            </Link>
          </li>
        </ul>

        {isLoggedIn ? (
          <button className="btn btn-danger px-3 py-1 " onClick={logout}>
            <i className="fa fa-sign-out-alt w3-xlarge me-2" />
            Çıkış Yap
          </button>
        ) : (
          <div className="d-flex my-2">
            <Link
              className={`${getNavLinkClass("/signin")} me-3 `}
              to="/signin"
              onClick={closeNavbar}
              style={{
                color: "#e1eef4",
              }}
            >
              <button className="btn btn-success">
                <i className="fa fa-sign-in-alt w3-xlarge me-2" />
                Giriş Yap
              </button>
            </Link>
            <Link
              className={getNavLinkClass("/register")}
              to="/register"
              onClick={closeNavbar}
            >
              <button className="btn btn-success">
                <i className="fa fa-user-plus w3-xlarge me-2" />
                Kayıt Ol
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
