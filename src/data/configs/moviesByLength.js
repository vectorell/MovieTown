import { allMovies, convertRuntimeToMinutes } from "../../utils.js"

export default function getLineConfig() {

    // TODO: Granska

    let eachRuntime = []

    // Skapar en array med alla olika visningslängder
    allMovies().forEach(movie => {
        eachRuntime.push(convertRuntimeToMinutes(movie.Runtime))
    })
    // console.log('eachRuntime: ', eachRuntime)


    // Räkna antalet filmer per visningslängd
    let runtimeCounts = {}
    eachRuntime.forEach(runtime => {
        (runtimeCounts[runtime] = (runtimeCounts[runtime] || 0) + 1)
    })
    // console.log('runtimeCounts: ', runtimeCounts)

    // Skapa en array med unika visningslängder
    const uniqueRuntimes = Array.from(new Set(eachRuntime)).sort((a,b) => a - b)
    // console.log('uniqueRuntimes: ',uniqueRuntimes)


    // Skapa en array för antalet filmer per visningslängd
    let movieCounts = uniqueRuntimes.map(runtime => runtimeCounts[runtime])
    // console.log('movieCounts: ', movieCounts)

    return {
        labels: [],
        datasets: [{
            data: runtimeCounts,
            label: 'Number of movies',
            borderColor: "rgb(199, 143, 64)",
            // pointRadius: 0.5,
            backgroundColor: "rgba(75,192,192,0)"
        }]
    }
}