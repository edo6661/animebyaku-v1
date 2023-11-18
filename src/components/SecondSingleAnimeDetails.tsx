import { RxDividerVertical } from 'react-icons/rx';
import upperFirst from "../helpers/upperFirst";
import useWindowWidth from "../hooks/useWindowWidth";

type Props = {
    images: RandomAnimeData['images'];
    title: RandomAnimeData['title'];
    synopsis: RandomAnimeData['synopsis'];
    genres: RandomAnimeData['genres'];
    rating: RandomAnimeData['rating'];
    status: RandomAnimeData['status'];
    licensors: RandomAnimeData['licensors'];
    episodes: number;
    score: number;
    rank: number;
    season: string | undefined;
    year: number;
    studios: Producer[];
    popularity: number

};


const SecondSingleAnimeDetails = ({ images, title, synopsis, genres, status, episodes, studios, season, score, rank, year, popularity }: Props) => {

    const windowWidth = useWindowWidth()


    const lessMd = windowWidth < 786

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
            {genre.name}
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
                <article className={`flex flex-col gap-4 secondWrapper w-full text-lg`}>
                    <div>
                        <h2 className="text-center font-semibold text-xl">{title}</h2>
                    </div>
                    <div>
                        <img className={` topImage `} src={images.webp.image_url} alt={title} />
                    </div>
                    <div className={`innerDetailsMd`}>
                        <p className="text-center">{upperFirst(season)} {year}</p>
                        <div className="flexBetween">
                            <p>{studios[0].name}</p>
                            <p>{episodes} Eps</p>
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
                        <img className='topImage' src={images.webp.image_url} alt="" />
                        <div className="innerContainer">
                            <p className="text-xl font-semibold">{title}</p>
                            <div className="innerDetails ">
                                <p>{upperFirst(season)} {year}  </p>
                                <span><RxDividerVertical size={32} /></span>
                                <p>{studios[0].name}</p>
                                <span><RxDividerVertical size={32} /></span>
                                <p>{episodes} Eps</p>
                                <span><RxDividerVertical size={32} /></span>
                                <p>{status == 'Finished Airing' ? 'Finish' : 'Airing'}</p>
                                <span><RxDividerVertical size={32} /></span>
                            </div>
                            <div className="secondInnerDetails">
                                {secondInnerDetails}
                            </div>
                            <div>
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

export default SecondSingleAnimeDetails