import { useNavigate, useParams } from 'react-router-dom';
import './GenrePage.css'
import { useEffect, useState } from 'react';
import { getMoviesByGenre } from '../../services/tmdb';

function GenrePage() {
    const { id, title } = useParams();
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMoviesByGenre(id).then((data) => {
            setMovies(data.results)
        });
    }, [id]);

    return (
        <>
            <section className='genrepage-section'>
                <div className='genrepage'>
                    <div className="genre-header">
                        <h1>{title}</h1>
                        <button onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left-long"></i> back</button>
                    </div>
                    <div className="genre-cards">
                        {movies.map(movie => (
                            <div className="movie-card">
                                <img
                                    key={movie.id}
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className="content-image">
                                    <p>{movie.title}</p>
                                    <p>
                                        {movie.overview
                                            ? movie.overview.slice(0, 80) + "..."
                                            : "No description available"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenrePage;