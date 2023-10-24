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

            initial={ flipAnimation }
            transition={{ duration: 0.8, ease: easeInOut, type: 'spring', stiffness: 300 }}
            animate={{ rotateY: 0, rotateX: 0, rotateZ: 0 }}
            exit={{ rotateY: 100, duration: 2 }}
            style={{ background: 'linear-gradient( to bottom left, #404040df, #000000)', padding: '1em', borderRadius: '3em' }}

            
            >

                {title}
                {component}
                
            </motion.div>
    )
}