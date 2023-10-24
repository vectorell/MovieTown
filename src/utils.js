import documentaries from './data/documentaries.json';
import featureFilms from './data/feature-films.json';
import specials from './data/specials.json';

export function logData() {
    console.log(JSON.stringify(documentaries));
    console.log(documentaries[1]);
}

// TODO: Simplifiera
export function allMovies() {
    const genres = [documentaries, featureFilms, specials];
    let allMovies = [];

    documentaries.forEach(documentary => {
        allMovies.push(documentary)
    });
    featureFilms.forEach(featureFilm => {
        allMovies.push(featureFilm)
    });
    specials.forEach(special => {
        allMovies.push(special)
    });

    return allMovies
}


// Hämta och för in språknamnen i en array
// export function getLanguageNames(max) {
//     let langArray = [];

//     allMovies().forEach((movie) => {
//         !langArray.includes(movie.Language) &&
//             langArray.push(movie.Language);
//     });

//     console.log('allMovies(): ', allMovies());
//     console.log('langArray: ', langArray);

//     console.log('langArray: ', langArray)
//     return langArray.slice(0, max);
// }


// Hämta och för in språknamnen i en array
export function getLanguageNames(max) {
    const data = allMovies()
    
    // Hämta ut språken
    let langArray= []
    data.forEach((movie) => {
        langArray.push(movie.Language);
    });

    // Räkna antalet filmer per språk
    let languageCounts = {}
    langArray.forEach(language => {
        (languageCounts[language] = (languageCounts[language] || 0) + 1)
    })

    // Gör om 
    const objectArray = Object.entries(languageCounts).sort((a, b) => b[1] - a[1])

    let arrayToReturn = []
    objectArray.forEach(language => {
        arrayToReturn.push(language[0]);
    })

    return arrayToReturn.slice(0, max)
}






// Hämta ut hur många filmer per språk det finns
export function numberOfMoviesPerLanguage(max) {
    let results = [];

    getLanguageNames().forEach((language) => {
        let filtered = allMovies().filter((movie) => movie.Language === language);
        results.push(filtered.length);
    });

    // console.log('getLanguageNames(): ', getLanguageNames())

    // console.log('results: ', results)

    let sortedResults = results.sort((a, b) => b - a);
    let pickedResults = sortedResults.slice(0, max);

    // console.log('sortedResults: ', sortedResults);
    return pickedResults;
}


// Hämta ut hur många filmer per premiär det finns
// export function numberOfMoviesPerPremiere() {
//     let movieArray = [];
//     let results = []
    
//     allMovies().forEach(movie => {
//         !movieArray.includes(movie.Premiere.split(' ')[0]) &&
//         movieArray.push(movie.Premiere.split(' ')[0]);
//     });

//     movieArray.forEach((premiere) => {

//         let filtered = allMovies().filter((movie) => (movie.Premiere.split(' ')[0] == premiere.split(' ')[0]))

//         results.push(filtered.length);
//     });

//     return {results, movieArray}
// }





// Hämta ut hur många filmer per premiär det finns
export function numberOfMoviesPerPremiere() {

    // TODO: Refaktorera. Få väck hårdkodning

    const categories = [documentaries, specials, featureFilms]
    let perCategory = []
    let months = []
    let categoryName = []
    
    for (let i = 0; i < categories.length; i++) {
        categoryName = categories
        let results = []

        categories[i].forEach(movie => {
            !months.includes(movie.Premiere.split(' ')[0]) &&
            months.push(movie.Premiere.split(' ')[0]);
        })

        months.forEach((premiere) => {
            let filtered = categories[i].filter((movie) => (movie.Premiere.split(' ')[0] == premiere.split(' ')[0]))
            results.push(filtered.length);
        });
        
        perCategory.push(results)
    }

    return {perCategory, months, categoryName}

}



export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};


// Skapa färger till datapunkter
export function assignColor(type) {
    let colorArray = [];
    type.forEach((item) => {
        colorArray.push(`rgba(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`);
    });
    console.log(colorArray);
    return colorArray;
}


// Räkna ut en films tid i minuter
export function convertRuntimeToMinutes(runtime) {
    if (!runtime) return

    let splittedRuntime = runtime.split(' ')

    if (splittedRuntime.length == 2) {

        if (splittedRuntime[1] === 'h') {
            return Number(splittedRuntime[0]) * 60
        } else {
            return Number(splittedRuntime[0])
        }

    } else {
        const hoursToMinutes = Number(splittedRuntime[0] * 60)
        const minutes = Number(splittedRuntime[2])
        return hoursToMinutes + minutes
    }
}

export let colorArray = [
    "rgba(199, 13, 45)",
    "rgba(250, 51, 20)",
    "rgba(7, 14, 217)",
    "rgba(43, 174, 6)",
    "rgba(56, 201, 115)",
    "rgba(178, 232, 180)",
    "rgba(217, 138, 181)",
    "rgba(179, 158, 78)",
    "rgba(154, 82, 233)",
    "rgba(140, 197, 114)",
    "rgba(64, 55, 6)",
    "rgba(44, 68, 19)",
    "rgba(188, 128, 222)",
    "rgba(107, 62, 164)",
    "rgba(150, 173, 104)",
    "rgba(146, 73, 218)",
    "rgba(13, 253, 242)",
    "rgba(166, 54, 141)",
    "rgba(59, 7, 217)",
    "rgba(245, 64, 219)",
    "rgba(186, 65, 162)"
  ]