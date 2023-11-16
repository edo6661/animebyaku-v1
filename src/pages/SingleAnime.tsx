import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from "react-router-dom";
import { getRequestAnimeById } from '../api/fetching';
import LinkSingleAnime from '../components/LinkSingleAnime';
import SingleAnimeDetails from '../components/SingleAnimeDetails';
import useWindowWidth from '../hooks/useWindowWidth';
import { getTopAnimeById } from '../utils/getDataSafe';

const SingleAnime = () => {

    const { mal_id } = useParams()
    const windowWidth = useWindowWidth()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['anime', mal_id],
        queryFn: () => getRequestAnimeById(mal_id)
    })

    if (isLoading) return <p>loading...</p>
    const anime = data ? getTopAnimeById(data.data) : undefined

    const loading = isLoading && <h2 className='text-3xl font-bold text-center'>Loading...</h2>
    const errorAndError = isError && <h2 className='text-3xl font-bold text-center'>{error.message}</h2>

    const topSection = (
        <>
            {loading}
            {errorAndError}
            <h2>{anime?.title}</h2>
            <p className=' text-unique'>Japanese title: {anime?.title_japanese}</p>
        </>
    )

    console.log(anime)

    const elementTags = windowWidth <= 820 && <h4 className=' col-span-2 text-xl font-semibold font-lato '>Tags</h4>
    const imageContainer = windowWidth < 812 && 'col-span-2'
    const imageSingleAnime = windowWidth < 812 && 'w-64'
    const genreContainer = windowWidth < 812 && 'col-start-3 row-start-1 '
    const synopsisContainer = windowWidth < 812 ? 'col-span-3' : 'col-span-2'


    return (
        <>
            <section className='singleAnimeSection'>
                <article className='flex flex-col gap-3'>
                    <div className='titleSingleAnime'>
                        {topSection}
                    </div>
                    <div className='containerSingleAnime border-primaryCard border-4 border-solid rounded-xl'>
                        <LinkSingleAnime />
                    </div>
                    <div className='singleAnimeDetails'>
                        <div className='containerSingleAnime'>
                            <SingleAnimeDetails
                                episodes={anime?.episodes ?? 0}
                                studios={anime?.studios ?? []}
                                season={anime?.season}
                                score={anime?.score ?? 0}
                                rank={anime?.rank ?? 0}
                                year={anime?.year ?? 0}
                            />
                        </div>
                    </div>
                </article>
            </section>
            <section className="singleAnimeSection">
                <article className={`secondSingleAnimeDetails `}>
                    <div className={`${imageContainer}`}>
                        <img className={`rounded-xl ${imageSingleAnime} object-cover h-full`} src={anime?.images.webp.image_url} alt={anime?.title} />
                    </div>
                    <div className={synopsisContainer}>
                        <p>{anime?.synopsis}</p>
                    </div>
                    {/* <div className={`flex flex-col justify-center text-center ${genreContainer}`}> */}
                    <div className={`grid grid-cols-2 text-center ${genreContainer}`}>
                        {elementTags}
                        {anime?.genres.map((genre) =>
                            <Link to={genre.name}
                                className={`btn rounded-none sm:self-baseline
                                  sm:col-span-1 col-span-2 px-5]`} key={genre.mal_id}>
                                {genre.name}
                            </Link>
                        )}
                    </div>


                </article>
            </section>
        </>

    )
}

export default SingleAnime