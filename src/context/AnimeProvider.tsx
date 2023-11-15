import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getRequestRandom, getRequestTopAnime, getRequestTopManga } from '../api/fetching';
import { ChildrenType } from '../type';
import { getTopAnime, getTopManga, getTopRandom } from '../utils/getDataSafe';
import animeContext from './animeContext';
export const AnimeProvider = ({ children }: ChildrenType) => {

	// ! top anime

	const [topAnimePage, setTopAnimePage] = useState(1);

	const { data: topAnimes, isLoading: loadingTopAnime, isError: isErrorTopAnime, error: errorTopAnime } = useQuery({
		queryKey: ['animes', topAnimePage],
		queryFn: () => getRequestTopAnime(topAnimePage.toString())
	})

	const topAnime = topAnimes ? getTopAnime(topAnimes.data) : [];

	// ! top manga

	const [topMangaPage, setTopMangaPage] = useState(1);

	const { data: topMangas, isLoading: loadingTopManga, isError: isErrorTopManga, error: errorTopManga } = useQuery({
		queryKey: ['mangas', topMangaPage],
		queryFn: () => getRequestTopManga(topMangaPage.toString())
	})

	const topManga = topMangas ? getTopManga(topMangas.data) : [];

	// ! random anime

	const { data: randomsAnime, isLoading: loadingRandom, isError: isErrorRandom, error: errorRandom } = useQuery({
		queryKey: ['randomAnime'],
		queryFn: () => getRequestRandom()
	})

	const randomAnime = randomsAnime ? getTopRandom(randomsAnime.data) : [];

	return (
		<animeContext.Provider value={{
			// ! top anime
			topAnime, loadingTopAnime, topAnimePage, setTopAnimePage, isErrorTopAnime, errorTopAnime,

			// ! top random
			topMangaPage, loadingTopManga, setTopMangaPage, isErrorTopManga, errorTopManga, topManga,

			// ! random anime
			loadingRandom, isErrorRandom, errorRandom, randomAnime

		}}>
			{children}
		</animeContext.Provider>
	);
};

