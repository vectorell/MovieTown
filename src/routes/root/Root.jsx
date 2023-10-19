import { Outlet, NavLink } from "react-router-dom"
import './Root.css'
import RouteMoviesByPremiere from "../RouteMoviesByPremiere/RouteMoviesByPremiere"
import RouteMoviesByGenre from '../RouteMoviesByGenre/RouteMoviesByGenre.jsx'
import RouteMoviesByLength from '../RouteMoviesByLength/RouteMoviesByLength.jsx'
import RouteMoviesBySearchString from '../RouteMoviesBySearchString/RouteMoviesBySearchString.jsx'
import RouteMoviesProducedInLanguage from '../RouteMoviesProducedInLanguage/RouteMoviesProducedInLanguage.jsx'
import { useState } from "react"

export default function Root() {
    const [pageIndex, setPageIndex] = useState(0)

    const routeArray = [
        <RouteMoviesByGenre/>,
        <RouteMoviesByLength/>,
        <RouteMoviesBySearchString/>,
        <RouteMoviesProducedInLanguage />,
        <RouteMoviesByPremiere />
    ]

    function handleClick(operator) {
        operator === 'plus' && setPageIndex(pageIndex + 1)
        operator === 'minus' && setPageIndex(pageIndex - 1)       
        console.log(pageIndex)
    }

    return (
        <div className="Root">
            <header>  
                <nav className="router-nav">
                    <NavLink to="movies-by-genre"> Movies by genre </NavLink>
                    <NavLink to="movies-by-length"> Movies by length </NavLink>
                    <NavLink to="movies-by-premiere"> Movies by premiere </NavLink>
                    <NavLink to="movies-by-produced-in-language"> Number of movies produced per language </NavLink>
                    <NavLink to="movies-by-search-string"> Search movies </NavLink>
                </nav>

            </header>



            <main>
                <Outlet />
                {/* <RouteMoviesByPremiere /> */}
                <button onClick={() => handleClick('minus')}> Backwards </button>
                <button onClick={() => handleClick('plus')}> Forwards </button>
            </main>
        </div>

    )
}