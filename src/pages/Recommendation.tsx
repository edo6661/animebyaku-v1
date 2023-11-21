import { Link } from 'react-router-dom';
import TemporaryLoading from '../components/TemporaryLoading';
import useUserRecom from "../hooks/useUserRecom";

const Recommendation = () => {
    const { userRecom, isError: isErr, error: err, isLoading } = useUserRecom()

    const errorAndError = isErr && err && <h2 className='text-3xl font-bold text-center'>{err.message}</h2>
    if (isLoading) return <TemporaryLoading />
    return (
        <section className="sectionTop ">
            {errorAndError && (
                <article className="wrapperTop">
                    {errorAndError}
                </article>
            )}
            <article className="containerRecommendation">
                {!isLoading && userRecom.sort(() => Math.random() - 0.5).slice(0, 25).map((recom, i) => {
                    return (
                        <div key={i} className='innerRecommendation'>
                            <div>
                                <a className='text-xl font-semibold' href={recom.user.url} target='_blank'>
                                    {recom.user.username}
                                </a>
                                <p className='text-greenish'>{recom.date.split("T")[0]}</p>

                            </div>
                            <p className=''>{recom.content}</p>
                            <div className='detailsRecommendation'>
                                {recom.entry.map((e, i) => {
                                    return (
                                        <div key={i} className='secondDetailsRecommedation '>
                                            <p className='text-pinky font-semibold text-lg'>{e.title}</p>
                                            <Link to={`/anime/${e.mal_id}`}>
                                                <img
                                                    className='rounded-xl'
                                                    src={e.images.webp.image_url} alt={e.title} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default Recommendation