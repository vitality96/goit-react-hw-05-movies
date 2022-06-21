import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "service/api";

function HomePage() {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetchTrendingMovies().then(data => setMovies(data.results))
    }, [])

    return (
        <>
            <h1>Tranding today</h1>
            {movies && movies.map(movie => 
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                </li>)}
        </>
    );
};

export default HomePage;