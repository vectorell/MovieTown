import { allMovies, convertRuntimeToMinutes } from "../../utils.js"

export default function getLineConfig() {

    let movieArray = []
    
    allMovies().forEach(movie => {
        movieArray.push(convertRuntimeToMinutes(movie.Runtime))
    })

    const orderedArray = movieArray.sort((a, b)  => a - b)

    return {
        labels: orderedArray,
        datasets: [{
            data: orderedArray,
            label: 'Number of movies',
            borderColor: "rgb(199, 143, 64)",
            backgroundColor: "rgba(75,192,192,0)"
        }]
    }
}