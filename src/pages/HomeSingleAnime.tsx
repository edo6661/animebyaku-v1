import { useParams } from "react-router-dom"
import SingleAnimeRecom from "../components/AnimeRecoms"
import SecondSingleAnimeDetails from "../components/SecondSingleAnimeDetails"
import TemporaryError from "../components/TemporaryError"
import TemporaryLoading from "../components/TemporaryLoading"
import UseSingleAnime from "../hooks/UseSingleAnime"

const HomeSingleAnime = () => {
    const { mal_id } = useParams()

    const { anime, isLoading, isError, error } = UseSingleAnime(mal_id ?? '')

    if (isLoading) return <TemporaryLoading />
    if (isError && error) return <TemporaryError message={error} />

    const noAnime = !anime && !isLoading && <h2 className=" col-span-full mx-auto text-center font-semibold sm:text-3xl text-2xl">0 data from api</h2>


    return (
        <>
            <section>
                {noAnime}
                {anime && !isLoading && (
                    <SecondSingleAnimeDetails
                        images={anime?.images}
                        title={anime?.title}
                        synopsis={anime?.synopsis}
                        genres={anime?.genres}
                        rating={anime?.rating}
                        status={anime?.status}
                        licensors={anime?.licensors}
                        episodes={anime?.episodes ?? 0}
                        studios={anime?.studios ?? []}
                        season={anime?.season}
                        score={anime?.score ?? 0}
                        rank={anime?.rank ?? 0}
                        year={anime?.year ?? 0}
                        popularity={anime.popularity}
                    />
                )}
            </section>
            <section className='singleAnimeSection'>
                {anime && mal_id && (
                    <SingleAnimeRecom mal_id={mal_id} />
                )}
            </section>
        </>
    )
}

export default HomeSingleAnime