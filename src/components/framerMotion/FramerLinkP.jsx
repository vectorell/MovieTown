import { easeInOut, motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function FramerLinkP({text}) {

    const hoverAnimation = {
        scale: [1.05, 1, 1.05],
        transition: {
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 0.5,
        },
        color: '#999',
    }

    return (
        <motion.p
        initial= {{ color: '#ffffff' }}
        whileHover={ hoverAnimation }
        transition={{ 
            type: 'spring' 
        }}
        whileTap={{ 
            scale: 0.95,
        }}
        >
            {text}
        </motion.p>
    )
}