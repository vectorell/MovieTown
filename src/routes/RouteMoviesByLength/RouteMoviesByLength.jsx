import MoviesByLength from "../../components/MoviesByLength/MoviesByLength"
import FramerPageTitle from "../../components/framerMotion/FramerPageTitle";
import FramerRoute from "../../components/framerMotion/FramerRoute.jsx";

export default function RouteMoviesByLength() {
    return (
        <FramerRoute 
            name={"RouteMoviesByLength"}
            title={<FramerPageTitle title={"Movies by length"} />}
            component={<MoviesByLength />}
        />
    )
}