import { useQuery } from '@tanstack/react-query';
import { getRequestMangaCharacter } from '../../api/fetching';
import { getMangaCharacters } from '../../utils/getDataSafe';
const useMangaCharacters = (mal_id: string) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['mangaCharacters', mal_id],
		queryFn: () => getRequestMangaCharacter(mal_id),
	});

	const character = data ? getMangaCharacters(data.data) : [];

	return { isLoading, isError, error, character };
};

export default useMangaCharacters;
