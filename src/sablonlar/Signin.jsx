import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {
  const navigate = useNavigate();
  const [unuttum, setUnuttum] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1 w-100">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <form className="p-4 border rounded">
          <h3 className="text-center mb-3">Giriş Yap</h3>

          {/* Bilgilendirme */}
          <div className="alert alert-warning text-center py-2">
            🚧 Giriş sistemi şu anda devre dışıdır.
          </div>

          <div className="mb-3">
            <label className="form-label">Kullanıcı Adınız</label>
            <input type="text" className="form-control" disabled />
          </div>

          <div className="mb-3">
            <label className="form-label">Şifreniz</label>
            <input type="password" className="form-control" disabled />
          </div>

          <button className="btn btn-secondary w-100" disabled>
            Giriş Yap
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="m-0 me-2 d-inline">Hesabın yok mu?</p>
          <button
            className="btn btn-link p-0"
            onClick={() => navigate("/register")}
          >
            Kayıt Ol
          </button>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-link p-0" onClick={() => setUnuttum(true)}>
            Şifremi unuttum
          </button>

          <p
            className="fw-bold mt-2"
            style={{
              color: "red",
              visibility: unuttum ? "visible" : "hidden",
              height: "1.5em",
            }}
          >
            Şifre sıfırlama servisi henüz aktif değil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
