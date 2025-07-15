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
        <p style={{ marginTop: 8 }}>
          Merhaba, ben Yunus. Frontend geliştirme ile ilgileniyorum ve özellikle
          ReactJS üzerinde çalışıyorum. Aynı zamanda Python ve Go dillerini
          kullanarak backend tarafında da kendimi geliştiriyorum. Kullanıcı
          dostu, performans odaklı ve temiz kod yazmayı önemsiyorum. Yeni
          teknolojiler öğrenmeye çok istekliyim ve sürekli kendimi geliştirmeye
          çalışıyorum. Mimar Sinan Güzel Sanatlar Üniversitesi Fizik Bölümü’nden
          2025 yılında mezun oldum.
          <p>
            Şu anda öncelikli hedefim frontend alanında uzmanlaşmak, ancak
            backend tarafında da öğrenmeye devam ederek tam donanımlı bir
            fullstack geliştirici olmak istiyorum. İş birliğine açık,
            motivasyonu yüksek bir geliştiriciyim.
          </p>
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
          <div className="w3-dark-grey" style={getBarStyle(95)}>
            %95
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i className="devicon-go-plain me-1 colored"></i>Go
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(85)}>
            %85
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-html5-plain me-1 colored"></i>
          Html
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(99)}>
            %99
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-css3-plain me-1 colored"></i>Css
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(78)}>
            %78
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-javascript-plain  me-1 colored"></i>
          JavaScript
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(50)}>
            %50
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-react-original me-1 colored"></i>
          React
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(50)}>
            %50
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-bootstrap-plain colored me-1"></i>
          Bootstrap
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(80)}>
            %80
          </div>
        </div>
        <p className="w3-wide mb-0">
          <i class="devicon-mysql-plain me-1"></i>
          MySQL
        </p>
        <div className="w3-white mb-3">
          <div className="w3-dark-grey" style={getBarStyle(50)}>
            %50
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
          <div className="w3-dark-grey" style={getBarStyle(99)}>
            %99
          </div>
        </div>
        <br />
        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span>
            <br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span>
            <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span>
            <br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span>
            <br />
            Meetings
          </div>
        </div>
        <button
          className="w3-button w3-light-grey w3-padding-large w3-section"
          onclick="downloadResume()"
        >
          <i className="fa fa-download" /> Download Resume
        </button>
        {/* Grid for pricing tables */}
        <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off ">
              <li className="w3-dark-grey w3-xlarge w3-padding-32"> Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          {/* End Grid/Pricing tables */}
        </div>
        {/* Testimonials */}
        <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>
        <img
          src="https://www.w3schools.com/w3images/bandmember.jpg"
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right"
          style={{ width: 80 }}
        />
        <p>
          <span className="w3-large w3-margin-right">Chris Fox.</span> CEO at
          Mighty Schools.
        </p>
        <p>John Doe saved us from a web disaster.</p>
        <br />
        <img
          src="https://www.w3schools.com/w3images/avatar_g2.jpg"
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right"
          style={{ width: 80 }}
        />
        <p>
          <span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at
          Company.
        </p>
        <p>No one is better than John Doe.</p>
        {/* End About Section */}
      </div>
    </>
  );
}
export default About;
