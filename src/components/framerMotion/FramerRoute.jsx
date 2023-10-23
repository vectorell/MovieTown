import { motion, AnimatePresence, easeInOut, easeIn, useMotionValue, useTransform } from 'framer-motion'
import { randomNumber } from '../../utils.js'

export default function FramerRoute({ name, title, component }) {

    // för 3d
    const cardX = useMotionValue(0)
    const cardY = useMotionValue(0)
    const rotateX = useTransform(cardY, [-300, 300], [10, -10])
    const rotateY = useTransform(cardX, [-300, 300], [-10, 10])
    const cardRotateX = useTransform(cardY, [-300, 300], [25, -25])
    const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25])

    const flipAnimation = {
        rotateX: randomNumber(-4, 4),
        rotateY: randomNumber(-4, 4), 
        rotateZ: randomNumber(-4, 4)
    }


    function handleMouseMove(e) {
        const offsetX = e.clientX - window.innerWidth / 2;
        const offsetY = e.clientY - window.innerHeight / 2;

        cardX.set(offsetX)
        cardY.set(offsetY)
    }

    function handleMouseLeave() {
        // cardX.set(0)
        // cardY.set(0)
    }

    return (
        <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            transition={ flipAnimation }
            className={name}
            >
                <motion.div
                style={{
                    margin: "auto",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    perspective: 800,
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: 'center',
                    rotateX,
                    rotateY
                }}
                >
                    {title}
                    {component}

                </motion.div>

                
            </motion.div>
    )
}