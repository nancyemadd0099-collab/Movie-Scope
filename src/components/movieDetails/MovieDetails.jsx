import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css'
import { useEffect, useState } from 'react';
import Promo from '../homeContent/Promo';

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY
            }&append_to_response=credits`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
            });
    }, [id]);
    if (!movie) return <p>Loading...</p>;
    const director = movie.credits?.crew.find(
        (p) => p.job === "Director"
    );

    return (
        <>
            <section className='movieDetails-section'>

                {/* hero section */}
                <div className='hero-movieDetails'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title} />
                    <div className="hero-overlay-movies">
                        <p>{movie.title}</p>
                        <p>{movie.overview.slice(0, 120)}...</p>
                        <div className="btns-hero">
                            <button onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i></button>
                            <button><i class="fa-solid fa-play"></i> Play Now</button>
                        </div>
                    </div>
                </div>

                {/* details section */}
                <div className="container-movieDetails">
                    <div className="left">
                        <div className="box box1">
                            <h3>Description</h3>
                            <p>{movie.overview}</p>
                        </div>
                        <div className="box box2">
                            <h3>Cast</h3>
                            <div className="cast-list">
                                {movie.credits?.cast
                                    .filter((actor) => actor.profile_path)
                                    .slice(0, 8)
                                    .map((actor) => (
                                        <div key={actor.id} className='actor'>
                                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                                alt={actor.name} />
                                            <p>{actor.name}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        {/* year box */}
                        <div className="box">
                            <h3><i class="fa-regular fa-calendar"></i>Released Year</h3>
                            <p>
                                {/* <strong>Year:</strong>{" "} */}
                                {movie.release_date?.split("-")[0]}
                            </p>
                        </div>
                        {/* language box */}
                        <div className="box">
                            <h3><i class="fa-solid fa-language"></i>Available Languages</h3>
                            <div className="tags">
                                {movie.spoken_languages?.map((lang) => (
                                    <p key={lang.iso_639_1}>
                                        {lang.english_name}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Rating  */}
                        <div className="box">
                            <h3><i class="fa-regular fa-star"></i>Rating</h3>
                            <p>{movie.vote_average?.toFixed(1)}</p>
                        </div>

                        {/* Director  */}
                        {director && (
                            <div className="box">
                                <h3>Director</h3>
                                <p>{director.name}</p>
                            </div>
                        )}
                    </div>
                </div>

                <Promo />
            </section>
        </>
    )
}
export default MovieDetails;