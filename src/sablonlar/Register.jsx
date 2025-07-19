import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Kayıt ekranı

function Register() {
  const [form, setForm] = useState({
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [kayit, setKayit] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password === form.confirmPassword) {
      try {
        const response = await axios.post(
          "https://api.yunuskarasen.com/api/kayit",
          form
        );
        console.log("Kayıt başarılı:", response.data);
        setForm({
          name: "",
          userName: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
        setKayit(true);
        // istersen yönlendirme yaparsın, formu sıfırlarsın vs.
      } catch (error) {
        console.error("Kayıt hatası:", error);
      }
    } else {
      console.log("şifreler uyuşmuyo");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-grow-1 w-100">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <form onSubmit={handleSubmit} className="border p-4 rounded">
            <h3 className="text-center mb-4">Kayıt Ol</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Ad Soyad
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={form.userName}
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Şifre
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Şifrenizi Doğrulayın
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Kayıt Ol
            </button>
            {kayit ? (
              <h5
                className="text-center mt-2 mb-0 fw-bold"
                style={{ color: "green" }}
              >
                Başarıyla kayıt oldunuz.
              </h5>
            ) : (
              ""
            )}
          </form>
          <div className="text-center mt-3 d-flex justify-content-center align-items-center">
            <p className="m-0 me-2">Hesabın var mı? </p>
            <button
              className="btn btn-link p-0"
              onClick={() => {
                // yönlendirme işlemi burada yapılabilir
                navigate("/signin");
                console.log("Kayıt sayfasına yönlendir");
              }}
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
