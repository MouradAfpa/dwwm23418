import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Produit(props) {
  return (
    <div
      className="card d-flex flex-column justify-content-between pt-4 m-3 ps-2"
      style={{ height: "350px", width : "300px"}}
    >
      <div>
        <h3>
          <b>{props.nom}</b>
        </h3>
      </div>
      <div>
        <h5>
          <b>{props.prix}</b>
        </h5>
      </div>
      <div>{props.description}</div>
      <div className="text-end pe-4">{props.stock}</div>
    </div>
  );
}

export default Produit;
