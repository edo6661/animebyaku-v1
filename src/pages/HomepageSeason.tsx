import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import SeasonAnime from "../components/SeasonAnime";
import SkeletonTopAnime from "../components/SkeletonTopAnime";
import TopAnimePageNumbers from "../components/pagination/TopAnimePageNumbers";
import Button from '../components/style/Button';
import upperFirst from "../helpers/upperFirst";
import useAnime from "../hooks/useAnime";
import useSeason from "../hooks/useSeason";
import useSeasonList from "../hooks/useSeasonList";

const HomepageSeason = () => {
    const {
        // setYear ,
        year, season, seasonPage, setSeason, setSeasonPage, handleNextSeason, handlePrevSeason
    } = useAnime()

    const { seasonList, isError: isErr, error: err, isLoading } = useSeasonList()
    const { seasonAnime, dataSeasonAnime, isError, error, isLoading: loading } = useSeason({ year, season, seasonPage })

    const skeletonAndData = isLoading || loading ? (
        Array(25).fill(null).map((_, index) => <SkeletonTopAnime key={index} />)
    ) : (
        seasonAnime?.slice().map((anime: SeasonType, i: number) =>
            <SeasonAnime key={i} {...anime} />
        )
    )

    const errorAndError = isErr || isError && err && error && < h2 className='text-3xl font-bold text-center' > {err.message}</h2>


    return (
        <section className="sectionTop">
            <article className="secondWrapper flex">
                {seasonList.filter(item => item.year === 2023).map((s, i) => {
                    return (
                        <div className="flex" key={i}>
                            {s.seasons.map((singleSeason, index) => (
                                <Button
                                    className="block"
                                    onClick={() => setSeason(singleSeason)}
                                    color={`${season === singleSeason ? 'pr' : 'sc'}`} key={index}>{upperFirst(singleSeason)} {s.year}</Button>
                            ))}
                        </div>
                    )
                })}
            </article>
            <article className={`wrapperTop ${isLoading || loading && 'gap-10'}`}>
                {skeletonAndData}
                {errorAndError}
            </article>
            {!isLoading && !loading && dataSeasonAnime && dataSeasonAnime.pagination && typeof dataSeasonAnime.pagination.last_visible_page !== 'undefined' &&
                (
                    <div className="wrapperButtonPagination">
                        <Button color="sc" onClick={handlePrevSeason}
                            disabled={seasonPage === 1}>
                            <GrFormPreviousLink size={25} />
                        </Button>
                        <TopAnimePageNumbers topAnimeData={dataSeasonAnime} setTopAnimePage={setSeasonPage} topAnimePage={+seasonPage} />
                        <Button color="sc" onClick={handleNextSeason}
                            disabled={seasonPage === dataSeasonAnime.pagination.last_visible_page}>
                            <GrFormNextLink size={25} />
                        </Button>
                    </div>
                )}


        </section>
    )
}

export default HomepageSeason