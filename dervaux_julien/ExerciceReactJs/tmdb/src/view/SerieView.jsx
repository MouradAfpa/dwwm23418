import CardSerie from "../components/CardSerie";
import PaginationComponent from "../components/PaginationComponent";

const SerieView = ({ handleSearch, popularSeries, page, setPage }) => {
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <PaginationComponent
          serie={popularSeries}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className="d-flex justify-content-center ">
        <h1>Serie</h1>
      </div>
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
