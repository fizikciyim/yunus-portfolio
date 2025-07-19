import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <div className="pt-5 w3-content w3-text-grey w-100" id="contact">
        <h2 className="w3-text-light-grey">Bana Ulaşın</h2>
        <hr style={{ width: 200 }} className="w3-opacity" />
        <div className="w3-section">
          <p>
            <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />
            İstanbul, Türkiye
          </p>
          <p>
            <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />
            +90 539 364 28 74
          </p>
          <p>
            <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
            yunus.karasenn@gmail.com
          </p>
          <p>
            <a
              href="https://github.com/fizikciyim"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#1E90FF" }}
            >
              <i className="w3-text-white fab fa-github fa-fw w3-xxlarge w3-margin-right"></i>
              https://github.com/fizikciyim
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/yunuskarasen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#1E90FF" }}
            >
              <i className="w3-text-white fab fa-linkedin fa-fw w3-xxlarge w3-margin-right"></i>
              https://www.linkedin.com/in/yunuskarasen
            </a>
          </p>
          <p>
            <a
              href="https://t.me/fizikciyim34"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#1E90FF" }}
            >
              <i className="w3-text-white fa fa-telegram fa-fw w3-xxlarge w3-margin-right"></i>
              @fizikciyim34
            </a>
          </p>
        </div>
        <br />
        <p>Hemen mesaj göndermek ister misin?</p>
        <ContactForm />
        {/* End Contact Section */}
      </div>
    </>
  );
}

export default Contact;
