import logo from '../../assets/logo.png'

export default function LandingPage() {
    return (
        <div className="LandingPage">

            <img className="logo" src={logo} alt="logo" 
            style={{ height: '45vh' }}
            />
        </div>
    )
}