


function BoutonDefilment(){
    return(
        <div
        className="d-flex flex-column gap-5 position-fixed m-lg-2 ps-1 "
        style={{ zIndex: 100, top: "48%", width: "3%" }}
      >
        <span>
          <button
            type="button"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-dark text-light border-primary rounded-circle pb-1 pt-1 ps-2 pe-2"
          >
          ↑
          </button>
        </span>
        <span>
          <button
            type="button"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            className="bg-dark text-light border-primary rounded-circle pb-1 pt-1 ps-2 pe-2"
          >
            ↓
          </button>
        </span>
      </div>
    )
}

export default BoutonDefilment;