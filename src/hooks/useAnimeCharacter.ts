import { useQuery } from '@tanstack/react-query';
import { getRequestAnimeCharacter } from '../api/fetching';
import { getAnimeCharacters } from '../utils/getDataSafe';
const useAnimeCharacter = (mal_id: string) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['animeCharacters', mal_id],
		queryFn: () => getRequestAnimeCharacter(mal_id),
	});

	const character = data ? getAnimeCharacters(data.data) : [];

	return { isLoading, isError, error, character };
};

export default useAnimeCharacter;
