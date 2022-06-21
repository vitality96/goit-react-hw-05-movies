import { Route, Routes } from "react-router-dom";
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage  from "pages/MoviesPage/MoviesPage";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          </Route>
        </Routes>
    </div>
  );
};
