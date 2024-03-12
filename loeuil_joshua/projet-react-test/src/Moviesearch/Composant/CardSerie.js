import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { fetchSeries, rechercheSeries } from "../Redux/actions";

function CardSerie() {
  const series = useSelector((state) => state.Reducer1.result);
  const page = useSelector((state) => state.Reducer1.page);
  const recherche = useSelector((state) => state.Reducer1.query);
  const dispatch = useDispatch();
  console.log(series);

  const [show, setShow] = useState(null);

  const handleShow = (serie) => {
    setShow(serie);
  };

  const handleClose = () => {
    setShow(null);
  };

  useEffect(() => {
    if (recherche) {
      dispatch(rechercheSeries(recherche, page));
    } else {
      dispatch(fetchSeries(page));
    }
  }, [recherche, page, dispatch]);

  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 bg-black">
      {series.map((serie) => (
        <Card
          key={serie.id}
          className="bg-dark border-4 rounded-5 text-light "
          style={{ width: "20rem", height: "35rem", borderColor: "chartreuse" }}
        >
          <Card.Body onClick={() => handleShow(serie)} className=" text-center">
            <h4>{serie.name}</h4>
            <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
            />
          </Card.Body>
          <Modal show={show === serie} onHide={handleClose} className="">
            <Modal.Body className="bg-dark text-light text-center row-1cols-2">
              <h2>{serie.name}</h2>
              <img
                className=" card-img-top"
                style={{ width: "14rem" }}
                src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                alt={serie.name}
              />
              <h3>Date de sortie: {serie.first_air_date}</h3>
              <br></br>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light text-center">
              <p>{serie.overview}</p>
            </Modal.Footer>
          </Modal>
        </Card>
      ))}
    </div>
    )
  }
  export default CardSerie;
