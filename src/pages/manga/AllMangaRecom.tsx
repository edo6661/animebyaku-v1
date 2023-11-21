import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import TemporaryError from '../../components/TemporaryError';
import TemporaryLoading from '../../components/TemporaryLoading';
import useMangaRecom from '../../hooks/manga/useMangaRecom';

const AllMangaRecom = () => {
    const { mal_id } = useParams()

    const { manga, isError, error, isLoading } = useMangaRecom(mal_id ?? '')

    if (isLoading) return <TemporaryLoading />
    if (isError || error) return <TemporaryError message={error ?? ''} />

    const noManga = !manga.length && !isLoading && <h2 className=" col-span-full mx-auto text-center font-semibold sm:text-3xl text-2xl">0 data from api</h2>


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

    if (!manga.length && !isLoading) return <h2 className='text-center font-bold text-2xl'>No Recom From Api</h2>


    return (
        <section className="secondWrapper">
            <Helmet>
                <title>Recommendation</title>
            </Helmet>
            <div className="wrapperAnimeRecom">
                {noManga}
                {manga.slice(0, 16).map((a) => {
                    const { mal_id, title } = a.entry
                    const { webp } = a.entry.images
                    return (
                        <div className="innerTop " key={mal_id}>
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

export default AllMangaRecom