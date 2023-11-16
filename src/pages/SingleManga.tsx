import { useParams } from "react-router-dom"
const SingleManga = () => {

    const { mal_id } = useParams()

    return (
        <section>
            test {mal_id}
        </section>
    )
}

export default SingleManga