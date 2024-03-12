


function BoutonDefilment(){
    return(
        <div
        className="d-flex flex-column gap-5 position-fixed m-lg-2 "
        style={{ zIndex: 100, top: "48%", width: "2%" }}
      >
        <span>
          <button
            type="button"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-dark text-light border-primary rounded-circle"
          >
            ↑
          </button>
        </span>
        <span>
          <button
            type="button"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            className="bg-dark text-light border-primary rounded-circle"
          >
            ↓
          </button>
        </span>
      </div>
    )
}

export default BoutonDefilment;