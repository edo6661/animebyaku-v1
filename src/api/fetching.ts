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

const getRequestAnimeRecommendations = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/recommendations`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};
const getRequestAnimeReview = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/reviews`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};

const getRequestAnimeCharacter = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/characters`);
		return response;
	} catch (err) {
		console.error(err);
	}
};

const getRequestAnimeStaff = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/staff`);
		return response;
	} catch (error) {
		console.error(error);
	}
};
const getRequestAnimeNews = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/news`);
		return response;
	} catch (error) {
		console.error(error);
	}
};

// ! manga

const getRequestMangaById = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/full`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};

const getRequestMangaRecommendations = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/recommendations`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};
const getRequestMangaReview = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/reviews`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};

const getRequestMangaCharacter = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/characters`);
		return response;
	} catch (err) {
		// console.error(err);
	}
};

const getRequestMangaStaff = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/staff`);
		return response;
	} catch (error) {
		// console.error(error);
	}
};

export {
	getRequestAnimeById,
	getRequestAnimeCharacter,
	getRequestAnimeNews,
	getRequestAnimeRecommendations,
	getRequestAnimeReview,
	getRequestAnimeStaff,
	getRequestMangaById,
	getRequestMangaCharacter,
	getRequestMangaRecommendations,
	getRequestMangaReview,
	getRequestMangaStaff,
	getRequestRandom,
	getRequestTopAnime,
	getRequestTopManga,
};
