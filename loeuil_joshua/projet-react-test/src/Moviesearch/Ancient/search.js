import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


const api_key = process.env.REACT_APP_API_KEY;

function Navbar(){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const Search = ()=>
        axios.get(`https://api.themoviedb.org/3/search/keyword`,{
            params: {
                api_key: api_key,
                query: searchTerm
            }
        })
        .then(res =>{
            const resultat = res.data.results;
            setSearchResults(resultat);
           
        })
    

    return (
        
        <div className="d-flex justify-content-center bg-dark">
            <div className="input-groupe d-flex">
                <input 
                id="research" 
                type="search" 
                className="form-control" 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>

                <button type="button" 
                className="btn btn-primary" 
                onClick={Search}>
                  Search
                </button>
                </div>
                <br/>
                <br/>
            </div>
            

        
    )
}

export default Navbar;