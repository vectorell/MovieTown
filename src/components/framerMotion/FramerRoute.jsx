import { motion, AnimatePresence, easeInOut, easeIn } from 'framer-motion'
import { randomNumber } from '../../utils.js'

export default function FramerRoute({ name, title, component }) {

    const flipAnimation = {
        backgroundColor: '#0000000',
        rotateX: randomNumber(-4, 4),
        rotateY: randomNumber(-4, 4), 
        rotateZ: randomNumber(-4, 4)
    }

    return (
        <motion.div 
            className={name}

            initial={ flipAnimation }
            transition={{ duration: 0.8, ease: easeInOut, type: 'spring', stiffness: 300 }}

            animate={{ rotateY: 0, rotateX: 0, rotateZ: 0, backgroundColor: '#000000d1'}}
            exit={{ rotateY: 100, duration: 2 }}

            
            >

                {title}
                {component}
                
            </motion.div>
    )
}