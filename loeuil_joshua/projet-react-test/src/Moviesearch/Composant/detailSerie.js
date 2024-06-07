import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailFilm() {
  const [serie, setSerie] = useState([]);

  const navigate = useNavigate();
  const api_key = process.env.REACT_APP_API_KEY;
  const { id } = useParams();

  useEffect(() => {
    const series = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`
      );
      setSerie(res.data);
    };
    series();
  }, []);

  function handleReturn() {
    navigate(-1);
  };

  
  const ajoutFavo = (serie) => {
    let favo = JSON.parse(localStorage.getItem("FavSerie")) || [];
    const isFavo = favo.some((favor) => favor.id === serie.id);

    if (!isFavo) {
        favo.push({id: serie.id, title: serie.name, image: serie.poster_path, date_sortie: serie.first_air_date, resume: serie.overview})
      localStorage.setItem("FavSerie", JSON.stringify(favo));
    } else {
        favo = favo.filter((favor) => favor.id !== serie.id);
        localStorage.setItem("FavSerie", JSON.stringify(favo));
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
          className=" pb-1 border-1 rounded-circle bg-primary-subtle"
        >
          ←
        </button>
      </div>
      <div>
        <div
          id={serie.id}
          className="bg-dark text-light d-flex justify-content-between "
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
            alt=""
            style={{ height: "40rem", width: "30rem" }}
          />
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 border w-75">
            <h2 className="text-center border-bottom">{serie.title}</h2>
            <p>Date de Sortie: {serie.first_air_date}</p>
            <hr />
            <p className="w-75 p-2 text-center border">{serie.overview}</p>
            <hr />
            <hr />
            <button onClick={() => ajoutFavo(serie)}>Ajoutez au Favoris</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
