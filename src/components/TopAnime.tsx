import { AnimeData } from "../type";

const TopAnime = ({ images, title }: AnimeData) => {
    const { image_url } = images.webp

    return (
        <>
            <div className="innerTop">

                <img
                    className="topImage"
                    src={image_url} alt={title} />
                <p>{title}</p>
            </div>

        </>
    )
}

export default TopAnime