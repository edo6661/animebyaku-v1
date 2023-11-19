import { Link } from "react-router-dom"
import useMangaRecom from "../../hooks/manga/useMangaRecom"
import AnimeRecom from "../AnimeRecom"
import TemporaryError from "../TemporaryError"
import TemporaryLoading from "../TemporaryLoading"
import Button from "../style/Button"

type Props = {
    mal_id: string
}
const SingleMangaRecom = ({ mal_id }: Props) => {

    const { manga, isLoading, isError, error } = useMangaRecom(mal_id)

    const loading = isLoading ? <TemporaryLoading /> : null
    const errorAndError = isError && error ? <TemporaryError message={error} /> : null

    return (
        <>
            {manga && (
                <h3 className=' secondWrapper mt-4 mb-8 text-xl font-semibold   '>If you like this anime, you might like...
                </h3>
            )}
            {loading}
            {errorAndError}
            <article className="wrapperAnimeRecom">
                {manga.slice(0, 4).map(manga =>
                    <AnimeRecom key={manga.entry.mal_id} {...manga} />
                )}
            </article>
            <div className="flex justify-center text-xl mt-6">
                <Button
                    className=" btn inline-block"
                    size="lg"
                    rounded="xl"
                >
                    <Link to={`recommendations`} className="text-lg" >
                        SEE MORE RECOMMENDATIONS
                    </Link>
                </Button>

            </div>
        </>
    )
}

export default SingleMangaRecom