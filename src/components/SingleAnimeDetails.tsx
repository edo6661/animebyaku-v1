import { IoStarSharp } from "react-icons/io5";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import upperFirst from "../helpers/upperFirst";

interface Props {
    episodes: number;
    score: number;
    rank: number;
    season: string | undefined;
    year: number;
    studios: Producer[];
}


const SingleAnimeDetails = ({ episodes, studios, season, score, rank, year }: Props) => {
    return (
        <>
            <div className='innerSingleAnimeDetails'>
                <p>{episodes} Eps</p>
                <span><LiaGripLinesVerticalSolid color='white' size={40} /></span>
            </div>
            <div className='innerSingleAnimeDetails'>
                <p>{studios[0].name}</p>
                <span><LiaGripLinesVerticalSolid color='white' size={40} /></span>

            </div>
            <div className='innerSingleAnimeDetails'>
                <p>{upperFirst(season)} {year}</p>
                <span><LiaGripLinesVerticalSolid color='white' size={40} /></span>

            </div>
            <div className='innerSingleAnimeDetails'>
                <div className='relative right-0 flex  items-center'>
                    <IoStarSharp size={18} />
                    <p className='ml-1'>{score}</p>
                </div>
                <span><LiaGripLinesVerticalSolid color='white' size={40} /></span>

            </div>
            <div className='innerSingleAnimeDetails'>
                <p>Rank #{rank}</p>
            </div>
        </>
    )
}

export default SingleAnimeDetails