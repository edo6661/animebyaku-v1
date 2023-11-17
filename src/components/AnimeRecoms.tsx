import { Link } from "react-router-dom"
import UseAnimeRecom from "../hooks/UseAnimeRecom"
import AnimeRecom from "./AnimeRecom"
import TemporaryError from "./TemporaryError"
import TemporaryLoading from "./TemporaryLoading"
import Button from "./style/Button"

type Props = {
    mal_id: string
}
const SingleAnimeRecom = ({ mal_id }: Props) => {

    const { anime, isLoading, isError, error } = UseAnimeRecom(mal_id)

    const loading = isLoading ? <TemporaryLoading /> : null
    const errorAndError = isError && error ? <TemporaryError message={error} /> : null

    return (
        <>
            {anime && (
                <h3 className=' secondWrapper mt-4 mb-8 text-xl font-semibold   '>If you like this anime, you might like...
                </h3>
            )}
            {loading}
            {errorAndError}
            <article className="wrapperAnimeRecom">
                {anime.slice(0, 4).map(anime =>
                    <AnimeRecom key={anime.entry.mal_id} {...anime} />
                )}
            </article>
            <div className="flex justify-center text-xl mt-6">
                <Button
                    className=" btn inline-block"
                    size="lg"
                    rounded="xl"
                >
                    <Link to={`/anime/recommendations/${mal_id}`} className="text-lg" >
                        SEE ALL RECOMMENDATIONS
                    </Link>
                </Button>

            </div>
        </>
    )
}

export default SingleAnimeRecom