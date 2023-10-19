import { allMovies, assignColor } from "../../utils";

export function getPieConfig() {
    const data = allMovies();
    let genres = [];

    // Hämta ut alla genres
    data.forEach((movie) => {
        !movie.Genre && (movie.Genre = "Documentary");
        genres.push(movie.Genre);
    });

    let genreCounts = {};
    genres.forEach((genre) => {
        genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });

    // Skapa en array med unika genres
    let uniqueGenres = Array.from(new Set(genres));
    // console.log(uniqueGenres.length);

    // Skapa en array för antalet filmer per visningslängd
    let movieCounts = uniqueGenres
        .map((genre) => genreCounts[genre])
        .sort((a, b) => b - a);

    return {
        labels: uniqueGenres,
        datasets: [
            {
                data: movieCounts,
                label: "Number of movies by genre",
                backgroundColor: assignColor(movieCounts),
            },
        ],
    };
}
