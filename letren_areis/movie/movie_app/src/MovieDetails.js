import React from "react";

function MovieDetails({ movie, trailer, playing, goToPreviousMovie, goToNextMovie, setPlaying }) {
    return (
        <div className="poster"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
            {playing ?
                <>
                    <Youtube
                        videoId={trailer.key}
                        className={"youtube amru"}
                        containerClassName={"youtube-container amru"}
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                cc_load_policy: 0,
                                fs: 0,
                                iv_load_policy: 0,
                                modestbranding: 0,
                                rel: 0,
                                showinfo: 0,
                            },
                        }}
                    />
                    <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                    </button>
                </> :
                <div className="center-max-size">
                    <div className="poster-content">
                        {trailer ?
                            <>
                                <div className="navigation-buttons">
                                    <button onClick={goToPreviousMovie}>Previous</button>
                                    <button onClick={goToNextMovie}>Next</button>
                                </div>
                                <button className={"button play-video"} onClick={() => setPlaying(true)}
                                    type="button">Play Trailer</button>
                            </>
                            : 'Sorry, no trailer available'}
                        <h1>{movie.title}</h1>
                        <p><strong>Date de sortie:</strong> {movie.release_date}</p>
                        <p><strong>Synopsis:</strong> {movie.overview}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default MovieDetails;
