import { AnimatePresence, motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import UseAnimeRecom from "../hooks/UseAnimeRecom";
import TemporaryError from "./TemporaryError";
import TemporaryLoading from "./TemporaryLoading";
const AllAnimeRecom = () => {
    const { mal_id } = useParams()

    const { anime, isError, error, isLoading } = UseAnimeRecom(mal_id ?? '')

    if (isLoading) return <TemporaryLoading />
    if (isError && error) return <TemporaryError message={error} />

    const imgVars = {
        initial: {
            scale: 1
        },
        animation: {
            scale: 1.050,
            transition: {
                duration: 0.2,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scale: 1
        }
    }


    return (
        <section className="secondWrapper">
            <div className="grid grid-cols-base-auto-fit gap-x-4 gap-y-8">
                {anime.slice(0, 10).map((a) => {
                    const { mal_id, title } = a.entry
                    const { webp } = a.entry.images
                    return (
                        <div className="flex flex-col text-center gap-y-2" key={mal_id}>
                            <AnimatePresence>
                                <Link to={`/anime/${mal_id.toString()}`}>
                                    <motion.img
                                        variants={imgVars}
                                        initial="initial"
                                        whileHover="animation"
                                        exit="exit"
                                        src={webp.image_url}
                                        alt={a.entry.mal_id.toString()}
                                        className="topImage " />
                                </Link>
                            </AnimatePresence>
                            <p className="font-semibold font-lg mt-1">{title}</p>
                            <p>{a.votes} Votes</p>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default AllAnimeRecom