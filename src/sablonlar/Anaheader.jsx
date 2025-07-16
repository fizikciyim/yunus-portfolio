import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function AnaHeader() {
  const { kullanici, login, logout } = useAuth();

  const handleLogout = () => {
    logout(); //! sadece bu kadar

    // navigate("/"); // Anasayfaya ya da giriş sayfasına dön
  };

  if (kullanici) {
    return (
      <div className="d-none d-sm-flex justify-content-end align-items-center me-5">
        <p className="mb-0">
          👋 Hoş geldiniz, <strong>{kullanici.userName}</strong>
        </p>
        <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
          Çıkış Yap
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="d-none d-sm-flex justify-content-end">
        <Link to="/signin">
          <button className="btn btn-primary me-3" type="submit">
            Giriş Yap
          </button>
        </Link>

        <Link to="/register">
          <button className="btn btn-danger">Kayıt Ol</button>
        </Link>
      </div>
    </>
  );
}

export default AnaHeader;
