import { motion, AnimatePresence, easeInOut, easeIn } from 'framer-motion'
import { randomNumber } from '../../utils.js'

export default function FramerRoute({ name, title, component }) {

    const flipAnimations = [
        {
            rotateX: -8,
            rotateY: 8, 
            rotateZ: 10
        },
        {
            rotateX: -8,
            rotateY: 8, 
            rotateZ: -10
        },
        {
            rotateX: 8,
            rotateY: 8,
            rotateZ: 10
        },
        {
            rotateX: 8,
            rotateY: 8,
            rotateZ: -10
        },
        {
            rotateX: 8,
            rotateY: -8,
            rotateZ: 10
        },
        {
            rotateX: 8,
            rotateY: -8,
            rotateZ: -10
        },
    ]

    return (
        <motion.div 
            className={name}
            // initial={{ opacity: 0.1, filter:'saturate(0)'}}
            initial={ flipAnimations[ randomNumber(0, flipAnimations.length ) ] }
            transition={{ duration: 0.5, ease: easeInOut }}
            // animate={{opacity: 1, filter:'saturate(1)' }}
            animate={{ rotateY: 0, rotateX: 0, rotateZ: 0}}
            exit={{ rotateY: 100, duration: 2 }}
            style={{ background: '#171717d1' }}
            
            >

                {title}
                {component}
                
            </motion.div>
    )
}