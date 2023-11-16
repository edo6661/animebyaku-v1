import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import hoverVars from '../helpers/hoverAnimation';
import HomeImageHovered from './HomeImageHovered';

const TopManga = ({ images, title, rank, score, status, chapters, mal_id, genres }: MangaData) => {
    const { image_url } = images.webp

    const [hover, setHover] = useState(false)
    const hovered = () => setHover(true)
    const unhovered = () => setHover(false)

    return (
        <>
            <div className="innerTop relative">
                <Link to={`manga/${mal_id}`}
                    className=""
                >
                    <motion.img
                        variants={hoverVars}
                        initial="initial"
                        whileHover="animate"
                        exit="exit"
                        onMouseEnter={hovered}
                        onMouseLeave={unhovered}
                        className="topImage"
                        src={image_url}
                        alt={title} />
                    {hover &&
                        <HomeImageHovered title={title} hover={hover}
                            score={score} status={status} chapters={chapters} rank={rank} genres={genres}
                        />}
                </Link>

                <p>{title}</p>

            </div>

        </>
    )
}

export default TopManga