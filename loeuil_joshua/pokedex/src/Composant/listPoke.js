import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Modal, Table } from "react-bootstrap";


function ListPoke({poke}){

 const [show , setShow] = useState(false)

 const clicShow = () =>{
    setShow(true);
 }

 const clicHide = () =>{
    setShow(false);
 }

  

    return( 
       <div className="">
            <Card className=" border border-3 border-danger rounded-5 bg-dark-subtle" onClick={clicShow}>
                <Card.Header className="text-center bg-dark rounded-top-5">
            <div className="text-light"><h1>{poke.name}</h1></div>
            </Card.Header>
            <Card.Body className="">
              <img src={poke.image} alt='' />  
            </Card.Body>
            
            <Modal show={show} onHide={clicHide} key={poke.id}>
                <Modal.Body className="text-center">
                <div key={poke.id}>
            <div>
            <h1>{poke.name}</h1>
            <img src={poke.sprite} alt={poke.slug}/>
            </div>
            <div>
                <h2>Stats</h2>
                <Table bordered>
                    <thead>
                        <td colSpan={2} className="text-success">HP</td>
                        <td colSpan={2} className="text-danger">Attack</td>
                        <td colSpan={2} className="text-primary">Defense</td>
                        <td style={{color: 'magenta'}}>Special attack</td>
                        <td style={{color : 'purple'}}>Special defense</td>
                        <td colSpan={2} className="text-warning">Speed</td>
                    </thead>
                    <tbody> 
                        <tr>
                            <td colSpan={2} className="text-success">{poke.stats.HP}</td>
                            <td colSpan={2} className="text-danger">{poke.stats.attack}</td>
                            <td colSpan={2} className="text-primary">{poke.stats.defense}</td>
                            <td style={{color: 'magenta'}}>{poke.stats.special_attack}</td>
                            <td style={{color : 'purple'}}>{poke.stats.special_defense}</td>
                            <td colSpan={2} className="text-warning">{poke.stats.speed}</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            
        </div>
                </Modal.Body>


            </Modal>
            </Card>
       </div>
            
        
    )
}export default ListPoke;