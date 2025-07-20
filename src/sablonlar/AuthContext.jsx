import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
  const [kullanici, setKullanici] = useState(null);

  // ✅ 2. ADIM: Uygulama açıldığında oturum süresi kontrolü
  useEffect(() => {
    const kayitliKullanici = localStorage.getItem("kullanici");

    if (kayitliKullanici) {
      const veriler = JSON.parse(kayitliKullanici);

      // Süre kontrolü:
      if (veriler.oturumSonu && Date.now() > veriler.oturumSonu) {
        localStorage.removeItem("kullanici");
        setKullanici(null);
      } else {
        setKullanici(veriler);
      }
    }
  }, []);

  // ✅ 3. ADIM: Giriş yaptıktan sonra süre bitince otomatik çıkış
  useEffect(() => {
    if (kullanici?.oturumSonu) {
      const kalanSure = kullanici.oturumSonu - Date.now();

      if (kalanSure > 0) {
        const zamanlayici = setTimeout(() => {
          logout();
        }, kalanSure);

        return () => clearTimeout(zamanlayici); // Temizlik
      } else {
        logout(); // Süre zaten geçmişse hemen çıkış yap
      }
    }
  }, [kullanici]);

  const login = (token) => {
    const decoded = jwtDecode(token); // { id, userName } gibi bilgileri çıkar
    console.log("tokennnn: ", token);

    //! 1000 --> 1 saniye, 1000*60 --> 1 dakika yapar
    const oturumSuresi = 10 * 60 * 1000; // 30 dakika
    const oturumSonu = Date.now() + oturumSuresi;

    const veriler = {
      id: decoded.id,
      userName: decoded.userName,
      token,
      oturumSonu,
    };

    localStorage.setItem("kullanici", JSON.stringify(veriler));
    setKullanici(veriler);
  };

  const logout = () => {
    localStorage.removeItem("kullanici");
    setKullanici(null);
  };

  return (
    <AuthContext.Provider value={{ kullanici, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
