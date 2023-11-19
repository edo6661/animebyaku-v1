import { Outlet } from "react-router-dom";
import SingleAnimeTopSection from "../components/SingleAnimeTopSection";

const SingleAnime = () => {
    return (
        <>
            <section className='singleAnimeSection'>
                <SingleAnimeTopSection />
            </section>
            <Outlet />
        </>

    )
}

export default SingleAnime