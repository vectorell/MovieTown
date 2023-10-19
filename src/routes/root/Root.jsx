import { Outlet, NavLink } from "react-router-dom"
import './Root.css'

export default function Root() {

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
            </main>
        </div>

    )
}