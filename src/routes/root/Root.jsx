import { Outlet, NavLink } from "react-router-dom"
import './Root.css'
import RouteMoviesByPremiere from "../RouteMoviesByPremiere/RouteMoviesByPremiere"
import RouteMoviesByGenre from '../RouteMoviesByGenre/RouteMoviesByGenre.jsx'
import RouteMoviesByLength from '../RouteMoviesByLength/RouteMoviesByLength.jsx'
import RouteMoviesBySearchString from '../RouteMoviesBySearchString/RouteMoviesBySearchString.jsx'
import RouteMoviesProducedInLanguage from '../RouteMoviesProducedInLanguage/RouteMoviesProducedInLanguage.jsx'
import { useState } from "react"
import { motion } from 'framer-motion'
import FramerLinkP from "../../components/framerMotion/FramerLinkP.jsx"

export default function Root() {
    const [pageIndex, setPageIndex] = useState(0)

    const routeArray = [
        <RouteMoviesByGenre/>,
        <RouteMoviesByLength/>,
        <RouteMoviesBySearchString/>,
        <RouteMoviesProducedInLanguage />,
        <RouteMoviesByPremiere />
    ]

    return (
        <div className="Root">
            <header>  
                <nav className="router-nav">

                    <NavLink to="movies-by-genre"> 
                        <FramerLinkP text={"Movies by genre"} />
                    </NavLink>

                    <NavLink to="movies-by-length"> 
                        <FramerLinkP text={"Movies by length"} />
                    </NavLink>

                    <NavLink to="movies-by-premiere"> 
                        <FramerLinkP text={"Movies by premiere"} />
                    </NavLink>

                    <NavLink to="movies-by-produced-in-language"> 
                        <FramerLinkP text={"Number of movies produced per language"} />
                    </NavLink>

                    <NavLink to="movies-by-search-string"> 
                        <FramerLinkP text={"Search movies"} />
                    </NavLink>
                </nav>

            </header>



            <main>
                <Outlet />
                {/* <RouteMoviesByPremiere /> */}
            </main>
        </div>

    )
}