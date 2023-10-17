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

    console.log('allGenres: ', allMovies)
    console.log('specifik: ', allMovies[2].Language)

    return allMovies
}


// Returnerar antal filmer för ett språk
export function producedInLanguage( lang ) {
    let movies = []

    // Normalisera språkinput
    let language = (lang.toLowerCase())
    language = language.charAt(0).toUpperCase() + language.slice(1)

    allMovies().forEach(movie => {
        movie.Language === lang && movies.push(movie)
    })
    return movies
}