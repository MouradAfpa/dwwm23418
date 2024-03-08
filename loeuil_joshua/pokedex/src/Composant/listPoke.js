import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Modal, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FAVORIE } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { add_Favoris } from "../redux/action";


function ListPoke({ poke }) {
  const [show, setShow] = useState(false);
  const [itemsFA, setItemsFA] = useState(false);

  const clicHide = () => setShow(false);
  const clicShow = () => setShow(!show);

  const dispatch = useDispatch();


 useEffect(()=>{
    const favor = JSON.parse(localStorage.getItem("favor")) || [];
    const isFavor = favor.some((fav)=> fav.id === poke.id);
    setItemsFA(isFavor);
  }, [poke.id]);

  const switchFavor = ()=>{
    let favori = JSON.parse(localStorage.getItem("favor") || "[]");

    if(itemsFA){
      favori = favori.filter((fav) => fav.id !== poke.id);
    }else{
      favori.push({
        id: poke.id,
        name: poke.name,
        image: poke.image
      });
    }

    localStorage.setItem("favor", JSON.stringify(favori));
    setItemsFA(!itemsFA);
    
    const favoLoc = JSON.parse(localStorage.getItem('favor')) || [];
    dispatch(add_Favoris(favoLoc));
  };


  const handleFavo = () =>{
    dispatch({
      type: FAVORIE,
      payload: {
        id: poke.id,
        name: poke.name,
        image: poke.image,
      },
    });
    
    switchFavor();
  };

 

  

  return (
    <div className="pt-5 pb-5 ">
      <Card className=" border-3 " style={{borderColor: 'chartreuse', height: '25rem' , width: '20rem'}} >
        <Card.Header className="text-center bg-danger">
          <div className="text-light">
            <h1>{poke.name}</h1>
          </div>
        </Card.Header>
        <Card.Body onClick={clicShow} className="d-flex justify-content-center">
          <img src={poke.sprite} alt="" />
        </Card.Body>
        <Card.Footer className=" d-flex justify-content-center bg-black-subtle">
        <button onClick={handleFavo} className={` rounded-circle p-1 ps-2 pe-2 shadow ${
          itemsFA ? "bg-danger" : "bg-dark"}`}>
        { itemsFA ? <FontAwesomeIcon icon={faHeart} size="1x" style={{color: "#00ff1e",}}/> : 
          <FontAwesomeIcon icon={faHeart}  beat size="1x" style={{color: "#ff0000",}}/>}
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
                  src={poke.image}
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
