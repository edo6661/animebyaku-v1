import LinkSingleAnime from "./LinkSingleAnime";

type Props = {
    title: string;
    title_japanese: string;
}
const SingleAnimeTopSection = ({ title, title_japanese }: Props) => {


    return (
        <>
            <div className='titleSingleAnime'>
                <h2>{title}</h2>
                <p className=' text-unique'>Japanese title: {title_japanese}</p>
            </div>
            <div className='containerLinks'>
                <LinkSingleAnime />
            </div>
        </>

    )
}

export default SingleAnimeTopSection