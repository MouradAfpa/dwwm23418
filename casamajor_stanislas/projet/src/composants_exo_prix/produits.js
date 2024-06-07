import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
const Liste = () => {
  const products = [

    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];


  
  return (
    <Table striped bordered>
      <thead className="border-bottom-0">
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
      {products.map((item) => (
        <tr>
          <td>
            {item.name} {item.stocked}
          </td>
          <td>
             {item.price}
          </td>
        </tr>
      ))}</tbody>
    </Table>
  );
};

export default Liste;
