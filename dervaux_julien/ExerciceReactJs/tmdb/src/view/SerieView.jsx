import CardSerie from "../components/CardSerie";

const SerieView = ({ handleSearch, popularSeries }) => { // Supprimez setPopularSeries de la liste des props
  return (
    <div>
      <h1>Serie</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {popularSeries &&
          popularSeries.map((serie) => (
            <CardSerie
              key={serie.id}
              serie={serie}
              handleSerieSearch={handleSearch} // Utilisez handleSearch au lieu de handleSerieSearch
            />
          ))}
      </div>
    </div>
  );
};

export default SerieView;
