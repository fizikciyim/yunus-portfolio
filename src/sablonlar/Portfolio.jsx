import Modal from "./Modal";
function Proje({ baslik, konu, diller, github, link, govde }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <h3>{baslik}</h3>
      <p>{konu}</p>
      <div style={{ marginBottom: "12px" }}>
        {diller.map((dil, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              backgroundColor: "#333",
              padding: "4px 8px",
              borderRadius: "4px",
              marginRight: "6px",
              fontSize: "12px",
            }}
          >
            {dil}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div>
          {github &&
            github.map((link, index) => (
              <a
                className="{index === 1 ? ms-2: me-3 }"
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#4ea1f7",
                  textDecoration: "none",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                <i
                  className="fa fa-github {index === 1 ? ms-2: me-1 } "
                  style={{ marginRight: 10 }}
                ></i>
                GitHub
              </a>
            ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FF0000",
                textDecoration: "none",
                fontWeight: "600",
                marginLeft: 15,
              }}
            >
              {link.includes("youtube.com") || link.includes("youtu.be") ? (
                <>
                  <i
                    className="fa fa-youtube-play"
                    aria-hidden="true"
                    style={{ marginRight: 10 }}
                  ></i>
                  Youtube
                </>
              ) : (
                <>
                  {" "}
                  <i
                    className="fa fa-external-link"
                    aria-hidden="true"
                    style={{ marginRight: 10 }}
                  ></i>
                  Link
                </>
              )}
            </a>
          )}
        </div>
        <Modal baslik={baslik} govde={govde} />
      </div>
    </div>
  );
}

function Portfolio() {
  const metin2balik = {
    baslik: "Metin2 Eski Tip Balık Botu",
    konu: "Metin2 oyununda birden fazla hesap için aynı anda balık tutulmasını sağlayan bot.",
    diller: ["Go", "Python"],
    github: ["https://github.com/fizikciyim/metin2-balik-botu"],
    link: "https://www.youtube.com/watch?v=GEApYe-mTus",
    govde:
      "Birden fazla hesap için çalışan Metin2 eski tip balık botu Metin2TR’de 2019 yılına kadar geçerli olan ve günümüzde birçok PvP sunucusunda halakullanılan klasik balık tutma sistemi için geliştirilmiş bir bottur.",
  };

  const metin2TRbalik = {
    baslik: "Metin2 TR Güncel Balık Botu",
    konu: "Metin2 TR'de birden fazla hesap için aynı anda balık tutulmasını sağlayan bot.",
    diller: ["Go"],
    github: ["https://github.com/fizikciyim/metin2-balik-botu"],
    link: "https://www.youtube.com/watch?v=_zrbYQUBouA",
    govde: "irilmiş bir bottur.",
  };

  const projePortfolyo = {
    baslik: "Kişisel Portföy Sitesi",
    konu: "Kendi hakkımda, projelerim ve iletişim bilgilerimi içeren responsive ve modern tasarıma sahip web sitesi.",
    diller: ["ReactJS", "CSS", "JavaScript"],
    github: [
      "https://github.com/fizikciyim/yunus-portfolio",
      "https://github.com/fizikciyim/yunus-portfolio-backend",
    ],
    link: "https://www.yunuskarasen.com",
    govde: `Bu proje, ReactJS kullanılarak geliştirilen kişisel portföy sitemdir.
     Web sitesi tamamen responsive tasarıma sahiptir ve mobil uyumludur.
      Ana sayfada kısa bir tanıtım, projelerim sekmesinde GitHub üzerinden 
      bağlantılı olarak yaptığım çalışmalara erişim sağlanmakta, iletişim kısmında
       ise benimle e-posta üzerinden kolayca iletişime geçilebilmektedir.
        Tasarımda sade ve modern bir stil tercih edilmiştir.`,
  };

  const ucgenArbitraj = {
    baslik: "Kripto Para Üçgen Arbitraj Botu",
    konu: "BtcTurk borsasında üçgen arbitraj botu botu botu botu botu botu botu",
    diller: ["Go"],
    github: ["https://github.com/yunus/ucgen-arbitraj"],
    link: null,
    govde: "BtcTurk borsasında üçgen arbitraj botu.",
  };

  return (
    <>
      {/* Portfolio Section */}
      <div className="w3-padding-64 w3-content" id="photos">
        <h2 className="w3-text-light-grey">Projelerim</h2>
        <hr style={{ width: 200 }} className="w3-opacity" />
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Proje {...projePortfolyo} />
          <Proje {...metin2balik} />
          <Proje {...metin2TRbalik} />
          <Proje {...ucgenArbitraj} />
        </div>
      </div>
    </>
  );
}
export default Portfolio;
