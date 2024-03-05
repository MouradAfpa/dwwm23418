import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../App.css'; 
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';


function Search({recherche,setRecherche}) {

  const [searchString, setSearchString] = useState("");

 const handleChange = (evenement) => {
    setSearchString(evenement.target.value);

 }
const handleSubmit= (evenement) => {
      evenement.preventDefault();
      setRecherche(searchString);
      alert("recherche de " + recherche)
}

  return (
    <Navbar>
      <Form className="searchbar" onSubmit={handleSubmit}> 
             <input type="text" placeholder="Search..." onChange={handleChange}/>
                  
      </Form>
      <Button variant="primary" onClick={handleSubmit} >Submit</Button>{' '}
    </Navbar>
  );
}

export default Search;