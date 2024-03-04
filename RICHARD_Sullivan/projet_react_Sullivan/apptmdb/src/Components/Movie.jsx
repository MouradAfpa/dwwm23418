import React from 'react';
//
export default function Information({movie}) {
    return (
      <div className="m-5 w-25">
        <div className="card d-flex w-100">
          <img className="card-img-top w-100"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="card-body">
            <h5 className="card-title">Titre: {movie.title}</h5>
            <p className="card-text"><b>Résumé: </b>{movie.overview}</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    );
  }