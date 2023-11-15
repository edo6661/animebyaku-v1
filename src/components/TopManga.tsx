
const TopManga = ({ images, title }: MangaData  ) => {
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

export default TopManga