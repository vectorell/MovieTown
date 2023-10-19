import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function FramerLinkP({text}) {
    return (
        <motion.p
        whileHover={{ scale: 1.1 }}>
            {text}
        </motion.p>
    )
}