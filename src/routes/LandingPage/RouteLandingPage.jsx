import FramerRoute from "../../components/framerMotion/FramerRoute"
import FramerPageTitle from "../../components/framerMotion/FramerPageTitle"
import LandingPage from "../../components/LandingPage/LandingPage"


export default function RouteLandingPage() {

    return (
        <FramerRoute 
            name={"LandingPage"}
            title={<FramerPageTitle title={""} />}
            component={ <LandingPage /> }
        />
    )
}