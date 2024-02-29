import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function NavBar({searchVal, setSearchVal, setPage, pageActuelle}){

    const changeRecherche = (e) => {    //a l'écoute de l'événement dès qu'il y a un changement, on envoi la nouvelle valeur dans searchVal 
        const searchVal = e.target.value;
        setSearchVal(searchVal);
        setPage(1); //Reset la page actuelle
        };
    return  (
        <header className='mb-5'>
            <Navbar className="bg-dark justify-content-center" data-bs-theme="dark" fixed="top">
            <Container>
            <Navbar.Brand> <span className="text-warning fw-bold">Search</span> <i className="text-info">Films</i></Navbar.Brand>
                <Form.Control
                onChange={changeRecherche}
                value={searchVal}
                type="text"
                placeholder="Rechercher un film"
                className=" mr-sm-2"
                />
            </Container>
            </Navbar>
        </header>
    );
}
export default NavBar;