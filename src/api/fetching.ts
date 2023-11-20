import axiosAku from '../config/axiosConfig';

const getRequestTopAnime = async (topAnimePage: string) => {
	try {
		const response = axiosAku.get(`/top/anime?page=${topAnimePage}`);
		return response;
	} catch (err) {
		console.error(err);
	}
};
const getRequestTopManga = async (topMangaPage: string) => {
	try {
		const response = axiosAku.get(`/top/manga?page=${topMangaPage}`);
		return response;
	} catch (err) {
		console.error(err);
	}
};
const getRequestRandom = async () => {
	try {
		const response = axiosAku.get(`/random/anime`);
		return response;
	} catch (err) {
		console.error(err);
	}
};

const getRequestAnimeById = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/full`);
		return response;
	} catch (err) {
		console.error(err);
	}
};

const getRequestAnimeRecommendations = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/recommendations`);
		return response;
	} catch (err) {
		console.error(err);
	}
};
const getRequestAnimeReview = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/anime/${id}/reviews`);
		return response;
	} catch (err) {
		console.error(err);
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

const getRequestSeasonNow = async (seasonNowPage: string) => {
	try {
		const response = axiosAku.get(`/seasons/now?page=${seasonNowPage}`);
		return response;
	} catch (error) {
		console.error(error);
	}
};
const getRequestUpComing = async (upComingPage: string) => {
	try {
		const response = axiosAku.get(`/seasons/upcoming?page=${upComingPage}`);
		return response;
	} catch (error) {
		console.error(error);
	}
};
const getRequestSeason = async ({
	year,
	season,
	seasonPage,
}: {
	year: string | number;
	season: string;
	seasonPage: string | number;
}) => {
	try {
		const response = axiosAku.get(
			`/seasons/${year}/${season}?page=${seasonPage}`
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};
const getRequestSeasonList = async () => {
	try {
		const response = axiosAku.get(`/seasons`);
		return response;
	} catch (error) {
		console.error(error);
	}
};
const getRequestRecomAnime = async () => {
	try {
		const response = axiosAku.get(`/recommendations/anime`);
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
		console.error(err);
	}
};

const getRequestMangaRecommendations = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/recommendations`);
		return response;
	} catch (err) {
		console.error(err);
	}
};
const getRequestMangaReview = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/reviews`);
		return response;
	} catch (err) {
		console.error(err);
	}
};

const getRequestMangaCharacter = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/characters`);
		return response;
	} catch (err) {
		console.error(err);
	}
};

const getRequestMangaStaff = async (id: string | undefined) => {
	try {
		const response = axiosAku.get(`/manga/${id}/staff`);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export {
	getRequestAnimeById,
	getRequestAnimeCharacter,
	getRequestAnimeRecommendations,
	getRequestAnimeReview,
	getRequestAnimeStaff,
	getRequestMangaById,
	getRequestMangaCharacter,
	getRequestMangaRecommendations,
	getRequestMangaReview,
	getRequestMangaStaff,
	getRequestRandom,
	getRequestRecomAnime,
	getRequestSeason,
	getRequestSeasonList,
	getRequestSeasonNow,
	getRequestTopAnime,
	getRequestTopManga,
	getRequestUpComing,
};
