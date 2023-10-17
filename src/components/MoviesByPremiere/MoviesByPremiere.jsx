import './MoviesByPremiere.css'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale, 
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

import { getConfig } from '../../data/configs/moviesByPremiere'
const barConfig = getConfig()

import { numberOfMoviesPerPremiere } from '../../utils.js'


export default function MoviesByPremiere() {


    numberOfMoviesPerPremiere()




    return (
        <div className="MoviesByPremiere">
            <h1>Movies by Premiere</h1>
            <Bar data={barConfig}/>
        </div>
    )
}