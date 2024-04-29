import CardSerie from "../components/CardSerie";

const SerieView = ({ handleSearch, popularSeries }) => {
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
            />
          ))}
      </div>
    </div>
  );
};

export default SerieView;
