import { useParams } from "react-router-dom";
const AnimeReviews = () => {
    const { mal_id } = useParams()
    return (
        <section className="secondWrapper">
            <p>
                {mal_id}
            </p>
        </section>)
}

export default AnimeReviews