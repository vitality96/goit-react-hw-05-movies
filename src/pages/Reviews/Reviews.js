import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "service/api";
import s from './Reviews.module.css'


export default function Reviews() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);


    useEffect(() => {
        fetchMovieReviews(movieId).then(response => setMovie(response.results))
    }, [movieId]);

    return (
        <>
            {movie.length !== 0 ? (
                <ul className={s.list}>
                    {movie.map(({ id, author, content }) => (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content }</p>
                        </li>
                    ))}
            </ul>
            ) : (
                    <p>We don`t have any reviews for this movie</p>
        )}
        </>
    )
};
