import "./Search.css";
import { allMovies } from "../../utils.js";
import { useState, useRef } from "react";

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
                <input type="text" ref={inputRef} onChange={handleChange} />
                <button> Search </button>
            </div>



                {(searchResults.length > 1) ? 
                    searchResults.map( (result, index) => (
                        <div key={index}>
                            <p> {result.Title} </p>
                        </div>
                )) : (
                    searchResults.map( (result, index) => (
                        <div key={index} className="detailed-view">
                            <h1> Detailed information </h1>
                            <h2> {result.Title} </h2>
                            <h3> Genre: {result.Genre ? result.Genre : 'Documentary'} </h3>
                            <p> Runtime: {result.Runtime} </p>
                            <p> Language: {result.Language} </p>
                            <h4> Premiere: {result.Premiere} </h4>
                        </div>
                    ))

                )}


        </div>
    );
}
