import "./Search.css";
import { allMovies } from "../../utils.js";
import { useState, useRef } from "react";
import { motion } from 'framer-motion'

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchString, setSearchString] = useState(false);
    const inputRef = useRef(null);

    function handleChange() {
        const string = inputRef.current.value

        if (string) {
            setSearchString(true)
            
            let filteredResult = allMovies().filter((movie) =>
                movie.Title.toLowerCase().includes(string.toLowerCase())
            );
    
            return setSearchResults(filteredResult)
        } else {
            setSearchString(false)
            setSearchResults([])
        }
    }

    return (
        <div className="Search">
            <div>
                <motion.p
                    initial={{ rotateX: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: 'easeOut'}}
                    animate={{ rotateX: 1080}}
                > ({ searchResults.length } results) </motion.p>
                
                <motion.input 
                type="text" 
                ref={inputRef} 
                onChange={handleChange} 
                initial={{ background: '#ffffff'}}
                transition={{ delay: 2, duration: 0.5}}
                animate={{ background: ['#FFFFFF', '#aaaaaa', '#FFFFFF', '#aaaaaa', '#FFFFFF'] }}
                
                />
            </div>

                {(searchResults.length > 1) ? 
                    searchResults.map( (result, index) => (
                        <motion.div
                        key={index} 
                        className="search-results"
                            >
                            <p> {result.Title} </p>
                        </motion.div>
                )) : (
                    searchResults.map( (result, index) => (
                        <motion.div 
                        key={index} 
                        className="detailed-view"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        >
                            <h1> {result.Title} </h1>
                            <div>
                                <h2> Premiere: </h2>
                                <p> {result.Premiere} </p>
                            </div>
                            <div>
                                <h2> Genre: </h2>
                                <p> {result.Genre ? result.Genre : 'Documentary'} </p>
                            </div>
                            <div>
                                <h2> Runtime: </h2>
                                <p>{result.Runtime}</p>
                            </div>
                            <div>
                                <h2> Language: </h2>
                                <p>{result.Language}</p>
                            </div>

                        </motion.div>
                    ))

                ) }


        </div>
    );
}
