import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { fetchSeries, rechercheSeries } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

function CardSerie() {
  const series = useSelector((state) => state.Reducer1.results);
  const page = useSelector((state) => state.Reducer1.page);
  const recherche = useSelector((state) => state.Reducer1.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(() => {
    if (!recherche) {
      dispatch(fetchSeries(page));
    } else {
      dispatch(rechercheSeries(recherche, page));
    }
  }, [recherche, page, dispatch]);

  function handleClick(serie){
    navigate(`/Serie/${serie.id}`)
   }

  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 p-5 m-5 bg-primary-subtle">
      {series && series.map((serie) => (
        <Card
          key={serie.id}
          className="bg-dark-subtle border-4 border-black "
          style={{ width: "20rem", height: "38rem"}}
           
        >
          <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
            />
            <Card.Body className="text-center d-flex flex-column justify-content-between">
            <h4>{serie.name}</h4>
            <button onClick={() => handleClick(serie)} className="rounded-5 ps-3 pe-3 bg-white">Voir les details</button>
            
          </Card.Body>
          
        </Card>
      ))}
    </div>
    )
  }
  export default CardSerie;
