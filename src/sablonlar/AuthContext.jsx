import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [kullanici, setKullanici] = useState(null);

  useEffect(() => {
    const kayitliKullanici = localStorage.getItem("kullanici");
    if (kayitliKullanici) {
      setKullanici(JSON.parse(kayitliKullanici));
    }
  }, []);

  const login = (kullaniciBilgisi) => {
    localStorage.setItem("kullanici", JSON.stringify(kullaniciBilgisi));
    setKullanici(kullaniciBilgisi);
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
