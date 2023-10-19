import { motion } from 'framer-motion'

export default function FramerPageTitle({ title }) {

    return (
        <motion.h1
            className="page-title"
            initial={{ color: '#fff', x: -20 }}
            transition={{ duration: 1, type: 'spring', stiffness: 200 }}
            animate={{ color: 'rgb(255, 198, 119)', x:0 }}> 

        { title } 
        
        </motion.h1>
    )
}