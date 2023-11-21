import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import TemporaryError from "../../components/TemporaryError"
import TemporaryLoading from "../../components/TemporaryLoading"
import SingleMangaRecom from "../../components/manga/SingleMangaRecom"
import useSingleManga from "../../hooks/manga/useSingleManga"
import SecondSingleMangaDetails from "./SecondSingleMangaDetails"

const HomeSingleManga = () => {
    const { mal_id } = useParams()

    const { manga, isLoading, isError, error } = useSingleManga(mal_id ?? '')

    if (isLoading) return <TemporaryLoading />
    if (isError && error) return <TemporaryError message={error} />
    const noManga = !manga && !isLoading && <h2 className=" col-span-full mx-auto text-center font-semibold sm:text-3xl text-2xl">0 data from api</h2>

    return (
        <>
            <section>
                <Helmet>
                    <title>{manga?.title}</title>
                </Helmet>
                {noManga}
                {manga && (
                    <SecondSingleMangaDetails
                        images={manga?.images}
                        title={manga?.title}
                        synopsis={manga?.synopsis}
                        genres={manga?.genres}
                        status={manga?.status}
                        score={manga?.score ?? 0}
                        rank={manga?.rank ?? 0}
                        popularity={manga.popularity}
                        volumes={manga.volumes}
                        chapters={manga.chapters}
                        authors={manga.authors}
                    />
                )}
            </section>
            <section className='singleAnimeSection'>
                {manga && mal_id && (
                    <SingleMangaRecom mal_id={mal_id} />
                )}
            </section>
        </>
    )
}

export default HomeSingleManga