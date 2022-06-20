import axios from "axios";

export const API_KEY = 'dd06e17bf41b8c1999e9b262a8aaf7ee';


// Запит на список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function fetchTrendingMovies(page = 1, media_type = 'movie', time_window = 'day') {
    const { data } = await axios(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${API_KEY}&page=${page}`);
    return data
};

// Запит на пошук фільму за ключовим словом на сторінці фільмів.
export async function fetchMoviesByQuery(query, page = 1, language = 'en-US') {
    const { data } = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`);
    return data;
};

// Запит повної інформації про фільм для сторінки кінофільму.
export async function fetchMovieById(movie_id, language = 'en-US') {
    const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=${language}`);
    return data;
};

// Запит інформації про акторський склад для сторінки кінофільму.
export async function fetchCreditsByMovieId(movie_id, language = 'en-US') {
    const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`);
    return data.cast;
};

// Запит оглядів для сторінки кінофільму.
export async function fetchReviewsByMovieId(movie_id, page = 1, language = 'en-US') {
    const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}&page=${page}`);
    return data;
};


