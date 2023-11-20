import { useQuery } from '@tanstack/react-query';
import { getRequestRecomAnime } from '../api/fetching';
import { getRecommendation } from '../utils/getDataSafe';

const useUserRecom = () => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['userRecom'],
		queryFn: () => getRequestRecomAnime(),
		staleTime: Infinity,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	const dataUserRecom = data?.data;
	const userRecom = data ? getRecommendation(data.data) : [];

	return { userRecom, dataUserRecom, isError, error, isLoading };
};

export default useUserRecom;
