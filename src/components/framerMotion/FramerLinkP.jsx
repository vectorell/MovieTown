import { easeInOut, motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function FramerLinkP({text}) {
    const [isSelected, setIsSelected] = useState(false)
    const [color, setColor] = useState('#ffffff')

    const hoverAnimation = {
        scale: [1.05, 1, 1.05],
        transition: {
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 0.5,
        },
        color: '#999',
    }

    // const tapAnimation = {
    //     perspective: 1000,
    //     transformStyle: 'preserve-3d',
    //     rotateY: 180,
    // }


    return (
        <motion.p

        initial= {{ color: '#ffffff' }}

        whileHover={ hoverAnimation }

        transition={{ 
            type: 'spring' 
        }}

        whileTap={{ 
            scale: 0.95,
            // color: '#000',
        }}
        

        // whileTap={ tapAnimation }
            >
            {text}
        </motion.p>
    )
}