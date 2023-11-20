import { Link, useLocation } from 'react-router-dom';

interface Props {
    image: string;
    mal_id: string;
}

const HeaderSingleAnime = ({ image, mal_id }: Props) => {

    const location = useLocation()
    const isAnime = location.pathname.includes('anime')

    return (
        <div className='flex flex-col text-center gap-4 flex-1 justify-center'>
            <img className='rounded-xl' src={image} alt="" />
            <Link className='mx-auto btn' to={`/${isAnime ? 'anime' : 'manga'}/${mal_id}`}>Back to {isAnime ? 'Anime' : 'Manga'}</Link>
        </div>
    )
}

export default HeaderSingleAnime