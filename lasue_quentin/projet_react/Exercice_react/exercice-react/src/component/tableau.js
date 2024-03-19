import Table from "react-bootstrap/Table";

function Tableau(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.article.map((produit, index) => (
          <tr key={index}>
            <td className={produit.stocked ? "" : "text-danger fw-bold"}>
              {produit.name}
            </td>
            <td>{produit.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tableau;
