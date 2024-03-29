import CardSerie from "../components/CardSerie";

const SerieView = ({ handleSearch, popularSeries, favorite, handleFavorite }) => {
  return (
    <div>
      <h1>Serie</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {popularSeries &&
          popularSeries.map((series) => (
            <CardSerie
              key={series.id}
              serie={series}
              handleSearch={handleSearch} 
              handleFavorite={handleFavorite}
              isFavorite={favorite.some(favSerie => favSerie.id === series.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default SerieView;
