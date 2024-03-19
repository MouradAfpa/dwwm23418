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
  };

  
  const ajoutFavo = (film) => {
    let favo = JSON.parse(localStorage.getItem("Favori")) || [];
    const isFavo = favo.some((favor) => favor.id === film.id);

    if (!isFavo) {
        favo.push({id: film.id, title: film.title, image: film.poster_path, date_sortie: film.release_date, resume: film.overview})
      localStorage.setItem("Favori", JSON.stringify(favo));
    } else {
        favo = favo.filter((favor) => favor.id !== film.id);
        localStorage.setItem("Favori", JSON.stringify(favo));
    }
  };

  return (
    <div
      className="d-flex  bg-primary-subtle p-5 gap-5 mt-4 ms-5 me-5 mb-4"
      style={{ height: "48.4rem" }}
    >
      <div>
        <button
          onClick={handleReturn}
          className="p-2 px-3 border-1 rounded-circle bg-primary-subtle"
        >
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
            <hr />
            <hr />
            <button onClick={ajoutFavo}>Ajoutez au Favoris</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
