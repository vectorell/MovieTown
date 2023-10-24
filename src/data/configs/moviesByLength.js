import { allMovies, convertRuntimeToMinutes } from "../../utils.js"

export default function getLineConfig() {

    // TODO: Granska

    let eachRuntime = []

    // Skapar en array med alla olika visningslängder
    allMovies().forEach(movie => {
        eachRuntime.push(convertRuntimeToMinutes(movie.Runtime))
    })


    // Räkna antalet filmer per visningslängd
    let runtimeCounts = {}
    eachRuntime.forEach(runtime => {
        (runtimeCounts[runtime] = (runtimeCounts[runtime] || 0) + 1)
    })

    // Skapa en array med unika visningslängder
    const uniqueRuntimes = Array.from(new Set(eachRuntime)).sort((a,b) => a - b)


    // Skapa en array för antalet filmer per visningslängd
    let movieCounts = uniqueRuntimes.map(runtime => runtimeCounts[runtime])

    return {
        labels: allMovies().map( movie => 'Movie: ' + movie.Title),
        datasets: [{
            data: eachRuntime.sort((a,b) => a - b),
            label: 'Runtime (minutes)',
            borderColor: '#81B29A',
            borderWidth: 0.3,
            backgroundColor: '#E07A5F',
            lineTension: 0.5,
            
        }]
    }
}