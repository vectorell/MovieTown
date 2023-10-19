import { Outlet, NavLink } from "react-router-dom"

export default function Root() {

    return (
        <>
            <header> Header </header>

            <NavLink to="movies-by-genre"> Movies by genre </NavLink>
            <NavLink to="movies-by-length"> Movies by length </NavLink>
            <NavLink to="movies-by-premiere"> Movies by premiere </NavLink>
            <NavLink to="movies-by-produced-in-language"> Number of movies produced per language </NavLink>
            <NavLink to="movies-by-search-string"> Search movies </NavLink>

            <main>
                <Outlet />
            </main>
        </>

    )
}