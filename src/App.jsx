import ProducedInLanguage from "./components/ProducedInLanguage/ProducedInLanguage.jsx";
import MoviesByPremiere from "./components/MoviesByPremiere/MoviesByPremiere.jsx";
import "./App.css";
import MoviesByLength from "./components/MoviesByLength/MoviesByLength.jsx";
import MoviesByGenre from "./components/MoviesByGenre/MoviesByGenre.jsx";
import Search from "./components/Seach/Search.jsx";
import { motion } from 'framer-motion';
import { useState } from "react";



function App() {
  const [showProducedInLanguage, setShowProducedInLanguage] = useState(false)

  function handleClick() {
    setShowProducedInLanguage(!showProducedInLanguage)
    console.log(showProducedInLanguage);
  }



    return (
        <div className="App">

          <h1> MovieTown </h1>

          <motion.div
            className="container"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.05, 
              cursor: 'pointer',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick()}
          > Show amount of movies per language </motion.div>

          {showProducedInLanguage && <ProducedInLanguage />}
          <MoviesByPremiere />
          <MoviesByLength />
          <MoviesByGenre />
          <Search />

        </div>
    );
}

export default App;
