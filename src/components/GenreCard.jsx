import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../services/tmdb";
import './GenreCard.css'


function GenreCard({ title, genreId }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const excludes = {
            35: [18, 27], // Comedy without Drama and Horror
            18: [35, 27], // Drama without Comedy and Horror
            27: [35, 18], // Horror without Comedy and Drama
            28: [12],     // Action without Adventure
        };
        const horrorFilter = genreId === 27 ? {
            sort: "popularity.desc",
            votes: 1000,
        } : {
            sort: "vote_average.desc",
            votes: 500,
        }
        getMoviesByGenre(genreId, excludes[genreId] || [], horrorFilter.sort, horrorFilter.votes).then((data) => {
            setMovies(
                data.results
                    .filter(movie => movie.poster_path)
                    .slice(0, 4)
            );
        });
    }, [genreId]);

    return (
        <div className="genre-card">
            <div className="genre-images">
                {movies.map((movie) => (
                    <img key={movie.id}
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                ))}
            </div>

            <div className="genre-footer">
                <span>{title}</span>
                <span><i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    )
}

export default GenreCard;