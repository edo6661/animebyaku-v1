import { useParams } from "react-router-dom"
import SingleAnimeRecom from "../components/AnimeRecoms"
import SecondSingleAnimeDetails from "../components/SecondSingleAnimeDetails"
import SingleAnimeDetails from "../components/SingleAnimeDetails"
import UseSingleAnime from "../hooks/UseSingleAnime"

const HomeSingleAnime = () => {
    const { mal_id } = useParams()

    const { anime } = UseSingleAnime(mal_id ?? '')

    return (
        <>
            <section className="singleAnimeSection">
                <article className='flex flex-col gap-4'>
                    <div className='singleAnimeDetails'>
                        <div className='containerSingleAnime'>
                            <SingleAnimeDetails
                                title={anime?.title ?? ''}
                                episodes={anime?.episodes ?? 0}
                                studios={anime?.studios ?? []}
                                season={anime?.season}
                                score={anime?.score ?? 0}
                                rank={anime?.rank ?? 0}
                                year={anime?.year ?? 0}
                            />
                        </div>
                    </div>
                </article>
            </section>
            <section className="singleAnimeSection">
                {anime && (
                    <SecondSingleAnimeDetails
                        images={anime?.images}
                        title={anime?.title}
                        synopsis={anime?.synopsis}
                        genres={anime?.genres}
                        rating={anime?.rating}
                        status={anime?.status}
                        licensors={anime?.licensors}
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