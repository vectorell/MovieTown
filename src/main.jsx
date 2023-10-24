import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/Root.jsx'
import RouteMoviesByGenre from './routes/RouteMoviesByGenre/RouteMoviesByGenre.jsx';
import RouteMoviesByLength from './routes/RouteMoviesByLength/RouteMoviesByLength.jsx';
import RouteMoviesByPremiere from './routes/RouteMoviesByPremiere/RouteMoviesByPremiere.jsx';
import RouteMoviesProducedInLanguage from './routes/RouteMoviesProducedInLanguage/RouteMoviesProducedInLanguage.jsx';
import RouteMoviesBySearchString from './routes/RouteMoviesBySearchString/RouteMoviesBySearchString.jsx';
import RouteLandingPage from './routes/LandingPage/RouteLandingPage.jsx';

const router = createHashRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "start",
        element: <RouteLandingPage />
      },
      {
        path: "movies-by-genre",
        element: <RouteMoviesByGenre />
      },
      {
        path: "movies-by-length",
        element: <RouteMoviesByLength />
      },
      {
        path: "movies-by-premiere",
        element: <RouteMoviesByPremiere />
      },
      {
        path: "movies-by-produced-in-language",
        element: <RouteMoviesProducedInLanguage />
      },
      {
        path: "movies-by-search-string",
        element: <RouteMoviesBySearchString />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
