import Image from 'react-bootstrap/Image'

function PageFilm(props){

    return( 
        <div className='container'>
            <div className='row'>
                <Image src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} thumbnail/>
            </div>
            
        </div>
    )
}