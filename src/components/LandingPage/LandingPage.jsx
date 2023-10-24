import logo from '../../assets/logo.png'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function LandingPage() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

    function handleMouseMove(e) {
        const offsetX = e.clientX - window.innerWidth / 2
        const offsetY = e.clientY - window.innerHeight / 2

        mouseX.set(offsetX)
        mouseY.set(offsetY)
    }

    return (
        <motion.div className="LandingPage"
        style={{ perspective: 800, height: '80vh' }}
        onMouseMove={handleMouseMove}
        >

            <motion.img className="logo" src={logo} alt="logo" 
            style={{ 
                height: '45vh',
                transformStyle: "preserve-3d",
                perspective: 800,
                rotateX,
                rotateY 
            }}
            />
        </motion.div>
    )
}