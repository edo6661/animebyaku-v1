import { RxDividerVertical } from 'react-icons/rx';
import useWindowWidth from '../../hooks/useWindowWidth';

type Props = {
    images: RandomAnimeData['images'];
    title: RandomAnimeData['title'];
    synopsis: RandomAnimeData['synopsis'];
    genres: RandomAnimeData['genres'];
    status: RandomAnimeData['status'];
    score: number;
    rank: number;
    popularity: number;
    volumes: number;
    authors: Author[];
    chapters: number
};



const SecondSingleMangaDetails = ({ images, title, synopsis, genres, status, score, rank, popularity, volumes, chapters, authors }: Props) => {

    const windowWidth = useWindowWidth()


    const lessMd = windowWidth < 840

    const secondInnerDetails = (
        <>
            <div className="secondInnerDetailsMd">
                <p className="specialWordAnimeDetails">Score</p>
                <p>{score}</p>
            </div>
            <div className="secondInnerDetailsMd">
                <p className="specialWordAnimeDetails">Popularity</p>
                <p>{popularity}</p>
            </div>
            <div className="secondInnerDetailsMd">
                <p className="specialWordAnimeDetails">Rank</p>
                <p>{rank}</p>
            </div>
        </>
    )

    const elementGenres = genres.map((genre, index) =>
        <span className={` text-greenish`} key={genre.mal_id}>
            {/* {genre.name} */}
            {index < genres.length - 1 ? ', ' : ''}
        </span>
    )

    const elementSynopsis = (
        <>
            <h4 className="specialWordAnimeDetails">Synopsis</h4>
            <p>{synopsis}</p>
        </>
    )
    return (
        <>
            {lessMd ? (
                <article className={`containerAnimeDetails`}>
                    <div>
                        <h2 className="headerAnimeDetails">{title}</h2>
                    </div>
                    <div>
                        <img className={`mx-auto rounded-md`} src={images.webp.image_url} alt={title} />
                    </div>
                    <div className={`innerDetailsMd`}>
                        <p className="text-center">{volumes} Volumes</p>
                        <div className="flexBetween">
                            <p>{chapters ? `${chapters} Chapter` : '0 from api'} </p>
                            <p>{authors[0].name}</p>
                            <p>{status == 'Finished Airing' ? 'Finish' : 'Airing'}</p>
                        </div>
                    </div>
                    <div className="flexBetween p-3">
                        {secondInnerDetails}
                    </div>

                    <div className="text-center">
                        {elementGenres}
                    </div>
                    <div className={`synopsisContainer`}>
                        {elementSynopsis}
                    </div>
                </article>
            ) : (
                <article className="secondWrapper">
                    <div className='flex text-lg'>
                        <img className='rounded-md' src={images.webp.image_url} alt={title} />
                        <div className="innerContainer">
                            <p className="text-xl font-semibold">{title}</p>
                            <div className="innerDetails ">
                                <p>{chapters ? `${chapters} Chapter` : '0 from api'} </p>
                                <span><RxDividerVertical size={32} /></span>
                                <p>{authors[0].name}</p>
                                <span><RxDividerVertical size={32} /></span>
                                <p className="text-center">{volumes} Volumes</p>
                                <span><RxDividerVertical size={32} /></span>
                                <p>{status == 'Finished Airing' ? 'Finish' : 'Airing'}</p>
                                <span><RxDividerVertical size={32} /></span>
                            </div>
                            <div className="secondInnerDetails">
                                {secondInnerDetails}
                            </div>
                            <div className='text-center'>
                                {elementGenres}
                            </div>
                        </div>
                    </div>
                    <div className={` mt-4 synopsisContainer`}>
                        {elementSynopsis}
                    </div>
                </article>
            )}



        </>

    )
}

export default SecondSingleMangaDetails