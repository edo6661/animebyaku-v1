import { Outlet } from "react-router-dom"
import SeasonTopSection from "../components/SeasonTopSection"

const AnimeSeason = () => {
    return (
        <>

            <section className='singleAnimeSection'>
                <SeasonTopSection />
            </section>
            <Outlet />
        </>
    )
}

export default AnimeSeason