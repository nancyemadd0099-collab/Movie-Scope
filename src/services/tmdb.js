
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getMoviesByGenre = async (genreId, excludeGenres = [], sortBy = "vote_average.desc",
    minVotes = 500) => {
    const exclude = excludeGenres.join(",");
    const url =
        `${BASE_URL}/discover/movie` +
        `?api_key=${API_KEY}` +
        `&with_genres=${genreId}` +
        `&without_genres=${exclude}` +
        `&sort_by=${sortBy}` +
        `&vote_count.gte=${minVotes}`;
    const res = await fetch(url);
    return res.json();
}
