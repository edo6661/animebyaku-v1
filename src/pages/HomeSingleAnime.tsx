import { useParams } from "react-router-dom"
import SingleAnimeRecom from "../components/AnimeRecoms"
import SecondSingleAnimeDetails from "../components/SecondSingleAnimeDetails"
import UseSingleAnime from "../hooks/UseSingleAnime"

const HomeSingleAnime = () => {
    const { mal_id } = useParams()

    const { anime } = UseSingleAnime(mal_id ?? '')

    return (
        <>
            <section className="">
                {anime && (
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