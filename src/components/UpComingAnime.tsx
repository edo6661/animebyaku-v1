import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import hoverVars from "../helpers/hoverAnimation";
import HomeImageHovered from "./HomeImageHovered";

const UpComingAnime = ({ images, title, mal_id, episodes, rank, source, type, year, genres, studios, score,favorites }: UpComing) => {

const [hover, setHover] = useState(false)

const { image_url } = images.webp

const hovered = () => setHover(true)
const unhovered = () => setHover(false)

return (
    <>
        <div className="innerTop relative">
            <Link to={`/anime/${mal_id}`}
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
                    <HomeImageHovered hover={hover} episodes={episodes} title={title} score={score}
                    rank={rank} source={source} type={type} year={year} genres={genres} studios={studios}
                    favorites={favorites}
                    />}
            </Link>

            <p className="titleAnime">{title}</p>

        </div>

    </>
)
}

export default UpComingAnime