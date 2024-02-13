import React from "react";
import  Card  from "react-bootstrap/Card";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

function CardFilm({Movie}){
    return (
        <>
            <br/><br/>
            
            <Card border="success" style={{ width: '16rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${Movie.poster_path}`}/>
                <Card.Body>
                    <Card.Title>
                        {Movie.original_title ? Movie.original_title : Movie.original_name}
                    </Card.Title>
                    <Card.Text>
                        {Movie.overview}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </>
    )
}



class ListFilm extends React.Component{
    constructor(props){
        super(props)
       this.state ={
        movies:[]
    }  
    }
   
    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=en-US`)
        .then(res =>{
            const movies = res.data.results;
            this.setState({movies})
        })
    }
    render(){
        return(
            <div className="d-flex justify-content-center flex-wrap">
                {this.state.movies.map(Movie => (
                    <CardFilm key={Movie.id} Movie={Movie} />
                ))}
            </div>
        )
    }
    }


export default ListFilm;