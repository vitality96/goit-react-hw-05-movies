import { useParams, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "service/api";
import s from './MovieDetails.module.css'


export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => navigate(
        location.state ? `${location.state.from.pathname}${location.state.from.search}` : './movies'
    );

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    return (
        <>
            <button className={s.button} onClick={goBack}>Go Back</button>
            {movie && (
                <>
                    <div className={s.container}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} width="300" alt={movie.title}></img>
                    <div className={s.centered}>
                        <h2>{movie.title}</h2>
                    <p className={s.avarage}>Vote avarage: {movie.vote_average}</p>
                    <p className={s.overview}>Overview:</p>
                    <p>{movie.overview}</p>
                    <p className={s.genres}>Genres:</p>
                    {movie.genres && (
                        <ul className={s.list}>
                            {movie.genres.map(({ id, name }) => (
                                <li className={s.item} key={id}>{name}</li>
                            ))}
                        </ul>
                            )}
                            </div>
                        </div>
                    <hr />
                    <h3 className={s.title}>Additional information</h3>
                    <ul className={s.listStyle}>
                        <li className={s.itemList}><NavLink to="cast" state={location.state ? { from: location.state.from } : null}>Cast</NavLink></li>
                        <li className={s.itemList}><NavLink to="reviews" state={location.state ? { from: location.state.from } : null}>Reviews</NavLink></li>
                    </ul>
                    <hr />
                    <Outlet />
                </>
            )}
        </>
    );
};