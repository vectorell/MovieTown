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


    return (
        <div className="MoviesByLength">
            <h1> Movies by length </h1>
            < Line data={lineConfig}/>
        </div>
    )
}