import useWindowWidth from "../hooks/useWindowWidth";

interface Props {
    character: Character;
    voice_actors: VoiceActor[]
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
const DetailsAnimeChara = ({ character, images, voice_actors }: Props) => {

    const windowWidth = useWindowWidth()

    const englishActor = voice_actors.find(v => v.language == 'English');
    const japaneseActor = voice_actors.find(v => v.language == 'Japanese');

    const img = windowWidth < 480 && 'min-w-[2.75rem]'

    return (
        <>
            <div className="titleAnimeChara">
                <a href={character.url} target="_blank">
                    <img
                        className={`imgCharacters group-hover:opacity-80 duration-150 ${img}`}
                        src={images.webp.image_url} alt={character.name} />

                </a>
                <p className="ml-2 group-hover:opacity-80 duration-150 sm:text-base text-sm ">{character.name}</p>
            </div>
            <div className="detailsAnimeChara sm:text-base text-xs ">
                {japaneseActor?.person.name.length ? (
                    <>
                        <img src="/jp.png" className="h-4" />
                        < p className=" text-greenish">{japaneseActor?.person.name}</p>
                    </>
                ) : null}
                {englishActor?.person.name.length ? (
                    <>
                        <img src="/uk.png" className="h-6" />
                        < p className=" text-pinky">{englishActor?.person.name}</p>
                    </>
                ) : null}
            </div>
        </>

    )
}

export default DetailsAnimeChara