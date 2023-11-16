import axiosAku from '../config/axiosConfig';

const getRequestTopAnime = async (topAnimePage: string) => {
	try {
		const response = axiosAku.get(`/top/anime?page=${topAnimePage}`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};
const getRequestTopManga = async (topMangaPage: string) => {
	try {
		const response = axiosAku.get(`/top/manga?page=${topMangaPage}`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};
const getRequestRandom = async () => {
	try {
		const response = axiosAku.get(`/random/anime`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};

const getRequestAnimeById = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/full`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};

export {
	getRequestAnimeById,
	getRequestRandom,
	getRequestTopAnime,
	getRequestTopManga,
};
