import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrending } from "service/api";
import s from './Home.module.css'

function Home() {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetchTrending().then(response => setMovies(response.results))
    }, [])

    return (
        <>
            <h1 className={s.title}>Tranding today</h1>
            {movies && movies.map(movie => 
                <li className={s.item} key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                </li>)}
        </>
    );
};

export default Home;