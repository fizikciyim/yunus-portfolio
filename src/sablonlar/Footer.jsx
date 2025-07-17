import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222222",
        color: "white",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <a
          href="https://www.linkedin.com/in/yunuskarasen"
          target="_blank"
          style={{ color: "white", margin: "0 10px" }}
        >
          <i className="fab fa-linkedin fa-lg" />
        </a>
        <a
          href="https://github.com/fizikciyim"
          target="_blank"
          style={{ color: "white", margin: "0 10px" }}
        >
          <i className="fab fa-github fa-lg" />
        </a>
        <Link to="/contact" style={{ color: "white", margin: "0 10px" }}>
          <i className="fas fa-envelope fa-lg" />
        </Link>
      </div>
      <div style={{ fontSize: 14 }}>© 2025 Yunus. Tüm hakları saklıdır.</div>
    </footer>
  );
}
export default Footer;
