import { Outlet, useParams } from "react-router-dom";
import SingleAnimeTopSection from "../components/SingleAnimeTopSection";
import TemporaryError from '../components/TemporaryError';
import TemporaryLoading from '../components/TemporaryLoading';
import UseSingleAnime from '../hooks/UseSingleAnime';

const SingleAnime = () => {

    const { mal_id } = useParams()

    const { anime, isLoading, isError, error } = UseSingleAnime(mal_id ?? '')


    if (isLoading) return <TemporaryLoading />
    if (isError && error) return <TemporaryError message={error} />

    return (
        <>
            <section className='singleAnimeSection'>
                <SingleAnimeTopSection title={anime?.title ?? ''} title_japanese={anime?.title_japanese ?? ''} />
            </section>
            <Outlet />
        </>

    )
}

export default SingleAnime