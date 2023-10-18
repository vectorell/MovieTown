import ProducedInLanguage from "./components/ProducedInLanguage/ProducedInLanguage.jsx";
import MoviesByPremiere from "./components/MoviesByPremiere/MoviesByPremiere.jsx";
import "./App.css";
import MoviesByLength from "./components/MoviesByLength/MoviesByLength.jsx";



function App() {




    return (
        <div className="App">

          <h1> MovieTown </h1>

          <ProducedInLanguage />
          <MoviesByPremiere />
          <MoviesByLength />

        </div>
    );
}

export default App;
