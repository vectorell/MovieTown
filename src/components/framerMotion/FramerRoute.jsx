import { motion, AnimatePresence, easeInOut, easeIn } from 'framer-motion'
import { randomNumber } from '../../utils.js'

export default function FramerRoute({ name, title, component }) {

    const flipAnimation = {
        rotateX: randomNumber(-4, 4),
        rotateY: randomNumber(-4, 4), 
        rotateZ: randomNumber(-4, 4)
    }

    return (
        <motion.div 
            className={name}
            // initial={{ opacity: 0.1, filter:'saturate(0)'}}
            initial={ flipAnimation }
            transition={{ duration: 0.8, ease: easeInOut, type: 'spring', stiffness: 300 }}
            // animate={{opacity: 1, filter:'saturate(1)' }}
            animate={{ rotateY: 0, rotateX: 0, rotateZ: 0}}
            exit={{ rotateY: 100, duration: 2 }}
            // style={{ background: '#171717d1' }}
            
            >

                {title}
                {component}
                
            </motion.div>
    )
}