import ProducedInLanguage from "./components/ProducedInLanguage/ProducedInLanguage.jsx";
import MoviesByPremiere from "./components/MoviesByPremiere/MoviesByPremiere.jsx";
import "./App.css";



function App() {




    return (
        <div className="App">

          <h1> MovieTown </h1>

          {/* <ProducedInLanguage /> */}
          <MoviesByPremiere />

        </div>
    );
}

export default App;
