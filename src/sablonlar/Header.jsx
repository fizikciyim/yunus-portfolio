function Header() {
  return (
    <>
      {/* Header/Home */}
      <div className="w3-container w3-padding-32 w3-center w3-black" id="home">
        <h1 className="w3-jumbo">Yunus Karaşen</h1>
        <p>Yazılımcı</p>
        <img
          src="foto.jpeg"
          alt="boy"
          style={{
            width: 500,
            height: 500,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </>
  );
}
export default Header;
