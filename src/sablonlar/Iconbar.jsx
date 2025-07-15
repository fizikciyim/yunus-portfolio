// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";

function Iconbar() {
  const location = useLocation();

  return (
    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <img src="yunus.png" style={{ width: "100%" }} />

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
        <i className="fa fa-user w3-xxlarge" />
        <p>Hakkımda</p>
      </Link>

      <Link
        to="/photos"
        className={`w3-bar-item w3-button w3-padding-large ${
          location.pathname === "/photos" ? "w3-black" : "w3-hover-black"
        }`}
      >
        <i className="fa fa-eye w3-xxlarge" />
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
    </nav>
  );
}

export default Iconbar;
