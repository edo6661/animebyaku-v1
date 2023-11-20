import { useQuery } from '@tanstack/react-query';
import { getRequestSeasonNow } from '../api/fetching';
import { getSeasonNow } from '../utils/getDataSafe';

const useSeasonNow = (seasonNowPage: string) => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['seasonNow'],
		queryFn: () => getRequestSeasonNow(seasonNowPage),
	});

	const dataSeasonNow = data?.data;
	const seasonNow = data ? getSeasonNow(data.data) : [];

	return { seasonNow, dataSeasonNow, isError, error, isLoading };
};

export default useSeasonNow;
