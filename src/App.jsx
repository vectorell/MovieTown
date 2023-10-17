import ProducedInLanguage from './components/ProducedInLanguage/ProducedInLanguage.jsx'
import { logData } from './utils.js';
import { allMovies } from './utils.js';
import './App.css'

function App() {

  // logData();
  // allMovies()

  return (
    <div className="App">
      <h1> MovieTown </h1>
      <ProducedInLanguage />
    </div>
  )
}

export default App
