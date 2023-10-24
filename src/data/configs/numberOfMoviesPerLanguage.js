import { getLanguageNames, numberOfMoviesPerLanguage, assignColor } from "../../utils.js";
import { colorArray } from "../../utils.js";

export function getPieConfig(numberOfLanguages) {
    // console.log(getLanguageNames(numberOfLanguages))

    return {
        labels: getLanguageNames(numberOfLanguages),
        datasets: [
            {
                data: numberOfMoviesPerLanguage(numberOfLanguages),
                label: "Number of movies by languages",
                backgroundColor: colorArray,
                borderWidth: 1,
                borderColor: '#000',
                // radius: '90%',
            },
        ],
    };
}
