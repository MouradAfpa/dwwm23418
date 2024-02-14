import React, { useEffect } from "react";
import axios from 'axios';
import FilmCards from "./CardsFilm";

// class ListeFilm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             films :[]
//         }
//     }

//     componentDidMount() {
//         axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
//         .then(res => {
//             const films =res.data.results;
//             this.setState({films});
//         })
//     }

//     render(){
//         console.log("list de films: ",this.state.films);
//         return(
//         <div className="conrainer mt-5">
//             <div className="row justify-content-center">
//                 {this.state.films.map(film=>  
//                 <FilmCards key={film.id} movie={film} />
//                 )}
//             </div>
//         </div>
//         );
//     }
        
// }

// export default ListeFilm;


function ListeFilm(){
    
    const [films, setFilms] = React.useState([]);


    
    useEffect(()=> {
        const getFilms = async () => {
            try{
                const movies = await axios.get(
                    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
                
                setFilms(movies.data.results);
                console.log('La liste des films :', movies);
            }catch (error){
                console.error('error fetching movies:', error);
            }
        };
        getFilms();
    });
    

    return(
        <div className="conrainer mt-5">
            <div className="row justify-content-center">
                <h1 className="text-info fw-bold">Les films du moment : </h1>
                {films.map(film=>  
                <FilmCards key={film.id} movie={film} />
                )}
            </div>
        </div>
        );
}
export default ListeFilm;
