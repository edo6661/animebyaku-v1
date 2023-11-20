import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getRequestRandom, getRequestTopAnime, getRequestTopManga } from '../api/fetching';
import { ChildrenType } from '../type';
import { getTopAnime, getTopManga, getTopRandom } from '../utils/getDataSafe';
import animeContext from './animeContext';
export const AnimeProvider = ({ children }: ChildrenType) => {
	// ! top anime

	const [topAnimePage, setTopAnimePage] = useState(1);
	const [seasonNowPage, setSeasonNowPage] = useState(1);
	const [upComingPage, setUpComingPage] = useState(1);
	const [recomPage, setRecomPage] = useState(1);

	const [seasonPage, setSeasonPage] = useState(1);
	const [season, setSeason] = useState("fall")
	const [year, setYear] = useState(2023)

	const [open, setOpen] = useState(false);
	const toggleNav = () => setOpen(prev => !prev)


	const { data: topAnimes, isLoading: loadingTopAnime, isError: isErrorTopAnime, error: errorTopAnime } = useQuery({
		queryKey: ['topAnime', { topAnimePage }],
		queryFn: () => getRequestTopAnime(topAnimePage.toString()),
	})

	const topAnime = topAnimes ? getTopAnime(topAnimes.data) : [];
	const topAnimeData = topAnimes ? topAnimes.data : []

	// ! top manga

	const [topMangaPage, setTopMangaPage] = useState(1);

	const { data: topMangas, isLoading: loadingTopManga, isError: isErrorTopManga, error: errorTopManga } = useQuery({
		queryKey: ['mangas', topMangaPage],
		queryFn: () => getRequestTopManga(topMangaPage.toString())
	})

	const topMangaData = topAnimes ? topAnimes.data : []

	const topManga = topMangas ? getTopManga(topMangas.data) : [];

	// ! random anime

	const { data: randomsAnime, isLoading: loadingRandom, isError: isErrorRandom, error: errorRandom } = useQuery({
		queryKey: ['randomAnime'],
		queryFn: () => getRequestRandom()
	})

	// const randomAnime = randomsAnime ? getTopRandom(randomsAnime.data) : {};
	const randomAnime = getTopRandom(randomsAnime ? randomsAnime.data : undefined)

	// ! anime

	// ! page
	const handleNextTopAnime = () => setTopAnimePage((prev: number) => prev + 1)
	const handlePrevTopAnime = () => setTopAnimePage((prev: number) => prev - 1)
	const handleNextTopManga = () => setTopMangaPage((prev: number) => prev + 1)
	const handlePrevTopManga = () => setTopMangaPage((prev: number) => prev - 1)
	const handleNextSeasonNow = () => setSeasonNowPage((prev: number) => prev + 1)
	const handlePrevSeasonNow = () => setSeasonNowPage((prev: number) => prev - 1)
	const handleNextUpComing = () => setUpComingPage((prev: number) => prev + 1)
	const handlePrevUpComing = () => setUpComingPage((prev: number) => prev - 1)
	const handleNextSeason = () => setSeasonPage((prev: number) => prev + 1)
	const handlePrevSeason = () => setSeasonPage((prev: number) => prev - 1)
	const handleNextRecom = () => setRecomPage((prev: number) => prev + 1)
	const handlePrevRecom = () => setRecomPage((prev: number) => prev - 1)

	return (
		<animeContext.Provider value={{
			// ! top anime
			topAnime, loadingTopAnime, topAnimePage, setTopAnimePage, isErrorTopAnime, errorTopAnime, topAnimeData,

			// ! top manga
			topMangaPage, loadingTopManga, setTopMangaPage, isErrorTopManga, errorTopManga, topManga, topMangaData,

			// ! random anime
			loadingRandom, isErrorRandom, errorRandom, randomAnime,

			// season
			seasonNowPage, setSeasonNowPage, upComingPage, setUpComingPage, seasonPage, setSeasonPage, recomPage, setRecomPage,


			// ! page
			handleNextTopManga, handlePrevTopManga,
			handleNextSeasonNow, handlePrevSeasonNow, handleNextUpComing, handlePrevUpComing, handleNextSeason, handlePrevSeason, handleNextRecom, handlePrevRecom, handleNextTopAnime, handlePrevTopAnime,
			// ! season
			season, setSeason, year, setYear,

			// ! nav
			open, setOpen, toggleNav

		}}>
			{children}
		</animeContext.Provider>
	);
};

