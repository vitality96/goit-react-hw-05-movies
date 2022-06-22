const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'dd06e17bf41b8c1999e9b262a8aaf7ee';


async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

// Запит на список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export function fetchTrending() {
    return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

// Запит на пошук фільму за ключовим словом на сторінці фільмів.
export function fetchSearchMovie(searchQuery) {
    return fetchMovies(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
}

// Запит повної інформації про фільм для сторінки кінофільму.
export function fetchMovieDetails(movieId) {
    return fetchMovies(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

// Запит інформації про акторський склад для сторінки кінофільму.
export function fetchMovieCredits(movieId) {
    return fetchMovies(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
}

// Запит оглядів для сторінки кінофільму.
export function fetchMovieReviews(movieId) {
    return fetchMovies(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
}

