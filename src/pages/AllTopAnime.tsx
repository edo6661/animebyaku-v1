import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import SeasonTopSection from "../components/SeasonTopSection";
import SkeletonTopAnime from "../components/SkeletonTopAnime";
import TopAnime from "../components/TopAnime";
import TopAnimePageNumbers from "../components/pagination/TopAnimePageNumbers";
import Button from "../components/style/Button";
import useAnime from "../hooks/useAnime";
import { AnimeData } from "../type";

const AllTopAnime = () => {
    const { topAnime, loadingTopAnime, isErrorTopAnime: isErr, errorTopAnime: err, topAnimeData, handleNextTopAnime, handlePrevTopAnime, setTopAnimePage, topAnimePage } = useAnime();
    const skeletonAndData = loadingTopAnime ? (
        Array(25).fill(null).map((_, index) => <SkeletonTopAnime key={index} />)
    ) : (
        topAnime?.slice().map((anime: AnimeData, i: number) =>
            <TopAnime key={i} {...anime} />
        )
    )
    const errorAndError = isErr && <h2 className='text-3xl font-bold text-center'>{err.message}</h2>


    return (
        <>
            <section className="singleAnimeSection">
                <SeasonTopSection />

            </section>
            <section className='sectionTop'>
                <article className="wrapperTop">
                    {skeletonAndData}
                    {errorAndError}
                </article>
                {!loadingTopAnime && topAnimeData && topAnimeData.pagination && typeof topAnimeData.pagination.last_visible_page !== 'undefined' &&
                    (
                        <div className="wrapperButtonPagination">
                            <Button color="sc" onClick={handlePrevTopAnime}
                                disabled={topAnimePage === 1}>
                                <GrFormPreviousLink size={25} />
                            </Button>
                            <TopAnimePageNumbers topAnimeData={topAnimeData} setTopAnimePage={setTopAnimePage} topAnimePage={+topAnimePage} />
                            <Button color="sc" onClick={handleNextTopAnime}
                                disabled={topAnimePage === topAnimeData.pagination.last_visible_page}>
                                <GrFormNextLink size={25} />
                            </Button>
                        </div>
                    )}
            </section>
        </>
    )
}

export default AllTopAnime
