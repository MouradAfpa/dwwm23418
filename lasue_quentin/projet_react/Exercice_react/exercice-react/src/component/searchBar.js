import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form inline>
        <Row >
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search..."
              className=" mr-sm-2"
            />
          </Col>
        </Row>
        <Row>
          <Form>
            <Form.Check
              className="text-secondary"
              type="checkbox"
              id="default-checkbox"
              label="Only show products in stock"
            />
          </Form>
        </Row>
      </Form>
    </Navbar>
  );
}

export default SearchBar;
