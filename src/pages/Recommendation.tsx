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
                        <div key={i} className='flex flex-col gap-2 border-b-4 py-4 border-solid border-main'>
                            <div>
                                <a className='text-xl font-semibold' href={recom.user.url} target='_blank'>
                                    {recom.user.username}
                                </a>
                                <p className='text-greenish'>{recom.date.split("T")[0]}</p>

                            </div>
                            <p className=''>{recom.content}</p>
                            <div className='grid md:grid-cols-2 justify-center gap-y-4 my-2'>
                                {recom.entry.map((e, i) => {
                                    return (
                                        <div key={i} className='flex flex-col gap-1 text-center justify-center mx-auto items-center '>
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