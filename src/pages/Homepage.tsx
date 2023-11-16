import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ButtonSeeMore from "../components/ButtonSeeMore";
import RandomAnimes from "../components/RandomAnimes";
import Stars from "../components/Stars";
import TopAnimes from "../components/TopAnimes";
import TopMangas from "../components/TopMangas";
import useAnime from "../hooks/useAnime";
const Homepage = () => {

    const { loadingTopAnime } = useAnime()

    const welcomeSentence = "Welcome to Animez".split("");

    const seeMoreTopAnime = !loadingTopAnime && <ButtonSeeMore> See More Anime</ButtonSeeMore>
    const seeMoreTopManga = !loadingTopAnime && <ButtonSeeMore> See More Manga </ButtonSeeMore>

    const annoying = (
        <>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="246" height="168" viewBox="0 0 246 168" fill="none">
                <path d="M-43.6946 0.644867L245.457 167.587" stroke="white" strokeWidth="1.19244" />
            </svg>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="246" height="168" viewBox="0 0 246 168" fill="none">
                <path d="M-43.6946 167.587L245.457 0.644867" stroke="white" strokeWidth="1.19244" />
            </svg>
        </>
    )

    return (
        <>
            <section className="sectionBanner relative">
                <Stars />
                <Banner welcomeSentence={welcomeSentence} />
            </section>

            {/* ! top anime */}
            <section className="sectionTop ">
                <TopAnimes />


                <Link to='/topAnime'>{seeMoreTopAnime}</Link>
            </section>

            {/* ! top manga */}
            <section className='sectionTop bg-main py-8 rounded-xl'>
                <TopMangas />
                <Link to='/topManga'>{seeMoreTopManga}</Link>
            </section>

            {/* ! random anime */}
            <section className='sectionRandom borderCard'>
                <RandomAnimes />
            </section>
            {annoying}
        </>
    )
}

export default Homepage