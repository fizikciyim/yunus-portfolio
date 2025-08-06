import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ResetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");

  const sifreSifirla = async () => {
    try {
      const response = await fetch(
        "https://api.yunuskarasen.com/api/sifre-sifirla",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      setMesaj(data.message || data.error);
    } catch (err) {
      console.error("Hata:", err);
      setMesaj("Sunucu hatası.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1 w-100">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div
          className=" justify-content-center align-items-center flex-grow-1 w-100 border rounded p-4"
          style={{ maxWidth: "400px" }}
        >
          <h3 className="text-center mb-4">Şifremi Unuttum</h3>
          <div className="d-flex flex-column ">
            <label htmlFor="email" className="form-label mb-0">
              E-posta adresinizi giriniz.
            </label>
            <input
              type="email"
              className="form-control mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>

          <button className="btn btn-primary mt-3 w-100" onClick={sifreSifirla}>
            Sıfırlama Bağlantısı Gönder
          </button>
          <p className="mt-3">{mesaj}</p>
        </div>
        <div className="text-center mt-3 d-flex justify-content-center align-items-center">
          <p className="m-0 me-2">Hesabın var mı? </p>
          <button
            className="btn btn-link p-0"
            onClick={() => {
              // yönlendirme işlemi burada yapılabilir
              navigate("/signin");
            }}
          >
            Giriş Yap
          </button>
        </div>

        <div className="text-center mt-3 d-flex justify-content-center align-items-center">
          <p className="m-0 me-2">Hesabın yok mu? </p>
          <button
            className="btn btn-link p-0"
            onClick={() => {
              // yönlendirme işlemi burada yapılabilir
              navigate("/register");
            }}
          >
            Kayıt ol
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
