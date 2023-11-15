import useAnime from '../hooks/useAnime';
import { AnimeData } from '../type';
import SkeletonTopAnime from './SkeletonTopAnime';
import TopAnime from './TopAnime';



const TopAnimes = () => {
    const { topAnime, loadingTopAnime, isErrorTopAnime: isErr, errorTopAnime: err } = useAnime();

    const skeletonAndData = loadingTopAnime ? (
        Array(8).fill(null).map((_, index) => <SkeletonTopAnime key={index} />)

    ) : (
        topAnime.slice(0, 8).map((anime: AnimeData, i: number) =>
            <TopAnime key={i} {...anime} />
        )
    )

    console.log(err)

    const errorAndError = isErr && <h2 className='text-3xl font-bold text-center'>{err.message || err.status}</h2>

    return (
        <>
            <h1 className="heading">Top <span className="animeWord">Anime</span></h1>
            <article className="wrapperTop">
                {skeletonAndData}
                {errorAndError}
            </article>
        </>
    );
}

export default TopAnimes;
