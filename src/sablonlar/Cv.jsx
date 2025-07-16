import React, { useState } from "react";

function Cv() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handlePdfOpen = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.open("/output.pdf", "_blank");
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="col-12 col-md-6">
      <div style={{ display: "inline-block" }}>
        <h3
          className="w3-text-light-grey pe-0"
          style={{ marginBottom: 0, padding: "16px 16px 0px 0" }}
        >
          CV
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
      <div className="mt-3">
        <button className="btn btn-primary me-3" onClick={handlePdfOpen}>
          Görüntüle
        </button>
        <a href="/output.pdf" download>
          <button className="btn btn-primary">İndir</button>
        </a>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">CV Görüntüle</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Burada CV içeriğin olabilir, PDF veya HTML */}
                <iframe
                  className="modal-pdf"
                  src="/output.pdf"
                  title="CV PDF"
                ></iframe>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cv;
