import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/Cast/Cast"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));
const NotFound = lazy(() => import("pages/NotFoud/NotFound"));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  )
}
