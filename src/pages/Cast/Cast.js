import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "service/api";
import s from './Cast.module.css'

export default function Cast() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieCredits(movieId).then(response => setMovie(response.cast));
    }, [movieId]);


    return (
        <div className={s.container}>
            {movie && (
                <ul className={s.list}>
                    {movie.map(({ id, name, profile_path, character }) => (
                        <li key={id}>
                            {profile_path ? (
                                (<img src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                                    alt={name} />)
                            ) : (<img src="https://i5.walmartimages.com/asr/f752abb3-1b49-4f99-b68a-7c4d77b45b40_1.39d6c524f6033c7c58bd073db1b99786.jpeg"
                                alt={name} width="200" height="300" />)}
                            <p className={s.text}>{name}</p>
                            <p className={s.subtitle}>{character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
