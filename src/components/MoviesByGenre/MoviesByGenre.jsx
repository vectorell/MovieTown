import './MoviesByGenre.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend)

import { Pie, Bar } from 'react-chartjs-2';

import { getPieConfig } from '../../data/configs/moviesByGenre';

const pieConfig = getPieConfig()

export default function MoviesByGenre() {

    return (
        <div className="MoviesByGenre">
            <h1> Movies by genre </h1>
            <Bar data={pieConfig}/>
        </div>
    )
}