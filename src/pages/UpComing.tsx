import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"
import SkeletonTopAnime from "../components/SkeletonTopAnime"
import UpComingAnime from "../components/UpComingAnime"
import TopAnimePageNumbers from "../components/pagination/TopAnimePageNumbers"
import Button from "../components/style/Button"
import useAnime from "../hooks/useAnime"
import useUpComing from "../hooks/useUpComing"
const UpComing = () => {
    const { upComingPage, setUpComingPage, handleNextUpComing, handlePrevUpComing } = useAnime()
    const { dataUpComing, upComing, isError: isErr, isLoading, error: err } = useUpComing(upComingPage.toString())
    const skeletonAndData = isLoading ? (
        Array(25).fill(null).map((_, index) => <SkeletonTopAnime key={index} />)
    ) : (
        upComing?.slice().map((anime: UpComing, i: number) =>
            <UpComingAnime key={i} {...anime} />
        )
    )
    const errorAndError = isErr && err && <h2 className='text-3xl font-bold text-center'>{err.message}</h2>


    return (
        <section className="sectionTop">
            <article className="wrapperTop">
                {skeletonAndData}
                {errorAndError}
            </article>
            {!isLoading && dataUpComing && dataUpComing.pagination && typeof dataUpComing.pagination.last_visible_page !== 'undefined' &&
                (
                    <div className="wrapperButtonPagination">
                        <Button color="sc" onClick={handlePrevUpComing}
                            disabled={upComingPage === 1}>
                            <GrFormPreviousLink size={25} />
                        </Button>
                        <TopAnimePageNumbers topAnimeData={dataUpComing} setTopAnimePage={setUpComingPage} topAnimePage={+upComingPage} />
                        <Button color="sc" onClick={handleNextUpComing}
                            disabled={upComingPage === dataUpComing.pagination.last_visible_page}>
                            <GrFormNextLink size={25} />
                        </Button>
                    </div>
                )}
        </section>
    )

}

export default UpComing