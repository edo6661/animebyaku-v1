interface Props {
    character: Character;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
        };
    };
}
const DetailsMangaChara = ({ character, images }: Props) => {

    return (
        <>
            <div className="titleAnimeChara">
                <a href={character.url} target="_blank">
                    <img
                        className="imgCharacters group-hover:opacity-80 duration-150"
                        src={images.webp.image_url} alt={character.name} />

                </a>
                <p className="ml-2 group-hover:opacity-80 duration-150">{character.name}</p>
            </div>
            <div className="detailsAnimeChara ">
                <img src="/jp.png" className="h-4" />
                <p className=" text-greenish">nothing</p>
                <img src="/uk.png" className="h-6" />
                <p className=" text-pinky">from api</p>
            </div>
        </>

    )
}

export default DetailsMangaChara