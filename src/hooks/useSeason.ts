import { useQuery } from '@tanstack/react-query';
import { getRequestSeason } from '../api/fetching';
import { getSeason } from '../utils/getDataSafe';

const useSeason = ({
	year,
	season,
	seasonPage,
}: {
	year: string | number;
	season: string;
	seasonPage: string | number;
}) => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['season', { year, season, seasonPage }],
		queryFn: () => getRequestSeason({ year, season, seasonPage }),
	});

	const dataSeasonAnime = data?.data;
	const seasonAnime = data ? getSeason(data.data) : [];

	return { seasonAnime, dataSeasonAnime, isError, error, isLoading };
};

export default useSeason;
