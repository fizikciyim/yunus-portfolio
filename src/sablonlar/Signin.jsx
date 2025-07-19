import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { Toast } from "bootstrap";

// Giriş ekranı

function Signin() {
  const navigate = useNavigate();
  const { kullanici, login, logout } = useAuth();

  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [girisBilgileri, setgirisBilgileri] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("çalışıyor");
    const { userName, password } = girisBilgileri; // burada destructuring yap

    if (!userName || !userName.trim() || !password || !password.trim()) {
      setErrorMessage("Kullanıcı adı veya şifre boş olamaz.");
      setShowToast(true);
      return;
    }

    setErrorMessage("");
    setShowToast(false);
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
        setShowToast(true);

        console.log("Giriş hatası:", error.response.data.error);
      } else {
        // Başka bir hata
        console.log("Sunucu  hatası veya bağlantı problemi");
        setShowToast(true);
      }
    }
  };
  useEffect(() => {
    if (showToast && toastRef.current) {
      const bsToast = new Toast(toastRef.current);
      bsToast.show();

      const timer = setTimeout(() => {
        bsToast.hide();
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-grow-1 w-100">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <form
            className="p-4 border rounded  position-relative"
            onSubmit={handleSubmit}
          >
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
            {showToast && (
              <div
                ref={toastRef}
                className="toast show text-bg-danger mt-3"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                style={{
                  position: "absolute",
                  minWidth: "100px",
                  // width: "100%", // butonla aynı genişlik

                  zIndex: 1050,
                }}
              >
                <div className="toast-body d-flex justify-content-between align-items-center">
                  {errorMessage || "Kullanıcı adı veya şifre yanlış."}
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowToast(false)}
                    aria-label="Close"
                  />
                </div>
              </div>
            )}
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
