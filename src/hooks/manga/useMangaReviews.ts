import { useQuery } from '@tanstack/react-query';
import { getRequestMangaReview } from '../../api/fetching';
import { getMangaReview } from '../../utils/getDataSafe';

// ! last patch
const useMangaReview = (mal_id: string) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['mangaReviews', mal_id],
		queryFn: () => getRequestMangaReview(mal_id),
	});

	const reviews = data ? getMangaReview(data.data) : [];

	return { isLoading, isError, error, reviews };
};

export default useMangaReview;
