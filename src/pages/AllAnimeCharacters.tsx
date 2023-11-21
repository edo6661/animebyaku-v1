import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import HeaderSingleAnime from "../components/HeaderSingleAnime";
import TemporaryError from "../components/TemporaryError";
import TemporaryLoading from "../components/TemporaryLoading";
import DetailsAnimeChara from '../helpers/DetailsAnimeChara';
import UseSingleAnime from "../hooks/UseSingleAnime";
import useAnimeCharacter from "../hooks/useAnimeCharacter";
const AllAnimeCharacters = () => {

    const { mal_id } = useParams();

    const { character, isLoading, isError, error } = useAnimeCharacter(mal_id ?? '')

    const { anime, isLoading: loadingAnime, isError: isErrorAnime, error: errorAnime } = UseSingleAnime(mal_id ?? '')

    if (isLoading || loadingAnime) return <TemporaryLoading />
    if (isError || error || isErrorAnime || errorAnime) return <TemporaryError message={error ?? ''} />

    const mainCharas = character.filter(item => item.role === 'Main')
    const supportCharas = character.filter(item => item.role === 'Supporting')

    mainCharas.sort((a, b) => b.favorites - a.favorites)
    supportCharas.sort((a, b) => b.favorites - a.favorites)

    const noCharacter = !character.length && !isLoading && <h2 className=" col-span-full mx-auto text-center font-semibold sm:text-3xl text-2xl">0 reviews from api</h2>


    return (

        <section className="secondWrapper">
            <Helmet>
                <title>Characters</title>
            </Helmet>
            <article className="containerAllAnime">
                <div className="containerImageAnime">
                    <HeaderSingleAnime mal_id={mal_id ?? ''} image={anime?.images.webp.image_url ?? ''} />
                </div>
                <div className="containerAnimeChara ">
                    {noCharacter}
                    {character.length && <h2 className=" text-greenish titleAnimeChara">Main Characters</h2>}
                    <div className=" secondInnerAnimeChara">
                        {mainCharas.map((chara, i) => {
                            const { character, voice_actors } = chara
                            const { images } = chara.character

                            const bg = i % 2 === 0 ? null : 'bg-main';

                            return (
                                <div
                                    className={`${bg} innerAnimeChara group`}
                                    key={i}>
                                    <DetailsAnimeChara character={character} images={images} voice_actors={voice_actors} />
                                </div>
                            )
                        })}
                    </div>

                    {character.length && <h3 className="text-pinky titleAnimeChara mt-4">Supporting Characters</h3>}

                    {supportCharas.map((chara, i) => {
                        const { character, voice_actors } = chara
                        const { images } = chara.character
                        const bg = i % 2 === 0 ? '' : ' bg-main';
                        return (
                            <div
                                className={`flexBetween items-start ${bg} group`}
                                key={i}>
                                <DetailsAnimeChara character={character} images={images} voice_actors={voice_actors} />
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default AllAnimeCharacters