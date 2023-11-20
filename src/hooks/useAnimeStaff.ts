import { useQuery } from '@tanstack/react-query';
import { getRequestAnimeStaff } from '../api/fetching';
import { getAnimeStaff } from '../utils/getDataSafe';
const useAnimeStaff = (mal_id: string) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['animeStaff', mal_id],
		queryFn: () => getRequestAnimeStaff(mal_id),
		staleTime: Infinity,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	const staff = data ? getAnimeStaff(data.data) : [];

	return { staff, isLoading, isError, error };
};

export default useAnimeStaff;
