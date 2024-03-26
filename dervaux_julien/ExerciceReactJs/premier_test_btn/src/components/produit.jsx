import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'




function Produit({ props }) {

    return (
        <div className='d-flex'>
        <Card className='col-10  col-md-2 m-2 shadow d-flex'>
        <Card.Img variant="top" src={props.img} />
        <Card.Title className='fw-bold fs-3 '>{props.name}</Card.Title>
            <Card.Body>
                <Card.Text className='fw-bold fs-4'>{props.price}</Card.Text>
                <Card.Text>{props.overview}</Card.Text>
                <Card.Text className='text-danger text-end'>{props.stock}</Card.Text>
            </Card.Body>
        </Card>
        </div>

    );
}

export default Produit;