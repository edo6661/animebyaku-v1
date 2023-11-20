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
            {!isLoading && !anime.length ? '' : (
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
            {!isLoading && !anime.length ? (
                <h3 className="text-center font-bold text-2xl">0 recom from api</h3>
            ) : (
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
            )}
        </>
    )
}

export default SingleAnimeRecom