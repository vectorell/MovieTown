import { allMovies, numberOfMoviesPerPremiere, assignColor } from "../../utils"


export function getConfig() {

    // TODO: Refaktorera. Få väck hårdkodning

    const data = numberOfMoviesPerPremiere()
    
    return {
        labels: numberOfMoviesPerPremiere().months,
        datasets: [
            {
                data: numberOfMoviesPerPremiere().perCategory[0], 
                label: 'Documentaries',
                backgroundColor: '#81B29A'
            },
            {
                data: numberOfMoviesPerPremiere().perCategory[1], 
                label: 'Specials',
                backgroundColor: '#E07A5F'
            },
            {
                data: numberOfMoviesPerPremiere().perCategory[2], 
                label: 'Feature films',
                backgroundColor: '#3D405B'
            },
        
        ],
    }
}