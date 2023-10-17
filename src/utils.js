import documentaries from './data/documentaries.json';
import featureFilms from './data/feature-films.json';
import specials from './data/specials.json';

export function logData() {
    console.log(JSON.stringify(documentaries));
    console.log(documentaries[1]);
}

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


// Hämta ut hur många filmer per (valfritt) det finns
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
export function numberOfMoviesPerPremiere() {
    let movieArray = [];
    
    allMovies().forEach(movie => {
        !movieArray.includes(movie.Premiere.split(' ')[0]) &&
        movieArray.push(movie.Premiere.split(' ')[0]);
    });
    
    console.log('movieArray: ', movieArray);




    let results = []
    movieArray.forEach((premiere) => {

        let filtered = allMovies().filter((movie) => (movie.Premiere.split(' ')[0] == premiere.split(' ')[0]))

        results.push(filtered.length);
    });

    console.log('results: ', results)
    return {results, movieArray}
}






// Skapa färger till alla språk
export function assignLanguageColor(numberOfLanguages) {
    let colorArray = [];
    getLanguageNames().forEach((language) => {
        colorArray.push(`rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`);
    });
    return colorArray;
}

export const randomNumber = () => {
    return Math.floor(Math.random() * (255 - 0 + 1) + 1);
};