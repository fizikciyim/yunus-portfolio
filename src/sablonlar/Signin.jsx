import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Giriş ekranı

function Signin() {
  const navigate = useNavigate();
  const { kullanici, login, logout } = useAuth();

  const [hataMesaji, setHataMesaji] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [girisBilgileri, setgirisBilgileri] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("çalışıyor");

    try {
      const response = await axios.post(
        "https://api.yunuskarasen.com/api/giris",
        girisBilgileri
      );
      console.log("Giriş cevabı:", response.data.kullanici);

      login(response.data.kullanici); // sadece bu kadar

      setgirisBilgileri({
        userName: "",
        password: "",
      });

      // istersen yönlendirme yaparsın, formu sıfırlarsın vs.
      navigate("/comments"); // istediğin rota
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Kullanıcı adı veya şifre yanlış
        setHataMesaji("Kullanıcı adı veya şifre yanlış.");
        setShowAlert(true);

        console.log("Giriş hatası:", error.response.data.error);
      } else {
        // Başka bir hata
        console.log("Sunucu  hatası veya bağlantı problemi");
        setHataMesaji("Sunucu hatası veya bağlantı problemi.");
        setShowAlert(true);
      }
      // // 3 saniye sonra mesajı kaldır
      // setTimeout(() => {
      //   setHataMesaji("");
      // }, 3000);
    }
  };
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false); // fade-out başlar
        setTimeout(() => setHataMesaji(""), 500); // animasyon bitince mesaj silinir
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center vh-100">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <form className="p-4 border rounded" onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Giriş Yap</h3>

            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Kullanıcı Adınız
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={girisBilgileri.userName}
                onChange={(e) =>
                  setgirisBilgileri({
                    ...girisBilgileri,
                    userName: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Şifreniz
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={girisBilgileri.password}
                onChange={(e) =>
                  setgirisBilgileri({
                    ...girisBilgileri,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Giriş Yap
            </button>
          </form>

          <div className="text-center mt-3 d-flex justify-content-center align-items-center">
            <p className="m-0 me-2">Hesabın yok mu? </p>
            <button
              className="btn btn-link p-0"
              onClick={() => {
                // yönlendirme işlemi burada yapılabilir
                navigate("/register");
                console.log("Kayıt sayfasına yönlendir");
              }}
            >
              Kayıt ol
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
