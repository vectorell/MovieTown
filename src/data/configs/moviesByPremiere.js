import { allMovies, numberOfMoviesPerPremiere, assignColor } from "../../utils"


export function getConfig() {

    // TODO: Refaktorera. Få väck hårdkodning

    const data = numberOfMoviesPerPremiere()
    // console.log('data: ', data)

    // TODO: Lägg till bättre färger i backgroundColor...
    
    return {
        labels: numberOfMoviesPerPremiere().months,
        datasets: [
            {
                data: numberOfMoviesPerPremiere().perCategory[0], 
                label: 'Documentaries',
                backgroundColor: 'red'
            },
            {
                data: numberOfMoviesPerPremiere().perCategory[1], 
                label: 'Specials',
                backgroundColor: 'blue'
            },
            {
                data: numberOfMoviesPerPremiere().perCategory[2], 
                label: 'Feature films',
                backgroundColor: 'green'
            },
        
        ],
    }
}