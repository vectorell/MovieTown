import {motion} from 'framer-motion'

export default function FramerRoute({ name, title, component }) {
    return (
        <motion.div 
            className={name}
            initial={{ filter:'saturate(0)'}}
            transition={{ duration: 1}}
            animate={{filter:'saturate(1)' }}
            >

                {title}
                {component}
                
            </motion.div>
    )
}