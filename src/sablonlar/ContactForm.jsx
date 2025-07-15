import { useState, useRef } from "react";
import { Toast } from "bootstrap";

const stil = "w3-input w3-padding-16 mb-2";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://api.yunuskarasen.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      showToast("Mesajınız başarıyla ulaşmıştır.");
      setIsSucccess(true);
    } catch (error) {
      showToast("Bir hata oluştu!");
      setIsSucccess(false); // Hatalıysa false — eklemen gereken yer burası
    }
  };

  const [isSuccess, setIsSucccess] = useState(false);
  const toastRef = useRef(null);
  const [toastMessage, setToastMessage] = useState("");
  const showToast = (mesaj) => {
    setToastMessage(mesaj);
    const toast = new Toast(toastRef.current);
    toast.show();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={stil}
        type="text"
        placeholder="Ad"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        onInvalid={(e) =>
          e.target.setCustomValidity("Bu alan boş bırakılamaz!")
        }
        onInput={(e) => e.target.setCustomValidity("")}
      />
      <input
        className={stil}
        type="email"
        placeholder="Mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className={stil}
        type="text"
        placeholder="Konu"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <input
        className={stil}
        type="text"
        placeholder="Mesajınız"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <div className="d-flex">
        <button
          className="w3-button w3-light-grey w3-padding-large"
          type="submit"
        >
          <i className="fa fa-paper-plane" /> MESAJ GÖNDER
        </button>
        <div
          className={` ms-3 toast align-items-center text-white border-0 w-auto ${
            isSuccess ? "bg-success" : "bg-danger"
          }`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastRef}
        >
          <div className="d-flex justify-content-center h-100 align-items-center">
            <div className="toast-body p-2">{toastMessage}</div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
