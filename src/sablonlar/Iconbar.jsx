// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Iconbar() {
  const location = useLocation();
  const { kullanici, login, logout } = useAuth();

  return (
    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      {kullanici ? (
        <>
          <i className="fa fa-user w3-xxlarge" />
          <p className="mb-0">
            <strong>{kullanici.userName}</strong>
          </p>
        </>
      ) : (
        <img src="yunus.png" style={{ width: "100%" }} />
      )}

      <Link
        to="/"
        className={`w3-bar-item w3-button w3-padding-large ${
          location.pathname === "/" ? "w3-black" : "w3-hover-black"
        }`}
      >
        <i className="fa fa-home w3-xxlarge" />
        <p>Ana sayfa</p>
      </Link>

      <Link
        to="/about"
        className={`w3-bar-item w3-button w3-padding-large ${
          location.pathname === "/about" ? "w3-black" : "w3-hover-black"
        }`}
      >
        <i className="fa fa-info-circle w3-xxlarge" />
        <p>Hakkımda</p>
      </Link>

      <Link
        to="/photos"
        className={`w3-bar-item w3-button w3-padding-large ${
          location.pathname === "/photos" ? "w3-black" : "w3-hover-black"
        }`}
      >
        <i className="fa fa-folder-open w3-xxlarge" />
        <p>Projelerim</p>
      </Link>

      <Link
        to="/contact"
        className={`w3-bar-item w3-button w3-padding-large ${
          location.pathname === "/contact" ? "w3-black" : "w3-hover-black"
        }`}
      >
        <i className="fa fa-envelope w3-xxlarge" />
        <p>İletişim</p>
      </Link>

      <Link
        to="/comments"
        className={`w3-bar-item w3-button w3-padding-large ${
          location.pathname === "/comments" ? "w3-black" : "w3-hover-black"
        }`}
      >
        <i className="fa fa-comments w3-xxlarge" />
        <p>Yorumlar</p>
      </Link>

      {kullanici ? (
        <>Çıkış Yap</>
      ) : (
        <>
          <Link
            to="/signin"
            className={`w3-bar-item w3-button w3-padding-large ${
              location.pathname === "/signin" ? "w3-black" : "w3-hover-black"
            }`}
          >
            <i className="fa fa-sign-in-alt w3-xxlarge" />
            <p>Giriş Yap</p>
          </Link>
          <Link
            to="/register"
            className={`w3-bar-item w3-button w3-padding-large ${
              location.pathname === "/register" ? "w3-black" : "w3-hover-black"
            }`}
          >
            <i className="fa fa-user-plus w3-xxlarge" />
            <p>Kayıt Ol</p>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Iconbar;
