import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Modal, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FAVORIE } from "../redux/action";

function ListPoke({ poke }) {
  const [show, setShow] = useState(false);

  const clicHide = () => setShow(false);
  const clicShow = () => setShow(!show);

  const dispatch = useDispatch();

  const handleFavo = () =>{
    dispatch({
      type: FAVORIE,
      payload: poke
    });
  }

  return (
    <div className="pt-5">
      <Card className=" border-4 rounded-5 bg-dark" style={{borderColor: 'chartreuse'}} >
        <Card.Header className="text-center bg-danger rounded-top-5">
          <div className="text-light">
            <h1>{poke.name}</h1>
          </div>
        </Card.Header>
        <Card.Body onClick={clicShow}>
          <img src={poke.image} alt="" />
        </Card.Body>
        <Card.Footer className=" d-flex justify-content-center bg-body-tertiary rounded-bottom-5">
        <button onClick={handleFavo} className=" bg-primary rounded-circle pt-2 pb-2 ps-1 pe-1">
          
              Favorie
            </button>
        </Card.Footer>

        <Modal show={show} onHide={clicHide} key={poke.id}>
          <Modal.Header className="d-flex justify-content-center bg-danger text-light ">
            <h1>{poke.name}</h1>
          </Modal.Header>
          <Modal.Body className="text-center bg-secondary-subtle p-2">
            {poke.apiTypes.length > 1 ? (
              <div>
                <img
                  src={poke.sprite}
                  alt={poke.slug}
                  className="w-75 rounded-circle bg-light"
                />
                <h3 className="text-center">Types</h3>
                <div className="d-flex justify-content-center">
                  <div>
                    <img
                      src={poke.apiTypes[0].image}
                      alt={poke.slug}
                      className="w-25"
                    />
                    <p>{poke.apiTypes[0].name}</p>
                  </div>
                  <div>
                    <img
                      src={poke.apiTypes[1].image}
                      alt={poke.slug}
                      className="w-25"
                    />
                    <p>{poke.apiTypes[1].name}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src={poke.sprite}
                  alt={poke.slug}
                  className="w-75 rounded-circle bg-light"
                />
                <h3 className="text-center">Type</h3>
                <img
                  src={poke.apiTypes[0].image}
                  alt={poke.slug}
                  className="w-25"
                />
                <p>{poke.apiTypes[0].name}</p>
              </div>
            )}
            <div>
              <h2>Stats</h2>
              <Table bordered>
                <thead>
                  <tr>
                    <td className="text-success">HP</td>
                    <td className="text-danger">Attack</td>
                    <td className="text-primary">Defense</td>
                    <td style={{ color: "magenta" }}>Special attack</td>
                    <td style={{ color: "purple" }}>Special defense</td>
                    <td className="text-warning">Speed</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-success">{poke.stats.HP}</td>
                    <td className="text-danger">{poke.stats.attack}</td>
                    <td className="text-primary">{poke.stats.defense}</td>
                    <td style={{ color: "magenta" }}>
                      {poke.stats.special_attack}
                    </td>
                    <td style={{ color: "purple" }}>
                      {poke.stats.special_defense}
                    </td>
                    <td className="text-warning">{poke.stats.speed}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Modal.Body>
        </Modal>
      </Card>
    </div>
  );
}
export default ListPoke;
