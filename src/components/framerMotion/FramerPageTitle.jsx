import { motion } from 'framer-motion'

export default function FramerPageTitle({ title }) {

    return (
        <motion.h1
            className="page-title"
            initial={{ color: '#fff', x: -30 }}
            transition={{ type: 'spring', duration: 1.5 }}
            animate={{ color: 'rgb(255, 198, 119)', x:0 }}> 

        { title } 
        
        </motion.h1>
    )
}