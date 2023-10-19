import {motion} from 'framer-motion'

export default function FramerRoute({ name, title, component }) {
    return (
        <motion.div 
            className={name}
            initial={{ opacity: 0.1, filter:'saturate(0)'}}
            transition={{ duration: 1}}
            animate={{opacity: 1, filter:'saturate(1)' }}
            >

                {title}
                {component}
                
            </motion.div>
    )
}