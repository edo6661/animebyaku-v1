import { useParams } from "react-router-dom";
import HeaderSingleAnime from "../../components/HeaderSingleAnime";
import TemporaryError from "../../components/TemporaryError";
import TemporaryLoading from "../../components/TemporaryLoading";
import DetailsMangaChara from "../../components/manga/DetailsMangaChara";
import useMangaCharacters from "../../hooks/manga/useMangaCharacters";
import useSingleManga from "../../hooks/manga/useSingleManga";

const AllAnimeCharacters = () => {

    const { mal_id } = useParams();

    const { character, isLoading, isError, error } = useMangaCharacters(mal_id ?? '')

    const { manga, isLoading: loadingAnime, isError: isErrorAnime, error: errorAnime } = useSingleManga(mal_id ?? '')

    if (isLoading || loadingAnime) return <TemporaryLoading />
    if (isError || error || isErrorAnime || errorAnime) <TemporaryError message={error ?? ''} />

    const mainCharas = character.filter(item => item.role === 'Main')
    const supportCharas = character.filter(item => item.role === 'Supporting')

    const noCharacter = !character.length && !isLoading && <h2 className=" col-span-full mx-auto text-center font-semibold sm:text-3xl text-2xl">0 data from api</h2>


    return (

        <section className="secondWrapper">
            <article className="containerAllAnime">
                <div className="containerImageAnime">
                    <HeaderSingleAnime mal_id={mal_id ?? ''} image={manga?.images.webp.image_url ?? ''} />
                </div>
                <div className="containerAnimeChara ">
                    {noCharacter}
                    <h2 className=" text-greenish titleAnimeChara">Main Characters</h2>
                    <div className=" secondInnerAnimeChara">
                        {mainCharas.map((chara, i) => {
                            const { character } = chara
                            const { images } = chara.character
                            const bg = i % 2 === 0 ? null : 'bg-main';

                            return (
                                <div
                                    className={`${bg} innerAnimeChara group`}
                                    key={i}>
                                    <DetailsMangaChara character={character} images={images} />
                                </div>
                            )
                        })}
                    </div>
                    <h3 className="text-pinky titleAnimeChara mt-4">Supporting Characters</h3>
                    {supportCharas.map((chara, i) => {
                        const { character } = chara
                        const { images } = chara.character
                        const bg = i % 2 === 0 ? '' : ' bg-main';
                        return (
                            <div
                                className={`flexBetween items-start ${bg} group`}
                                key={i}>
                                <DetailsMangaChara character={character} images={images} />
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default AllAnimeCharacters