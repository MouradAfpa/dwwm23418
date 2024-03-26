import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SearchBar({search, setSearch}) {

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Form className='d-flex justify-content-center'>
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
                </Row>
            </Form>
        </>
    )
}

export default SearchBar 