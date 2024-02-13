import React from "react";
import axios from 'axios';
import FilmCards from "./CardsFilm";

class ListeFilm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            films :[]
        }
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(res => {
            const films =res.data.results;
            this.setState({films});
        })
    }

    render(){
        console.log("list de films: ",this.state.films);
        return(
        <div className="conrainer mt-5">
            <div className="row justify-content-center">
                {this.state.films.map(film=>  
                <FilmCards key={film.id} film={film}/>
                )}
            </div>
        </div>
        );
    }
        
}

export default ListeFilm;


