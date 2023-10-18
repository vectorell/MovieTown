import './MoviesByPremiere.css'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { getConfig } from '../../data/configs/moviesByPremiere'

ChartJS.register(
    CategoryScale, 
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const barConfig = getConfig()


export default function MoviesByPremiere() {

    return (
        <div className="MoviesByPremiere">
            <h1>Number of movies by Premiere date</h1>
            <Bar data={barConfig}/>
        </div>
    )
}