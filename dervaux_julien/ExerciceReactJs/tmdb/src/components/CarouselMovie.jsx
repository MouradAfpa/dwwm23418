import Carousel from 'react-bootstrap/Carousel';
import CardMovie from './CardMovie';
import { Button, Col } from 'react-bootstrap';
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
    const tabSize = 5; 
    const [index, setIndex] = useState(0); 

    return (
        <>
            <Carousel 
                interval={null}
                style={{ width: '100%', margin: 'auto', maxHeight: '500px' }} 
                activeIndex={index} 
                onSelect={(selectedIndex) => setIndex(selectedIndex)}
                prevLabel="Previous" 
                nextLabel="Next"
                indicators={false}
            >
                {Array.from({ length: Math.ceil(movies.length / tabSize) }).map((e, slideIndex) => (
                    <Carousel.Item key={slideIndex} slide={false} >
                        <div className='d-flex'>
                            {movies.slice(slideIndex * tabSize, (slideIndex + 1) * tabSize).map((movie) => (
                                <Col key={movie.id} 
                                style={{ height: "100%", width : "100%", cursor: "pointer" }}
                                className="img-fluid p-2">
                                    <CardMovie  movie={movie} />
                                </Col>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};
export const CarouselCardSerie = ({ popularSeries }) => {
    const tabSize = 5; 
    const [index, setIndex] = useState(0); 

    return (
        <>
            <Carousel 
                interval={null}
                style={{ width: '100%', margin: 'auto', maxHeight: '500px' }} 
                activeIndex={index} 
                onSelect={(selectedIndex) => setIndex(selectedIndex)}
                prevLabel="Previous" 
                nextLabel="Next"
                indicators={false}
            >
                {Array.from({ length: Math.ceil(popularSeries.length / tabSize) }).map((e, slideIndex) => (
                    <Carousel.Item key={slideIndex} slide={false} >
                        <div className='d-flex'>
                            {popularSeries.slice(slideIndex * tabSize, (slideIndex + 1) * tabSize).map((serie) => (
                                <Col key={serie.id} className='p-2'>
                                    <CardSerie serie={serie} />
                                </Col>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};