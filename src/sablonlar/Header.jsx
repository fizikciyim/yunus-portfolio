function Header() {
  return (
    <>
      {/* Header/Home */}
      <header
        className="w3-container w3-padding-32 w3-center w3-black"
        id="home"
      >
        <h1 className="w3-jumbo">Yunus Karaşen</h1>
        <p>Yazılımcı</p>
        <img
          src="yunus.png"
          alt="boy"
          className="w3-image"
          width={992}
          height={1108}
        />
      </header>
    </>
  );
}
export default Header;
