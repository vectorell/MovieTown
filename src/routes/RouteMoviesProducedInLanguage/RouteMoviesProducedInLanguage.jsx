import ProducedInLanguage from "../../components/ProducedInLanguage/ProducedInLanguage";
import './StyledRouteMoviesProducedInLanguage.css'
import FramerPageTitle from "../../components/framerMotion/FramerPageTitle";
import FramerRoute from "../../components/framerMotion/FramerRoute.jsx";

export default function RouteMoviesProducedInLanguage() {
    return (
        <FramerRoute 
            name={"RouteMoviesProducedInLanguage"}
            title={<FramerPageTitle title={"Movies from all genres per language"} />}
            component={<ProducedInLanguage />}
        />
    )
}