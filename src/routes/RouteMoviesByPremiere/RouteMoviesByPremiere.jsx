import MoviesByPremiere from "../../components/MoviesByPremiere/MoviesByPremiere";
import FramerPageTitle from "../../components/framerMotion/FramerPageTitle";
import FramerRoute from "../../components/framerMotion/FramerRoute.jsx";

export default function RouteMoviesByPremiere() {
    return (
        <FramerRoute 
            name={"MoviesByPremiere"}
            title={<FramerPageTitle title={"Movies by premiere date"} />}
            component={<MoviesByPremiere />}
        />
    )
}