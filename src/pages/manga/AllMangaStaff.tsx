import { useParams } from "react-router-dom";
import HeaderSingleAnime from "../../components/HeaderSingleAnime";
import TemporaryError from "../../components/TemporaryError";
import TemporaryLoading from "../../components/TemporaryLoading";
import useSingleManga from "../../hooks/manga/useSingleManga";
import useAnimeStaff from "../../hooks/useAnimeStaff";
const AllAnimeStaff = () => {
    const { mal_id } = useParams();

    const { staff, isLoading, isError, error } = useAnimeStaff(mal_id ?? '')

    const { manga, isLoading: loadingAnime, isError: isErrorAnime, error: errorAnime } = useSingleManga(mal_id ?? '')

    if (isLoading || loadingAnime) <TemporaryLoading />
    if (isError || error || isErrorAnime || errorAnime) <TemporaryError message={error ?? ''} />

    const staffHasImage = staff.filter(s => s.person.images.jpg.image_url !== 'https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c')
    const noStaff = !staff.length && !isLoading && <h2 className=" col-span-full mx-auto text-center font-semibold sm:text-3xl text-2xl">0 reviews from api</h2>

    return (
        <section className="secondWrapper">
            <article className="containerAllAnime">
                <div className="containerImageAnime">
                    <HeaderSingleAnime mal_id={mal_id ?? ''} image={manga?.images.webp.image_url ?? ''} />
                </div>
                <div className="containerAnimeStaff">
                    {noStaff}
                    {staffHasImage.slice(0, 16).map((s) => {
                        return (
                            <div key={s.person.mal_id} className={`innerAnimeStaff group `}>
                                <div>
                                    <a href={s.person.url} target="_blank">
                                        <img
                                            className="imgAnimeStaff group-hover:opacity-80"
                                            src={s.person.images.jpg.image_url} alt="" />
                                    </a>
                                </div>
                                <div className="detailsAnimeStaff">
                                    <p className="titleAnimeStaff group-hover:opacity-80">{s.person.name}</p>
                                    <p className="text-greenish">{s.positions[0]}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default AllAnimeStaff