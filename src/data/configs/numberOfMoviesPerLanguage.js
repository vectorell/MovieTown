import { getLanguageNames, numberOfMoviesPerLanguage, assignColor } from "../../utils.js";

export function getPieConfig(numberOfLanguages) {
    
    return {
        labels: getLanguageNames(numberOfLanguages),
        datasets: [
            {
                data: numberOfMoviesPerLanguage(numberOfLanguages),
                label: "Number of movies by languages",
                backgroundColor: assignColor(numberOfMoviesPerLanguage(numberOfLanguages)),
            },
        ],
    };
}
