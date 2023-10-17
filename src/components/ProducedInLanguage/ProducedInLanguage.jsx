import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { producedInLanguage } from '../../utils';

ChartJS.register(ArcElement, Tooltip, Legend)


// 1.
// [G]: Visa hur många filmer som producerats på respektive språk, med ett cirkeldiagram.
// [VG]: Datan ska sorteras, så att cirkeldiagrammet visar språken i stigande eller fallande ordning.
export default function ProducedInLanguage() {

    producedInLanguage('EngLish')


    return (
        <div className="ProducedInLanguage">
            <h2> Movies produced in language: </h2>
            
        </div>
    )
}