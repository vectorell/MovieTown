import { getLanguageNames, numberOfMoviesPerLanguage, assignColor, colorArray } from "../../utils.js";

export function getPieConfig(numberOfLanguages) {

    return {
        labels: getLanguageNames(numberOfLanguages),
        datasets: [
            {
                data: numberOfMoviesPerLanguage(numberOfLanguages),
                label: "Number of movies by languages",
                backgroundColor: colorArray,
                borderWidth: 1,
                borderColor: '#000',
            },
        ],
    };
}
