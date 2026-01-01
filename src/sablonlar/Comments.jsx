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
          <strong>Yorumlar şu anda görüntülenemiyor</strong>
          <br />
          <small className="text-muted">
            Yorum servisi altyapı çalışmaları nedeniyle geçici olarak
            kapatılmıştır. Aktif edildiğinde burada listelenecektir.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Comments;
