import { AnimeData } from "../type";

const RandomAnime = ({ images, title }: AnimeData) => {
    const { image_url } = images.webp

    return (
        <>
            <div className="innerTop">
                <img
                    className="randomImage"
                    src={image_url} alt={title} />
                <p>{title}</p>
            </div>

        </>
    )
}

export default RandomAnime