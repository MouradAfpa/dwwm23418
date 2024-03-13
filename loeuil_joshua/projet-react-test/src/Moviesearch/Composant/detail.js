import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const [film, setFilm] = useState([]);

  const navigate = useNavigate();
  const api_key = process.env.REACT_APP_API_KEY;
  const { id } = useParams();

  useEffect(() => {
    const films = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
      );
      setFilm(res.data);
    };
    films();
  }, []);

  function handleReturn() {
    navigate(-1);
  }

  
  return (
    <div className="d-flex  bg-primary-subtle p-5 gap-5 mt-4 ms-5 me-5 mb-4" style={{height: '48.4rem'}}>
      <div>
        <button onClick={handleReturn} className="p-3 border-1 rounded-circle bg-primary-subtle">
          ←
        </button>
      </div>
      <div>
       
          <div
            id={film.id}
            className="bg-dark text-light d-flex justify-content-between "
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
              alt=""
              style={{ height: "40rem", width: "30rem" }}
            />
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 border w-75">
              <h2 className="text-center border-bottom">{film.title}</h2>
              <p>Date de Sortie: {film.release_date}</p>
              <hr />
              <p className="w-75  border">{film.overview}</p>
              

            </div>
          </div>
      </div>
    </div>
  );
}

export default Detail;
