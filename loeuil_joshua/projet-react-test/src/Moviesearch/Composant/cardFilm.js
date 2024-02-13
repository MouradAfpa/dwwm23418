import React from "react";
import  Card  from "react-bootstrap/Card";
import axios from "axios";


// class ListFilm extends React.Component{
//     state ={
//         Movie:[]
//     }
//     componentDidMount(){
//         axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
//     }
//     }

function CardFilm(){
    return (
        <>
            <br/><br/>
           
                <Card border="success" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>Titre film</Card.Title>
                        <Card.Text>
                        leger synopsis
                        </Card.Text>
                        </Card.Body>
                </Card>

            
            

            
        
        </>
    )
}

export default CardFilm;