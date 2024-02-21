import Button from 'react-bootstrap/Button';
import {Col, Row} from 'react-bootstrap/esm/';

function Boutons({pageActuelle, setPage, nbrPage}){

    const nextPage = () => {
        if(pageActuelle !== nbrPage)
        setPage(pageActuelle + 1);
        
    };
   
    const previousPage = () => {
        if (pageActuelle > 1) {
            setPage(pageActuelle - 1);
            
        }
    };  
    return(
        <Row>
            <Col>
                <Button variant="outline-info" onClick={previousPage} size='lg'>Page précédente</Button>
            </Col>
            <Col>
                <Button variant="outline-info" size='lg'>Page {pageActuelle} sur {nbrPage}</Button>
            </Col>
            <Col>
                <Button variant="outline-info" onClick={nextPage} size='lg'>Page suivante</Button>
            </Col>
        </Row>
    );
}
export default Boutons;