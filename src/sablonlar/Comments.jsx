import React from "react";
import YorumEkle from "./YorumEkle";
import { useAuth } from "./AuthContext";

function Comments() {
  const { kullanici } = useAuth();

  return (
    <div className="w-100 mt-5 mt-md-0">
      {/* Yorum ekleme alanı (kilitli) */}
      <YorumEkle />

      <div className="container mt-4">
        {/* Bilgilendirme */}
        <div
          className="alert alert-info text-center"
          role="alert"
          style={{ borderRadius: "10px" }}
        >
          💬 <strong>Yorumlar şu anda görüntülenemiyor</strong>
          <br />
          <small className="text-muted">
            Yorum servisi altyapı çalışmaları nedeniyle geçici olarak
            kapatılmıştır.
          </small>
        </div>

        {/* Placeholder – UI bozulmasın diye */}
        <div
          style={{
            border: "1px dashed #ccc",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            color: "#6c757d",
            textAlign: "center",
          }}
        >
          <p className="mb-1 fw-bold">Henüz yorum yok</p>
          <small>Yorum sistemi aktif edildiğinde burada listelenecektir.</small>
        </div>
      </div>
    </div>
  );
}

export default Comments;
