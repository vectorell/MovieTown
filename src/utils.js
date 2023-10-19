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
export function getLanguageNames(max) {
    let langArray = [];

    allMovies().forEach((movie) => {
        !langArray.includes(movie.Language) &&
            langArray.push(movie.Language);
    });
    return langArray.slice(0, max);
}


// Hämta ut hur många filmer per språk det finns
export function numberOfMoviesPerLanguage(max) {
    let results = [];

    getLanguageNames().forEach((language) => {
        let filtered = allMovies().filter((movie) => movie.Language === language);
        results.push(filtered.length);
    });

    let sortedResults = results.sort((a, b) => b - a);
    let pickedResults = sortedResults.slice(0, max);
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






















export const randomNumber = () => {
    return Math.floor(Math.random() * (255 - 0 + 1) + 1);
};


// Skapa färger till datapunkter
export function assignColor(type) {
    let colorArray = [];
    type.forEach((item) => {
        colorArray.push(`rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`);
    });
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