import { Link } from "react-router-dom";

const AnimeRecom = ({ entry, votes }: RecomMangaType) => {

    const { mal_id, images, title } = entry
    const { webp } = images
    const { image_url } = webp

    return (
        <>
            <div className="innerTop relative">
                <Link to={`/anime/${mal_id}`}
                    className=""
                >
                    <img
                        className="topImage"
                        src={image_url}
                        alt={title} />
                </Link>

                <p className="titleAnime">{title}</p>
                <p className="">{votes} Votes</p>

            </div>

        </>
    )
}

export default AnimeRecom