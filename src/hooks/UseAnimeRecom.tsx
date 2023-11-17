import { useQuery } from '@tanstack/react-query';
import { getRequestAnimeRecommendations } from '../api/fetching';
import { getAnimeRecom } from '../utils/getDataSafe';


const UseAnimeRecom = (mal_id: string) => {

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ['animeRecom', mal_id],
        queryFn: () => getRequestAnimeRecommendations(mal_id)
    })

    const anime = data ? getAnimeRecom(data.data) : [];

    return { anime, isError, error, isLoading }
}

export default UseAnimeRecom