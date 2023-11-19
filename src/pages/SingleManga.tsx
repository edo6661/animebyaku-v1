import { Outlet } from "react-router-dom";
import SingleAnimeTopSection from "../components/SingleAnimeTopSection";

const SingleManga = () => {
    return (
        <>
            <section className='singleAnimeSection'>
                <SingleAnimeTopSection />
            </section>
            <Outlet />
        </>

    )
}

export default SingleManga