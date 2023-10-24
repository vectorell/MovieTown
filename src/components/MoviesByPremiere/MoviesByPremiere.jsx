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

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                },
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                },
                title: {
                    display: true,
                    text: 'Months',
                    color: 'white',
                }
            },
            y: {
                ticks: {
                    color: 'white'
                },
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of movies',
                    color: 'white'
                }
            }
        }
    }
    return <Bar data={barConfig} options={options}/>
}