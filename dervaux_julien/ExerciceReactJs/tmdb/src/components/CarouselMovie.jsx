import Carousel from 'react-bootstrap/Carousel';
import CardMovie from './CardMovie';
import { Card, Col } from 'react-bootstrap';
import { useState } from 'react';
import CardSerie from './CardSerie';

export const CarouselMovie = ({ movies }) => {
    return (
        <Carousel 
        fade
        style={{ width: '80%', margin: 'auto', maxHeight: '%' }}>
            {movies.map((movie) => (
                <Carousel.Item key={movie.id} interval={10000}>
                    <img
                        className="d-block w-100"
                        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                        alt={movie.title}
                        style={{ maxHeight: '400px', objectFit: 'cover', filter: 'brightness(0.5)' }} // Ajout de styles pour ajuster la taille de l'image
                    />
                    <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export const CarouselCardMovie = ({ movies }) => {

    return (

        <div className='d-flex flex-column align-items-center mt-4'>
        <h1>Films tendances</h1>
        <Carousel 
        className='d-flex flex-wrap justify-content-center' 
        interval={null}
        >
      {movies.map((films, index) => (
        index % 5 === 0 && (
          <Carousel.Item key={index}>
            <div className="d-flex">
                {console.log("ici films" + films)}
              {movies.slice(index, index + 5).map((film, filmIndex) => (
                <CardMovie movie={film} key={filmIndex} />
              ))}
            </div>
          </Carousel.Item>
        )
      ))}
    </Carousel>
      </div>
    );
};
export const CarouselCardSerie = ({ popularSeries }) => {

    return (
        <div className='d-flex flex-column align-items-center mt-4'>
        <h1>Series tendances</h1>
        <Carousel className='d-flex flex-wrap justify-content-center' interval={null}>
      {popularSeries.map((series, index) => (
        index % 5 === 0 && (
          <Carousel.Item key={index}>
            <div className="d-flex">
              {popularSeries.slice(index, index + 5).map((serie, serieIndex) => (
                <CardSerie serie={serie} key={serieIndex}/>
              ))}
            </div>
          </Carousel.Item>
        )
      ))}
    </Carousel>
      </div>
    );
};