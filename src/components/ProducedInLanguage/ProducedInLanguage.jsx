import './ProducedInLanguage.css'
import { motion } from 'framer-motion'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend)
import { Pie } from 'react-chartjs-2';
import { getPieConfig } from '../../data/configs/numberOfMoviesPerLanguage';
import { numberOfMoviesPerLanguage } from "../../utils.js";
import { useState } from 'react';

export default function ProducedInLanguage() {
    const [selectedLanguages, setSelectedLanguages] = useState(10);
    
    const pieConfig = getPieConfig(selectedLanguages)

    const isMax = selectedLanguages == numberOfMoviesPerLanguage().length

    function setCountIncrease() {
      !isMax && setSelectedLanguages(selectedLanguages + 1 )
    }

    function setCountDecrease() {
      !(selectedLanguages == 2) && 
        setSelectedLanguages(selectedLanguages - 1 )
    }

    const options = {
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      },
      elements: {
        arc: {
          radius: 50
        }
      }

    };

    return (
        <motion.div 
        className="ProducedInLanguage"
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          {selectedLanguages === 21 ? (
            <h2>(showing all languages): </h2>
          ): (
            <h2>(showing top {selectedLanguages}): </h2>
          )}
            <Pie data={pieConfig} options={options}/>

            <div>
              <button
                  onClick={() => setCountDecrease()}
                      >
                      {" "}
                      Less languages{" "}
                  </button>
                  <button
                    onClick={() => setCountIncrease()}
                  >
                      {" "}
                      More languages{" "}
                  </button>

            </div>
        </motion.div>
    )
}