import { useQuery } from '@tanstack/react-query';
import { getRequestUpComing } from '../api/fetching';
import { getUpComing } from '../utils/getDataSafe';

const useUpComing = (upComingPage: string) => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['upComing', { upComingPage }],
		queryFn: () => getRequestUpComing(upComingPage),
	});

	const dataUpComing = data?.data;
	const upComing = data ? getUpComing(data.data) : [];

	return { upComing, dataUpComing, isError, error, isLoading };
};

export default useUpComing;
