import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import StarRating from "./StarRating";

function Art() {
  const { kullanici } = useAuth();
  const [modalResim, setModalResim] = useState(null);

  // 🔹 DEMO ortalama puanlar (backend yokken)
  const demoPuanlar = {
    0: { ortalama: 4.3, toplam: 18 },
    1: { ortalama: 3.9, toplam: 11 },
    2: { ortalama: 4.7, toplam: 24 },
    3: { ortalama: 4.1, toplam: 9 },
    4: { ortalama: 4.5, toplam: 15 },
    5: { ortalama: 3.8, toplam: 7 },
    6: { ortalama: 4.9, toplam: 31 },
    7: { ortalama: 4.0, toplam: 12 },
    8: { ortalama: 4.6, toplam: 21 },
    9: { ortalama: 3.7, toplam: 6 },
    10: { ortalama: 4.2, toplam: 14 },
    11: { ortalama: 4.4, toplam: 17 },
    12: { ortalama: 4.8, toplam: 28 },
  };

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
        becerilerimin yanında kişisel ifade biçimimdir.
      </p>

      <div
        className="masonry-wrapper mb-3"
        style={{ columnCount: 4, columnGap: "1.5rem" }}
      >
        {resimler.map((resim, index) => (
          <div
            key={index}
            style={{ breakInside: "avoid", marginBottom: "1rem" }}
          >
            <div className="card shadow-sm">
              <img
                src={`/sanat/${resim.dosya}`}
                className="card-img-top"
                alt={resim.baslik}
                style={{ cursor: "pointer" }}
                onClick={() => setModalResim(resim)}
              />

              <div
                className="card-body text-center p-2"
                style={{ backgroundColor: "gray" }}
              >
                <h5 className="fw-bold">{resim.baslik}</h5>

                <div className="d-flex justify-content-center align-items-center">
                  <StarRating
                    initialRating={demoPuanlar[index]?.ortalama || 0}
                  />
                  <span className="ms-2 fw-bold text-muted">
                    ({demoPuanlar[index]?.toplam ?? 0})
                  </span>
                </div>

                <p className="m-0 mt-1" style={{ fontSize: "0.8rem" }}>
                  {kullanici
                    ? "Puan verebilirsiniz (demo)"
                    : "Puan vermek için giriş yapmalısınız"}
                </p>

                <p className="mt-2 mb-0" style={{ color: "black" }}>
                  Ortalama Puan:{" "}
                  <strong>{demoPuanlar[index]?.ortalama ?? "-"}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {modalResim && (
        <div
          onClick={() => setModalResim(null)}
          style={{
            position: "fixed",
            inset: 0,
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
