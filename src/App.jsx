import ProducedInLanguage from "./components/ProducedInLanguage/ProducedInLanguage.jsx";
import MoviesByPremiere from "./components/MoviesByPremiere/MoviesByPremiere.jsx";
import "./App.css";
import MoviesByLength from "./components/MoviesByLength/MoviesByLength.jsx";
import MoviesByGenre from "./components/MoviesByGenre/MoviesByGenre.jsx";



function App() {




    return (
        <div className="App">

          <h1> MovieTown </h1>

          {/* <ProducedInLanguage /> */}
          {/* <MoviesByPremiere /> */}
          {/* <MoviesByLength /> */}
          <MoviesByGenre />

        </div>
    );
}

export default App;
