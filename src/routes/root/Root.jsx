import { Outlet, NavLink } from "react-router-dom"
import './Root.css'
import FramerLinkP from "../../components/framerMotion/FramerLinkP.jsx"

export default function Root() {

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
                <div className="content" style={{ perspective: '50em' }}>
                    <Outlet />
                </div>
            </main>

        </div>

    )
}