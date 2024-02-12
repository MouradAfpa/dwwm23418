import React from "react";
import  Card  from "react-bootstrap/Card";
import  CardGroup  from "react-bootstrap/CardGroup";
import axios from "axios";

function CardFilm(){
    return (
        <>
            <br/><br/>
           
                <Card border="success">
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                </Card>

            
            

            
        
        </>
    )
}

export default CardFilm;