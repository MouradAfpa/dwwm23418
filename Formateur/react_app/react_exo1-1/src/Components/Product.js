import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: props
        }
    }

    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.product.price}</Card.Subtitle>
                    <Card.Text>
                        {this.state.product.description}
                    </Card.Text>
                    <Card.Text >{this.state.product.stock}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        );
    }
}

export default Product;