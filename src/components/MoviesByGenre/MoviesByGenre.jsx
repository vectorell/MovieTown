import './MoviesByGenre.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend)

import { Pie, Bar } from 'react-chartjs-2';

import { getPieConfig } from '../../data/configs/moviesByGenre';

const pieConfig = getPieConfig()

export default function MoviesByGenre() {
    return <Bar data={pieConfig}/>
}