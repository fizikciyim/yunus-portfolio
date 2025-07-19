import React, { useEffect, useState } from "react";
import axios from "axios";
import YorumEkle from "./YorumEkle";
import { useAuth } from "./AuthContext"; // path'i kendi dosyanın konumuna göre değiştir

function Comments() {
  const { kullanici, logout } = useAuth();

  const [yorumlar, setYorumlar] = useState([]);
  const [loading, setLoading] = useState(true); // loading durumu eklendi

  const yorumlariGetir = () => {
    setLoading(true); // Yükleme başladı

    axios
      .get("https://api.yunuskarasen.com/api/yorumlar")
      .then((res) => {
        setYorumlar(res.data);
        setLoading(false); // Yükleme bitti
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Yükleme bitti
      });
  };

  useEffect(() => {
    yorumlariGetir();
  }, []);

  const [silOnayi, setSilOnayi] = useState({ acik: false, yorumId: null });

  const handleSil = async (id) => {
    const userName = kullanici?.userName || "";
    console.log(
      "Silme isteği URL:",
      `http://api.yunuskarasen.com/api/yorum-sil/${id}?kullaniciAdi=${encodeURIComponent(
        userName
      )}`
    );

    try {
      await axios.delete(
        `http://api.yunuskarasen.com/api/yorum-sil/${id}?kullaniciAdi=${encodeURIComponent(
          kullanici?.userName
        )}`
      );

      yorumlariGetir(); // Yorumları yenilemek için çağırılır
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-100 mt-5 mt-md-0">
      <YorumEkle onYorumEklendi={yorumlariGetir} />

      <div className="container">
        {loading ? (
          <div>Yorumlar yükleniyor...</div>
        ) : (
          yorumlar.map((yorum) => (
            <div
              key={yorum.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "gray",
              }}
            >
              <h5 style={{ color: "black", fontWeight: "bold" }}>
                {yorum.kullaniciAdi}
              </h5>
              <p
                style={{
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  fontWeight: "bold",
                }}
              >
                {yorum.yorum}
              </p>
              <div className="d-flex justify-content-between">
                <small>{new Date(yorum.tarih).toLocaleString()}</small>
                {kullanici && yorum.kullaniciAdi === kullanici.userName && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      setSilOnayi({ acik: true, yorumId: yorum.id })
                    }
                  >
                    Yorumu Sil
                  </button>
                )}
                {silOnayi.acik && (
                  <div
                    className="modal fade show"
                    style={{ display: "block" }}
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-modal="true"
                    role="dialog"
                    onClick={() => setSilOnayi({ acik: false, yorumId: null })} // modal dışına tıklayınca kapat
                  >
                    <div
                      className="modal-dialog"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="modal-content">
                        <div className="modal-body">
                          Yorumu silmek istediğine emin misin?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                              setSilOnayi({ acik: false, yorumId: null })
                            }
                          >
                            Hayır
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              handleSil(silOnayi.yorumId);
                              setSilOnayi({ acik: false, yorumId: null });
                            }}
                          >
                            Evet, Sil
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
