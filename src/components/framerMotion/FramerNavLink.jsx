import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function FramerNavLink({to, text}) {
    return (
        <motion.div>
            <NavLink to={to}> {text} </NavLink>
        </motion.div>
    )
}