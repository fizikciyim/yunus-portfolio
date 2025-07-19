import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { Toast } from "bootstrap";
import axios from "axios";

function StarRating({ initialRating = 0, onRate }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const { kullanici } = useAuth();

  const toastRef = useRef(null); // Toast referansı

  useEffect(() => {
    console.log("initialRating: ", initialRating);
    setRating(initialRating);
  }, [initialRating]);
  const handleClick = (value, e) => {
    if (!kullanici) {
      const x = e.clientX;
      const y = e.clientY;

      // Toast pozisyonunu dinamik olarak ayarla
      const toastEl = toastRef.current;
      toastEl.style.left = `${x}px`;
      toastEl.style.top = `${y}px`;

      // Bootstrap toast'ı elle göster
      const toast = new Toast(toastEl, {
        delay: 2000, // 2 saniyede otomatik kapanır
        autohide: true,
      });
      toast.show();
      return;
    }

    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <>
      <span>
        {[1, 2, 3, 4, 5].map((value) => {
          let icon;
          const currentRating = hover || rating;

          if (value <= Math.floor(currentRating)) icon = <FaStar />;
          else if (value - currentRating < 1) icon = <FaStarHalfAlt />;
          else icon = <FaRegStar />;

          return React.cloneElement(icon, {
            key: value,
            color: "gold",
            size: 24,
            style: { cursor: "pointer", marginRight: 4 },
            onClick: (e) => handleClick(value, e),
            onMouseEnter: () => setHover(value),
            onMouseLeave: () => setHover(0),
          });
        })}
      </span>

      {/* Bootstrap toast */}
      <div
        ref={toastRef}
        className="toast position-fixed text-bg-danger"
        style={{
          position: "fixed", // BURASI sabit kalması için kesinlikle fixed olmalı
          top: "20px", // ekranın üstünden 20px aşağıda
          left: "50%", // yatayda ortalanmış
          transform: "translateX(-50%)", // tam ortalama için
          zIndex: 9999,
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body d-flex justify-content-between align-items-center">
          Puan vermek için giriş yapmalısınız!
        </div>
      </div>
    </>
  );
}
function Art() {
  const [ratings, setRatings] = useState({});
  const { kullanici } = useAuth(); // Giriş yapan kullanıcıyı al

  console.log("kullanıcı", kullanici);
  const [ortalamaPuanlar, setOrtalamaPuanlar] = useState({});
  useEffect(() => {
    const fetchOrtalamaPuanlar = async () => {
      const yeniPuanlar = {};
      console.log("fetchortalamapuanlar");

      for (let i = 0; i < resimler.length; i++) {
        try {
          const res = await axios.get(
            `https://api.yunuskarasen.com/api/puanlar/ortalama/${i}`
          );
          yeniPuanlar[i] = res.data.ortalama || "Henüz yok";
          console.log("yenipuanlar[i]: ", yeniPuanlar[i]);
        } catch (err) {
          yeniPuanlar[i] = "Hata";
        }
      }

      setOrtalamaPuanlar(yeniPuanlar);
      console.log("yenipuanlar: ", yeniPuanlar);
      console.log("ortalamapuanlar: ", ortalamaPuanlar);
    };

    fetchOrtalamaPuanlar();
  }, []);

  useEffect(() => {
    console.log("Güncellenmiş ortalamaPuanlar:", ortalamaPuanlar);
  }, [ortalamaPuanlar]);

  const handleRate = async (index, newRating) => {
    setRatings((prev) => ({
      ...prev,
      [index]: newRating,
    }));
    console.log(`Resim ${index} için oy verildi:`, newRating);

    // Backend çağrısını burada yapabilirsin
    try {
      if (!kullanici) {
        alert("Lütfen giriş yapın.");
        return;
      }
      console.log("aaa", {
        kullanici_id: kullanici.userName,
        resim_id: index,
        puan: newRating,
      });
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
        [index]: res.data.ortalama || "Henüz yok",
      }));
      console.log(
        `Puan başarıyla gönderildi. Resim ${index}, Puan: ${newRating}`
      );
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
              <div className="card-body text-center ">
                <h5 className="card-title">{resim.baslik}</h5>
                <StarRating
                  initialRating={parseFloat(ortalamaPuanlar[index]) || 0}
                  onRate={(newRating) => handleRate(index, newRating)}
                />
                {ratings[index] && (
                  <p className="mt-1 text-muted" style={{ fontSize: "0.9rem" }}>
                    Senin puanın: <strong>{ratings[index]}</strong>
                  </p>
                )}
                <p className="mt-2" style={{ color: "black" }}>
                  Ortalama Puan:{" "}
                  <strong>
                    {ortalamaPuanlar[index] !== undefined
                      ? ortalamaPuanlar[index]
                      : "Yükleniyor..."}
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
