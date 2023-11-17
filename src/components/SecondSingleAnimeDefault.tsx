import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

type Props = {
    images: RandomAnimeData['images'];
    title: RandomAnimeData['title'];
    synopsis: RandomAnimeData['synopsis'];
    genres: RandomAnimeData['genres'];
    rating: RandomAnimeData['rating'];
    status: RandomAnimeData['status'];
    licensors: RandomAnimeData['licensors'];
};


const SecondSingleAnimeDetails = ({ images, title, synopsis, genres, rating, status, licensors }: Props) => {

    const windowWidth = useWindowWidth()


    const elementTags = windowWidth <= 820 && <h4 className=' col-span-2 text-xl font-semibold font-lato '>Tags</h4>
    const imageContainer = windowWidth < 812 && 'col-span-2'
    const imageSingleAnime = windowWidth < 812 && 'w-64'
    const genreContainer = windowWidth < 812 && 'col-start-3 row-start-1 '
    const synopsisContainer = windowWidth < 812 ? 'col-span-3' : 'col-span-2'


    return (
        <article className={`secondSingleAnimeDetails `}>
            <div className={`${imageContainer}`}>
                <img className={` ${imageSingleAnime} imgSingleAnime`} src={images.webp.image_url} alt={title} />
            </div>
            <div className={synopsisContainer}>
                <p>{synopsis}</p>
            </div>
            {/* <div className={`flex flex-col justify-center text-center ${genreContainer}`}> */}
            <div className={`secondInnerSingleAnime ${genreContainer}`}>
                {elementTags}
                {genres.map((genre) =>
                    <Link to={genre.name}
                        className={`linkGenre`} key={genre.mal_id}>
                        {genre.name}
                    </Link>
                )}
            </div>
            <div className='col-span-2'>
                <p>{rating}</p>
                <p>{status}</p>
                {licensors.map((license) =>
                    <p key={license.url}>{license.name}</p>
                )}
            </div>
        </article>
    )
}

export default SecondSingleAnimeDetails