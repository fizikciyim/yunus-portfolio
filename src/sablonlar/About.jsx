import Cv from "./Cv";

const getBarStyle = (percentage) => ({
  height: 28,
  width: `${percentage}%`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
});

function About() {
  return (
    <>
      {/* About Section */}
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-64"
        id="about"
      >
        <div style={{ display: "inline-block" }}>
          <h2
            className="w3-text-light-grey pe-0"
            style={{
              marginBottom: 0,
              padding: "16px 16px 0px 0",
            }}
          >
            Yunus Karaşen
          </h2>
          <hr
            style={{
              margin: 0,
              marginTop: 0,
              height: 2,
              border: "none",
              backgroundColor: "#ccc",
            }}
            className="w3-opacity"
          />
        </div>
        <p style={{ marginTop: 8 }} className="mb-0">
          Merhaba, ben Yunus. Frontend geliştirme alanına ilgi duyuyorum ve
          özellikle ReactJS üzerine yoğunlaşıyorum. Bunun yanı sıra, Python ve
          Go dillerini kullanarak backend tarafında da kendimi geliştiriyorum.
          Kullanıcı dostu, performans odaklı ve temiz kod yazımına büyük önem
          veriyorum.
        </p>
        <p className="mb-0">
          Mimar Sinan Güzel Sanatlar Üniversitesi Fizik Bölümü’nden 2025 yılında
          mezun oldum. Yeni teknolojileri öğrenmeye açık, sürekli gelişim
          hedefleyen ve motivasyonu yüksek bir geliştirici olarak yolculuğuma
          devam ediyorum.
        </p>
        <p>
          Kısa vadeli hedefim, frontend alanında derinleşerek uzmanlaşmak. Ancak
          aynı zamanda backend bilgimi de artırarak uzun vadede tam donanımlı
          bir fullstack geliştirici olmayı hedefliyorum. Takım çalışmasına
          yatkın ve iş birliğine açık biri olarak, farklı projelerde değer
          yaratmayı önemsiyorum.
        </p>
        <div className="row">
          <div className="col-12 col-md-6">
            <div style={{ display: "inline-block" }}>
              <h3
                className="w3-text-light-grey pe-0"
                style={{ marginBottom: 0, padding: "16px 16px 0px 0" }}
              >
                Eğitim
              </h3>
              <hr
                style={{
                  margin: 0,
                  marginTop: 0,
                  height: 2,
                  border: "none",
                  backgroundColor: "#ccc",
                }}
                className="w3-opacity"
              />
            </div>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              Mimar Sinan Güzel Sanatlar Üniversitesi
            </p>
            <p style={{ marginTop: 0, marginBottom: 0 }}>Fizik Bölümü</p>
            <p style={{ marginTop: 0 }}>2025 Mezunu</p>
          </div>
          <Cv />
        </div>

        <div className="d-inline-block mb-3">
          <h3
            className="w3-text-light-grey pe-0"
            style={{ marginBottom: 0, padding: "16px 16px 0px 0" }}
          >
            Yeteneklerim
          </h3>
          <hr
            style={{
              margin: 0,
              marginTop: 0,
              height: 2,
              border: "none",
              backgroundColor: "#ccc",
            }}
            className="w3-opacity"
          />
        </div>

        <p className="w3-wide mb-0">
          <i className="devicon-python-plain me-1 colored"></i>Python
        </p>
        <div className="w3-white mb-3" style={{ position: "relative" }}>
          <div className="w3-dark-grey" style={getBarStyle(90)}>
            %90
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i className="devicon-go-plain me-1 colored"></i>Go
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(70)}>
            %70
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-html5-plain me-1 colored"></i>
          Html
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(80)}>
            %80
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-css3-plain me-1 colored"></i>Css
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(80)}>
            %80
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-javascript-plain  me-1 colored"></i>
          JavaScript
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(75)}>
            %75
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-react-original me-1 colored"></i>
          React
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(75)}>
            %75
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i className="devicon-nodejs-plain colored me-1"></i>
          Node.js
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(60)}>
            %60
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i className="fa fa-server me-1"></i>
          Express.js
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(60)}>
            %60
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-bootstrap-plain colored me-1"></i>
          Bootstrap
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(90)}>
            %90
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-mysql-plain me-1"></i>
          MySQL
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(90)}>
            %80
          </div>
        </div>

        <p className="w3-wide mb-0">
          <i className="fas fa-flask" style={{ color: "#4caf50" }}></i>
          <i className="fas fa-lightbulb" style={{ color: "#ffeb3b" }}></i>
          <i className="fas fa-rocket" style={{ color: "#f44336" }}></i>
          <i className="fas fa-atom me-1" style={{ color: "#3f51b5" }}></i>
          Fizik
        </p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={getBarStyle(100)}>
            %100
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
export default About;
