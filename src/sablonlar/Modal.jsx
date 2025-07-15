function Modal({ baslik, govde }) {
  const modalId = `modal-${baslik.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <div>
        <button
          className="btn btn-outline-primary pb-0 pt-0"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
        >
          Detaylar
        </button>
        <div className="modal fade" id={modalId}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{baslik}</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">{govde}</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
