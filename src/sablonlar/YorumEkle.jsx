import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Toast } from "bootstrap";

function YorumEkle({ onYorumEklendi }) {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [yorum, setYorum] = useState("");
  const [isSuccess, setIsSucccess] = useState(false);

  const toastRef = useRef(null);
  const [toastMessage, setToastMessage] = useState("");
  const showToast = (mesaj) => {
    setToastMessage(mesaj);
    const toast = new Toast(toastRef.current);
    toast.show();
  };

  const [yorumHata, setYorumHata] = useState(false);

  useEffect(() => {
    const kayitliKullanici = localStorage.getItem("kullanici");
    if (kayitliKullanici && kayitliKullanici !== "undefined") {
      const kullanici = JSON.parse(kayitliKullanici);
      setKullaniciAdi(kullanici?.userName || "");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!yorum.trim()) {
      showToast("Boş yorum ekleyemezsiniz!");
      return;
    }
    if (!kullaniciAdi) {
      alert("Giriş yapmadan yorum gönderemezsiniz.");
      return;
    }

    if (!yorum.trim()) {
      setYorumHata(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://api.yunuskarasen.com/api/yorum-ekle",
        {
          kullaniciAdi,
          yorum,
        }
      );

      console.log("Yorum eklendi:", response.data);
      setYorum("");
      showToast("Yorum başarıyla eklendi!");
      setIsSucccess(true);
      if (onYorumEklendi) onYorumEklendi();
    } catch (error) {
      console.error("Yorum ekleme hatası:", error);
      alert("Yorum eklenirken hata oluştu.");
      showToast("Yorum eklenirken hata oluştu.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="container d-flex justify-content-start align-items-center mt-5"
          style={{ height: 300 }}
        >
          <div className="col-12">
            {!kullaniciAdi && (
              <h1 className="text-danger fw-bold">
                Yorum eklemek için giriş yapmanız gerekmektedir.
              </h1>
            )}

            <div className="col-12">
              <textarea
                disabled={!kullaniciAdi}
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  resize: "none",
                  fontSize: "16px",
                  fontFamily: "Arial",
                }}
                placeholder="Yorumunuz"
                value={yorum}
                onChange={(e) => setYorum(e.target.value)}
              />
            </div>

            <div className="col-12 mt-2">
              <div className="d-flex align-items-center gap-2">
                <button
                  disabled={!kullaniciAdi}
                  className="btn btn-success"
                  type="submit"
                >
                  Yorum Ekle
                </button>

                <div
                  className={`toast align-items-center text-white border-0 w-auto ${
                    isSuccess ? "bg-success" : "bg-danger"
                  }`}
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  ref={toastRef}
                >
                  <div className="d-flex justify-content-center">
                    <div className="toast-body p-2">{toastMessage}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default YorumEkle;
