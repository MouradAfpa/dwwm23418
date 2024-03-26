import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const NavbarJs = ({ search, setSearch, handleSearch}) => {

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(search);
  };

  const navigate = useNavigate();
  const toSerieView = () => { navigate("/serie") }
  const goBack = () => { navigate(-1) }

  return (
    <header className='navbar navbar-expand-lg bg-body-tertiary'>
      <Link className='text-dark m-3 pe-3' to={'/'}>Home</Link>
      <Link className='text-dark m-3 pe-3' to={'/serie'}>Serie</Link>
      <Link className='text-dark m-3 pe-3' to={'/film'}>Film</Link>
      <Form className='d-flex justify-content-center' onChange={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={search}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs="auto">
          </Col>
        </Row>
      </Form>
      <Button onClick={toSerieView}>Next</Button>
      <Button onClick={goBack}>Previous</Button>
    </header>
  );
}

export default NavbarJs;
