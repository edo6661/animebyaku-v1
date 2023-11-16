import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { IoStarSharp } from 'react-icons/io5';
import useWindowWidth from '../hooks/useWindowWidth';


const Star = ({ className, size }: { className: string, size: number }) => {

    const controls = useAnimation();
    const windowWidth = useWindowWidth()

    const hide = windowWidth < 440 && 'hidden'

    useEffect(() => {
        const interval = setInterval(async () => {
            await controls.start({ opacity: 0, transition: { duration: 1 } })
            setTimeout(async () => {
                await controls.start({ opacity: 1, transition: { duration: 1 } })
            }, 1000);
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    return (
        <motion.div
            className={`${className} ${hide}`}
            animate={controls}
        >
            <IoStarSharp size={size} />
        </motion.div>
    )
}

export default Star