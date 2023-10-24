import './MoviesByGenre.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend)

import { Pie, Bar } from 'react-chartjs-2';

import { getPieConfig } from '../../data/configs/moviesByGenre';

const pieConfig = getPieConfig()

export default function MoviesByGenre() {

    const options = {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                },
                title: {
                    display: true,
                    text: 'Genres',
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                },
                beginAtZero: true,
                title: {
                    color: 'white',
                    display: true,
                    text: 'Number of movies'
                }
            }
        }
    }
    return <Bar data={pieConfig} options={options}/>
}