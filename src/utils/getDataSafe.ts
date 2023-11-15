import { AnimeData, Pagination } from '../type';

interface ResponseTopAnime {
	data: AnimeData[];
	pagination: Pagination;
}
interface ResponseRandomAnime {
	data: RandomAnimeData;
}
interface ResponseTopManga {
	data: MangaData[];
	pagination: Pagination;
}

const getTopAnime = (response: ResponseTopAnime) => {
	return response && response.data ? response.data : [];
};
const getTopManga = (response: ResponseTopManga) => {
	return response && response.data ? response.data : [];
};
const getTopRandom = (response: ResponseRandomAnime) => {
	return response && response.data ? response.data : [];
};

export { getTopAnime, getTopManga, getTopRandom };
