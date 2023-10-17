import { allMovies, numberOfMoviesPerPremiere } from "../../utils"


export function getConfig() {
    





    return {
        labels: numberOfMoviesPerPremiere().movieArray,
        datasets: [{
            data: numberOfMoviesPerPremiere().results,
            label: 'Number of movies on premiere'
        }]
    }
}