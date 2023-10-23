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

    function titleToHoverLabel() {

    }
    console.log(eachRuntime);

    return {
        labels: allMovies().map( movie => movie.Title),
        datasets: [{
            data: eachRuntime.sort((a,b) => a - b),
            label: 'Minutes',
            borderColor: '#3D405B',
            // pointRadius: 0.5,
            backgroundColor: '#81B29A',
            lineTension: 0.5,
            
        }]
    }
}