import React from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


function Produits(){

    const products = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];

        

        
        
        return(
            <div>
                <Table bordered striped className="border-3">
                    <thead className=" border-3 border-black border-top-0 border-start-0 border-end-0">
                        <tr >
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody className="border-0">
                        {products.map((prod , index) => {
                            return(
                            <tr key={index}>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                            </tr>
                        )})}
                    </tbody>

                </Table>
            </div>
        )
}

export default Produits;