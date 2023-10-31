'use client'
import { useEffect, useState } from "react";
import axios from 'axios';
import Filter from "../filter/Filter";
import Movie from "../movie/Movie";
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('/movies.json');
            setMovies(res.data.movies);
            setGenres(res.data.genres);
            setIsLoading(false);
        };
        fetchMovies();
    }, []);
    const filteredMovies = movies.filter(movie =>
        (movie.title.toLowerCase().includes(search.toLowerCase()) || movie.description.toLowerCase().includes(search.toLowerCase())) &&
        (selectedGenres.length === 0 || selectedGenres.includes(movie.genre))
    );
    return (
        <div className="w-full">
            <Filter genres={genres} search={search} setSearch={setSearch} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <div className="grid md:grid-cols-3 gap-5">
                {isLoading ? (
                    <p className="col-span-3 text-center font-semibold text-blue-950">Cargando datos...</p>
                ) : filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => <Movie key={movie.id} movie={movie} />)
                ) : (
                    <p className="col-span-3 text-center font-semibold text-blue-950">No se encontraron películas que coincidan con los criterios de búsqueda.</p>
                )}
            </div>
        </div>
    )
}
export default MovieList
