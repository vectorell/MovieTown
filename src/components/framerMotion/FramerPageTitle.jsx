import { motion } from 'framer-motion'

export default function FramerPageTitle({ title }) {

    return (
        <motion.h1
            className="page-title"
            initial={{ color: '#fff', x: -70 }}
            transition={{ type: 'spring', duration: 1.7 }}
            animate={{ color: 'rgb(255, 198, 119)', x:0 }}
            > 

        { title } 
        
        </motion.h1>
    )
}