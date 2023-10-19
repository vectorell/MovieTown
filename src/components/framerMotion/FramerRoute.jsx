import {motion} from 'framer-motion'

export default function FramerRoute({ name, title, component }) {
    return (
        <motion.div 
            className={name}
            initial={{opacity: 0}}
            transition={{ duration: 0.5}}
            animate={{opacity: 1}}
            >

                {title}
                {component}
                
            </motion.div>
    )
}