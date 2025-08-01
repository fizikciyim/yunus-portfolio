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
            className="my-1"
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
        <div className="d-flex ">
          {github &&
            github.map((link, index) => (
              <div className="d-flex">
                <a
                  className={`${index === 1 ? "ms-2" : "me-3"} text-nowrap`}
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
                    className="fa fa-github {index === 1 ? ms-2: me-1 } mt-1"
                    style={{ marginRight: 10, color: "#4ea1f7" }}
                  ></i>
                  GitHub
                </a>
              </div>
            ))}
          {link && (
            <div className="d-flex ms-4 me-2">
              <a
                className="text-nowrap"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FF0000",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                {link.includes("youtube.com") || link.includes("youtu.be") ? (
                  <>
                    <i
                      className="fa fa-youtube-play me-1"
                      aria-hidden="true"
                      style={{ marginRight: 10 }}
                    ></i>
                    Youtube
                  </>
                ) : (
                  <>
                    {" "}
                    <i
                      className="fa fa-external-link me-1"
                      aria-hidden="true"
                      style={{ marginRight: 10 }}
                    ></i>
                    Link
                  </>
                )}
              </a>
            </div>
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
    govde: `
  <p style="color: black;">
      Birden fazla hesap için çalışan <strong>Metin2</strong> eski tip balık botu, Metin2TR’de 2019 yılına kadar geçerli olan
      ve günümüzde birçok PvP sunucusunda hala kullanılan klasik balık tutma sistemi için geliştirilmiştir.
    </p>

    <h3>Kullanım</h3>
    <p style="color: black;">Botu kullanmak için aşağıdaki adımları takip edin:</p>
    <ol>
      <li>Arayüzü çalıştırın.</li>
      <li>Kaç client balık tutacağını seçin.</li>
      <li>Envanterin ilk slotunun koordinatlarını sağ üstten takip ederek girin.</li>
      <li>Kamerayı karakterin kafasına en yukarıdan ve sonuna kadar yaklaştırın.</li>
      <li>Programı başlatın.</li>
    </ol>`,
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
    diller: ["ReactJS", "Bootstrap", "Node.js", "Express.js", "MySQL"],
    github: [
      "https://github.com/fizikciyim/yunus-portfolio",
      "https://github.com/fizikciyim/yunus-portfolio-backend",
    ],
    link: "https://www.yunuskarasen.com",
    govde: `
  <p style="color: black;">
      Merhaba! Bu proje, yazılım geliştirme alanındaki yetkinliklerimi
       ve projelerimi sergilemek amacıyla oluşturduğum kişisel
        portföy sitemdir. Full-stack geliştirme 
        yeteneklerimi göstermek için hem frontend hem backend 
        taraflarını sıfırdan oluşturdum.    </p>

    <h4>Özellikler</h3>
    <ul>
      <li>Mobil uyumlu tasarım</li>
      <li>Hakkımda bölümü</li>
      <li>Projelerim bölümü</li>
      <li>İletişim formu (API destekli)</li>
      <li>Kullanıcı kayıt ve giriş sistemi</li>
      <li>Yorumlar bölümü (Sadece giriş yapmış kullanıcılar yorum bırakabilir)</li>
      <li>Çizimlerimi puanlama bölümü</li>
    </ul>`,
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
      <div
        className="w3-padding-64 
        align-items-center w3-content d-flex flex-column
         "
        id="photos"
      >
        <h2 className="w3-text-light-grey d-inline">
          Projelerim
          <hr
            style={{
              margin: 0,
              marginTop: 0,
              height: 2,
              border: "none",
              backgroundColor: "#ccc",
            }}
            className="w3-opacity"
          />{" "}
        </h2>

        <div
          className="d-flex justify-content-center"
          style={{ gap: "20px", flexWrap: "wrap" }}
        >
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
