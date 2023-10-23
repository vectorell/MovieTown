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

                    <NavLink to="start"> 
                        <FramerLinkP text={"Start"} />
                    </NavLink>

                    <NavLink to="movies-by-genre"> 
                        <FramerLinkP text={"Movies by Genre"} />
                    </NavLink>

                    <NavLink to="movies-by-length"> 
                        <FramerLinkP text={"Movies by Length"} />
                    </NavLink>

                    <NavLink to="movies-by-premiere"> 
                        <FramerLinkP text={"Movies by Premiere"} />
                    </NavLink>

                    <NavLink to="movies-by-produced-in-language"> 
                        <FramerLinkP text={"Movies per Language"} />
                    </NavLink>

                    <NavLink to="movies-by-search-string"> 
                        <FramerLinkP text={"Search movies"} />
                    </NavLink>
                </nav>

            </header>



            <main>
                <motion.div className="content"
                style={{
                    perspective: 900,
                    transformStyle: "preserve-3d"

                }}
                >
                    <Outlet/>

                </motion.div>
                {/* <RouteMoviesByPremiere /> */}
            </main>
        </div>

    )
}