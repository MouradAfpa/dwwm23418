import CardSerie from "../components/CardSerie";

const SerieView = ({ handleSearch, popularSeries, favorite, setFavorite, handleFavorite }) => {
  return (
    <div>
      <h1>Serie</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {popularSeries &&
          popularSeries.map((serie) => (
            <CardSerie
              key={serie.id}
              serie={serie}
              handleSearch={handleSearch} // Utilisez handleSearch au lieu de handleSerieSearch
              handleFavorite={handleFavorite}
              isFavorite={favorite.some(favSerie => favSerie.id === serie.id)} // Vérifiez la présence de la série dans les favoris
            />
          ))}
      </div>
    </div>
  );
};

export default SerieView;
