import { useQuery } from '@tanstack/react-query';
import { getRequestMangaRecommendations } from '../../api/fetching';
import { getMangaRecom } from '../../utils/getDataSafe';

const useMangaRecom = (mal_id: string) => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['mangaRecom', mal_id],
		queryFn: () => getRequestMangaRecommendations(mal_id),
	});

	const manga = data ? getMangaRecom(data.data) : [];

	return { manga, isError, error, isLoading };
};

export default useMangaRecom;
