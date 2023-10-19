import MoviesByGenre from "../../components/MoviesByGenre/MoviesByGenre.jsx";
import FramerPageTitle from "../../components/framerMotion/FramerPageTitle.jsx";
import FramerRoute from "../../components/framerMotion/FramerRoute.jsx";

export default function RouteMoviesByGenre() {
    return (

        <FramerRoute 
            name={"RouteMoviesByGenre"}
            title={<FramerPageTitle title={"Movies by genre"} />}
            component={<MoviesByGenre />}
        />
    )
}