import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1 w-100">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <form className="border p-4 rounded">
          <h3 className="text-center mb-3">Kayıt Ol</h3>

          {/* Bilgilendirme */}
          <div className="alert alert-warning text-center py-2">
            🚧 Kayıt sistemi geçici olarak devre dışıdır.
          </div>

          <div className="mb-3">
            <label className="form-label">Ad Soyad</label>
            <input type="text" className="form-control" disabled />
          </div>

          <div className="mb-3">
            <label className="form-label">e-Mail Adresi</label>
            <input type="email" className="form-control" disabled />
          </div>

          <div className="mb-3">
            <label className="form-label">Kullanıcı Adı</label>
            <input type="text" className="form-control" disabled />
          </div>

          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input type="password" className="form-control" disabled />
          </div>

          <div className="mb-3">
            <label className="form-label">Şifreyi Doğrula</label>
            <input type="password" className="form-control" disabled />
          </div>

          <button className="btn btn-secondary w-100" disabled>
            Kayıt Ol
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="m-0 me-2 d-inline">Hesabın var mı?</p>
          <button
            className="btn btn-link p-0"
            onClick={() => navigate("/signin")}
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
