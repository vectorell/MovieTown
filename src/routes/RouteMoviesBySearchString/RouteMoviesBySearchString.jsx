import Search from "../../components/Seach/Search.jsx";
import FramerPageTitle from "../../components/framerMotion/FramerPageTitle";
import FramerRoute from "../../components/framerMotion/FramerRoute.jsx";
import './StyledRouteMoviesBySearchString.css'

export default function RouteMoviesBySearchString() {
    return (
        <FramerRoute 
            name="RouteMoviesBySearchString" 
            title={ <FramerPageTitle title={"Search"}/> } 
            component={ <Search />}
            />
    )
}