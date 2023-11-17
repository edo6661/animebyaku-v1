import { useQuery } from '@tanstack/react-query';
import { getRequestAnimeById } from '../api/fetching';
import { getTopAnimeById } from '../utils/getDataSafe';

const UseSingleAnime = (mal_id: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['anime', mal_id],
        queryFn: () => getRequestAnimeById(mal_id)
    })

    const anime = data ? getTopAnimeById(data.data) : null

    return { isLoading, isError, error, anime }
}

export default UseSingleAnime