import { useQuery } from '@tanstack/react-query';
import { getRequestRecomManga } from '../../api/fetching';
import { getMangaRecommendation } from '../../utils/getDataSafe';

const useUserMangaRecom = () => {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ['userRecom'],
        queryFn: () => getRequestRecomManga(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    const dataUserRecom = data?.data;
    const userRecom = data ? getMangaRecommendation(data.data) : [];

    return { userRecom, dataUserRecom, isError, error, isLoading };
};

export default useUserMangaRecom;
