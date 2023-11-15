import useAnime from '../hooks/useAnime';
import RandomAnime from './RandomAnime';
import SkeletonTopAnime from './SkeletonTopAnime';



const RandomAnimes = () => {
    const { randomAnime, loadingRandom, isErrorRandom: isErr, errorRandom: err } = useAnime();

    const skeletonAndData = loadingRandom ? (
        <SkeletonTopAnime />
    ) : (
        <RandomAnime  {...randomAnime} />
    )

    const errorAndError = isErr && <h2 className='text-3xl font-bold text-center'>{err.message || err.status}</h2>

    return (
        <>
            <h1 className="heading">Random <span className="animeWord">Anime</span></h1>
            <article className="wrapperRandom">
                {skeletonAndData}
                {errorAndError}
            </article>
        </>
    );
}

export default RandomAnimes;
