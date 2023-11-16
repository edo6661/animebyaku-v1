import useAnime from '../hooks/useAnime';
import SkeletonTopAnime from './SkeletonTopAnime';
import TopManga from './TopManga';



const TopMangas = () => {
    const { topManga, loadingTopManga, isErrorTopManga: isErr, errorTopManga: err } = useAnime();

    const skeletonAndData = loadingTopManga ? (
        Array(8).fill(null).map((_, index) => <SkeletonTopAnime key={index} />)

    ) : (
        topManga?.slice(0, 8).map((manga: MangaData, i: number) =>
            <TopManga key={i} {...manga} />
        )
    )


    // console.log(err)

    const errorAndError = isErr && <h2 className='text-3xl font-bold text-center'>{err.message}</h2>

    return (
        <>
            <h2 className="heading">Top Manga</h2>
            <article className="wrapperTop">
                {skeletonAndData}
                {errorAndError}
            </article>
        </>
    );
}

export default TopMangas;
