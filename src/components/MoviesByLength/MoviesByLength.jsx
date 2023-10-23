import './MoviesByLength.css'
import {Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import getLineConfig from '../../data/configs/moviesByLength.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
const lineConfig = getLineConfig()


export default function MoviesByLength() {

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Number of movies'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Minutes'
                }
            }
        }
    }

    return <Line data={lineConfig} options={options}/>
}