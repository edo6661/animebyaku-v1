import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ButtonSeeMore from "../components/ButtonSeeMore";
import DatebayoHeading from "../components/DatebayoHeading";
import RandomAnimes from "../components/RandomAnimes";
import Stars from "../components/Stars";
import TopAnimes from "../components/TopAnimes";
import TopMangas from "../components/TopMangas";
import useAnime from "../hooks/useAnime";
const Homepage = () => {

    const { loadingTopAnime } = useAnime()

    const welcomeSentence = "Welcome to Animez".split("");

    const seeMore = !loadingTopAnime && <ButtonSeeMore children="See More" />
    
    const seeMoreAnime = (
        <div className="grid grid-cols-3 items-center gap-2">

            <hr className="hrVertical" />
            <Link className="seeMore" to='/topAnime'>{seeMore}</Link>
            <hr className="hrVertical" />
        </div>
    )
    const seeMoreManga = (
        <div className="grid grid-cols-3 items-center gap-2">
            <hr className="hrVertical" />
            <Link className="seeMore whitespace-nowrap" to='/topManga'>{seeMore}</Link>
            <hr className="hrVertical" />
        </div>

    )

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

            <section className="requestedDatebayo">
                <DatebayoHeading />
            </section>

            {/* ! top anime */}
            <section className="sectionTop ">
                <TopAnimes />
                {seeMoreAnime}
            </section >

            {/* ! top manga */}
            < section className='sectionTop bg-main py-8 rounded-xl' >
                <TopMangas />
                {seeMoreManga}
            </section >

            {/* ! random anime */}
            < section className='sectionRandom borderCard' >
                <RandomAnimes />
            </section >
            {annoying}
        </>
    )
}

export default Homepage