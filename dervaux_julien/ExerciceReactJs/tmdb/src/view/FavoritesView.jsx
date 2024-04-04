// FavoritesView.js
import React from "react";
import CardMovie from "../components/CardMovie";

const FavoritesView = ({ favorite, handleFavorite }) => {
  return (
    <div>
      <h1>My Favorites</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {favorite.map((movie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
            handleFavorite={handleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesView;
