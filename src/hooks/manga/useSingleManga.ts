import { useQuery } from '@tanstack/react-query';
import { getRequestMangaById } from '../../api/fetching';
import { getTopMangaById } from '../../utils/getDataSafe';

const useSingleManga = (mal_id: string) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['singleManga', mal_id],
		queryFn: () => getRequestMangaById(mal_id),
	});

	const manga = data ? getTopMangaById(data.data) : null;

	return { isLoading, isError, error, manga };
};

export default useSingleManga;
