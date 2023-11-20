import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import SkeletonTopAnime from "../components/SkeletonTopAnime";
import TopManga from "../components/TopManga";
import TopMangaPageNumbers from "../components/pagination/TopMangaPageNumbers";
import Button from "../components/style/Button";
import useAnime from "../hooks/useAnime";

const AllTopManga = () => {
    const { topManga, loadingTopManga, isErrorTopManga: isErr, errorTopManga: err, topMangaData, handleNextTopManga, handlePrevTopManga, topMangaPage, setTopMangaPage } = useAnime();
    const skeletonAndData = loadingTopManga ? (
        Array(25).fill(null).map((_, index) => <SkeletonTopAnime key={index} />)
    ) : (
        topManga?.slice().map((anime: MangaData, i: number) =>
            <TopManga key={i} {...anime} />
        )
    )
    const errorAndError = isErr && <h2 className='text-3xl font-bold text-center'>{err.message}</h2>


    return (
        <section className="sectionTop">
            <article className="wrapperTop">
                {skeletonAndData}
                {errorAndError}
            </article>
            {!loadingTopManga && topMangaData && topMangaData.pagination && typeof topMangaData.pagination.last_visible_page !== 'undefined' &&
                (
                    <div className="wrapperButtonPagination">
                        <Button color="sc" onClick={handlePrevTopManga}
                            disabled={topMangaPage === 1}
                        >

                            <GrFormPreviousLink size={25} />
                        </Button>
                        <TopMangaPageNumbers topMangaData={topMangaData} setTopMangaPage={setTopMangaPage} topMangaPage={+topMangaPage} />
                        <Button color="sc" onClick={handleNextTopManga}
                            disabled={topMangaPage === topMangaData.pagination.last_visible_page}>
                            <GrFormNextLink size={25} />
                        </Button>
                    </div>
                )}
        </section>
    )
}

export default AllTopManga
