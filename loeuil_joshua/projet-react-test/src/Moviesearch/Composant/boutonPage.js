import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, resetPage } from "../Redux/actions";

function BoutonPage() {
  const Pages = useSelector((state) => state.Reducer1.page);
  const TotalPages = useSelector((state) => state.Reducer1.total_pages);
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    dispatch(prevPage());
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    dispatch(nextPage());
    window.scrollTo(0, 0);
    
  };

  const handleResetPage = ()=>{
    dispatch(resetPage());
    window.scrollTo(0, 0);
  }

  return (
    <div className="d-flex justify-content-around bg-black text-light p-4">
      <button
        type="button"
        onClick={handleResetPage}
        className="border-danger border-3"
        
        >
          Retour Page 1
        </button>
        <div>  
        
        <button
          type="button"
          onClick={handlePrevPage}
          className="border-danger border-3"
        >
          Precedent
        </button>
     
      </div>

      <div className="d-flex justify-content-center">
        <span className=" border-bottom">
          Page: {Pages} sur {TotalPages}
        </span>
      </div>

      <div>
        <button
          type="button"
          onClick={handleNextPage}
          className="border-danger border-3"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default BoutonPage;