import { allMovies, numberOfMoviesPerPremiere, assignColor } from "../../utils"


export function getConfig() {
    

    // TODO: a. [VG] Skilj mellan kategorier så att man kan se hur många documentaries, features och specials som släpptes under respektive månad. (Tre staplar per månad.)
    
    return {
        labels: numberOfMoviesPerPremiere().movieArray,
        datasets: [{
            data: numberOfMoviesPerPremiere().results,
            label: 'Number of movies on premiere',
            backgroundColor: assignColor(numberOfMoviesPerPremiere().movieArray)
        }]
    }
}