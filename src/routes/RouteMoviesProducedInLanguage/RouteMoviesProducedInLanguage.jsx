import ProducedInLanguage from "../../components/ProducedInLanguage/ProducedInLanguage";
import './StyledRouteMoviesProducedInLanguage.css'

export default function RouteMoviesProducedInLanguage() {
    return (
        <div className="RouteMoviesProducedInLanguage">
            <h1> Movies from all genres per language</h1>
            <ProducedInLanguage />
        </div>
    )
}