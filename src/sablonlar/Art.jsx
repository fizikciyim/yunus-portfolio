import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import StarRating from "./StarRating";

function Art() {
  const [ratings, setRatings] = useState({});
  const { kullanici } = useAuth(); // Giriş yapan kullanıcıyı al

  const [ortalamaPuanlar, setOrtalamaPuanlar] = useState({});
  useEffect(() => {
    const fetchOrtalamaPuanlar = async () => {
      const yeniPuanlar = {};

      for (let i = 0; i < resimler.length; i++) {
        try {
          const res = await axios.get(
            `https://api.yunuskarasen.com/api/puanlar/ortalama/${i}`
          );

          // ortalama ve toplam birlikte kaydediliyor
          yeniPuanlar[i] = {
            ortalama: res.data.ortalama || "Henüz yok",
            toplam: res.data.toplam || 0,
          };
        } catch (err) {
          yeniPuanlar[i] = { ortalama: "Hata", toplam: 0 };
        }
      }

      setOrtalamaPuanlar(yeniPuanlar);
    };

    fetchOrtalamaPuanlar();
  }, []);

  const handleRate = async (index, newRating) => {
    setRatings((prev) => ({
      ...prev,
      [index]: newRating,
    }));

    // Backend çağrısını burada yapabilirsin
    try {
      if (!kullanici) {
        alert("Lütfen giriş yapın.");
        return;
      }
      await axios.post("https://api.yunuskarasen.com/api/puanlar", {
        kullanici_id: kullanici.id,
        resim_id: index, // backend'de bunu şimdilik resim_id gibi ele al
        puan: newRating,
      });
      const res = await axios.get(
        `https://api.yunuskarasen.com/api/puanlar/ortalama/${index}`
      );
      setOrtalamaPuanlar((prev) => ({
        ...prev,
        [index]: {
          ortalama: res.data.ortalama || "Henüz yok",
          toplam: res.data.toplam || 0,
        },
      }));
    } catch (error) {
      console.error("Puan gönderilirken hata oluştu:", error);
    }
  };

  const [modalResim, setModalResim] = useState(null); // Şu an açık olan resim

  const resimler = [
    { dosya: "1.jpeg", baslik: "Portre 1" },
    { dosya: "2.jpeg", baslik: "Portre 1" },
    { dosya: "3.jpeg", baslik: "Portre 1" },
    { dosya: "4.jpeg", baslik: "Portre 1" },
    { dosya: "5.jpeg", baslik: "Portre 1" },
    { dosya: "6.jpeg", baslik: "Portre 1" },
    { dosya: "7.jpeg", baslik: "Portre 1" },
    { dosya: "8.jpeg", baslik: "Portre 1" },
    { dosya: "9.jpeg", baslik: "Portre 1" },
    { dosya: "10.jpeg", baslik: "Portre 1" },
    { dosya: "11.jpeg", baslik: "Portre 1" },
    { dosya: "12.jpeg", baslik: "Portre 1" },
    { dosya: "13.jpeg", baslik: "Portre 1" },
  ];

  return (
    <div
      className="container mt-md-3 mobil-margin"
      style={{ maxWidth: "1200px" }}
    >
      <h2 className="text-center mb-4">Sanat Galerim</h2>
      <p
        className="text-center mb-5"
        style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}
      >
        Bu sayfada yer alan tüm çizimler bana aittir. Sanat, yazılım gibi teknik
        becerilerimin yanında kişisel ifade biçimimdir. Bu siteyi geliştirerek
        hem çizimlerimi sergilemek hem de React, Node.js ve veritabanı gibi
        teknolojilerle neler yapabildiğimi göstermek istedim.
      </p>
      <div
        className="masonry-wrapper mb-3"
        style={{
          columnCount: 4,
          columnGap: "1.5rem",
        }}
      >
        {resimler.map((resim, index) => (
          <div
            key={index}
            style={{
              breakInside: "avoid",
              marginBottom: "1rem",
            }}
          >
            <div className="card shadow-sm">
              <img
                src={`/sanat/${resim.dosya}`}
                className="card-img-top"
                alt={resim.baslik}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => setModalResim(resim)}
              />
              <div
                className="card-body text-center p-2"
                style={{ backgroundColor: "gray" }}
              >
                <h5 className="card-title fw-bold">{resim.baslik}</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <StarRating
                    initialRating={
                      parseFloat(ortalamaPuanlar[index]?.ortalama) || 0
                    }
                    onRate={(newRating) => handleRate(index, newRating)}
                  />
                  <span
                    className="ms-2 text-muted fw-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    ({ortalamaPuanlar[index]?.toplam ?? "?"})
                  </span>
                </div>
                {kullanici ? (
                  ratings[index] ? (
                    <p
                      className="mt-1 text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Senin puanın: <strong>{ratings[index]}</strong>
                    </p>
                  ) : (
                    <p className="m-0" style={{ fontSize: "0.8rem" }}>
                      Oy verebilirsiniz.
                    </p>
                  )
                ) : (
                  <p className="m-0" style={{ fontSize: "0.8rem" }}>
                    Oy vermek için giriş yapmalısınız.
                  </p>
                )}

                <p className="mt-2 mb-0" style={{ color: "black" }}>
                  Ortalama Puan:{" "}
                  <strong>
                    {ortalamaPuanlar[index]?.ortalama ?? "Yükleniyor..."}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalResim && (
        <div
          onClick={() => setModalResim(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={`/sanat/${modalResim.dosya}`}
            alt={modalResim.baslik}
            style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}
export default Art;
