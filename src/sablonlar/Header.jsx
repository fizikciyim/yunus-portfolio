function Header() {
  return (
    <>
      {/* Header/Home */}
      <div
        className="w3-container w3-padding-32 w3-center w3-black divdiv"
        id="home"
      >
        <h1 className="w3-jumbo">Yunus Karaşen</h1>
        <p>Yazılımcı</p>
        <img
          src="/foto.jpeg"
          alt="boy"
          style={{
            width: "100%", // genişlik kapsayıcının tamamı kadar
            maxWidth: 500, // ama maksimum 500 piksel olabilir
            height: 500, // yüksekliği otomatik ayarlanır
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </>
  );
}
export default Header;
