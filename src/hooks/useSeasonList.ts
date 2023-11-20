import { useQuery } from '@tanstack/react-query';
import { getRequestSeasonList } from '../api/fetching';
import { getSeasonList } from '../utils/getDataSafe';

const useSeasonList = () => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['seasonList'],
		queryFn: () => getRequestSeasonList(),
	});

	const seasonList = data ? getSeasonList(data.data) : [];
	return { seasonList, isError, error, isLoading };
};

export default useSeasonList;
