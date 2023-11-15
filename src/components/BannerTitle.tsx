import { motion } from 'framer-motion';
import jelly from '../helpers/typingAnimation';

const BannerTitle = ({ letter }: { letter: string }) => {

    return (
        <motion.span
            whileHover={jelly()}
            className="titleBanner">
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
    )
}

export default BannerTitle