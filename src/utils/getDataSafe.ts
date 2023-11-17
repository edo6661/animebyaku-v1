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
interface ResponseSingleAnime {
	data: RandomAnimeData;
}

interface ResponseRecomsAnime {
	data: AnimeRecommendation[];
}

type ResponseReviewAnime = {
	data: ReviewAnime[];
	pagination: Pagination;
};

const getTopAnime = (response: ResponseTopAnime) => {
	return response && response.data ? response.data : [];
};
const getTopManga = (response: ResponseTopManga) => {
	return response && response.data ? response.data : [];
};
const getTopRandom = (response: ResponseRandomAnime) => {
	return response && response.data
		? response.data
		: {
				aired: {
					from: '',
					prop: {
						from: { day: 0, month: 0, year: 0 },
						to: { day: 0, month: 0, year: 0 },
					},
					string: '',
					to: '',
				},
				airing: false,
				approved: false,
				background: '',
				broadcast: {
					day: '',
					time: '',
					timezone: '',
					string: '',
				},
				demographics: [],
				duration: '',
				episodes: 0,
				explicit_genres: [],
				favorites: 0,
				genres: [],
				streaming: [],
				images: {
					jpg: {
						image_url: '',
						small_image_url: '',
						large_image_url: '',
					},
					webp: {
						image_url: '',
						small_image_url: '',
						large_image_url: '',
					},
				},
				licensors: [],
				mal_id: 0,
				members: 0,
				popularity: 0,
				producers: [],
				rank: 0,
				rating: '',
				score: 0,
				scored_by: 0,
				season: '',
				source: '',
				status: '',
				studios: [],
				synopsis: '',
				title: '',
				title_english: '',
				title_japanese: '',
				title_synonyms: [],
				type: '',
				year: 0,
				url: '', // tambahkan ini
				trailer: {
					youtube_id: '',
					url: '',
					embed_url: '',
				}, // tambahkan ini
				titles: [], // tambahkan ini
				themes: [], // tambahkan ini
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  };
};

const getTopAnimeById = (response: ResponseSingleAnime) => {
	return response && response.data
		? response.data
		: {
				aired: {
					from: '',
					prop: {
						from: { day: 0, month: 0, year: 0 },
						to: { day: 0, month: 0, year: 0 },
					},
					string: '',
					to: '',
				},
				airing: false,
				approved: false,
				background: '',
				broadcast: {},
				demographics: [],
				duration: '',
				episodes: 0,
				explicit_genres: [],
				favorites: 0,
				genres: [],
				images: {
					webp: {
						image_url: '',
						small_image_url: '',
						large_image_url: '',
					},
					jpg: {
						image_url: '',
						small_image_url: '',
						large_image_url: '',
					},
				},
				licensors: [],
				mal_id: 0,
				members: 0,
				popularity: 0,
				producers: [],
				rank: 0,
				rating: '',
				score: 0,
				scored_by: 0,
				season: '',
				source: '',
				status: '',
				studios: [],
				synopsis: '',
				title: '',
				title_english: '',
				title_japanese: '',
				title_synonyms: [],
				type: '',
				year: 0,
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  };
};

const getAnimeRecom = (response: ResponseRecomsAnime) => {
	return response && response.data ? response.data : [];
};

const getAnimeReview = (response: ResponseReviewAnime) => {
	return response && response.data ? response.data : [];
};

export {
	getAnimeRecom,
	getAnimeReview,
	getTopAnime,
	getTopAnimeById,
	getTopManga,
	getTopRandom,
};
