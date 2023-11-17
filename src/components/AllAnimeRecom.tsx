import { useParams } from "react-router-dom"
const AllAnimeRecom = () => {
    const { mal_id } = useParams()
    return (
        <section className="secondWrapper">
            <p>
                {mal_id}
            </p>

        </section>
    )
}

export default AllAnimeRecom