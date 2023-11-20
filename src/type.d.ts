import { QueryFunctionContext } from 'react-query'; // import tipe ini jika Anda menggunakan react-query

interface AnimeType {
	errorTopAnime: AxiosError | null;
	errorTopManga: AxiosError | null;
	errorRandom: QueryError | null;
	// ! top anime
	topAnime: AnimeData[] | undefined;
	topAnimeData: {
		data: AnimeData[];
		pagination: Pagination;
	};
	loadingTopAnime: boolean;
	topAnimePage: number | string;
	setTopAnimePage: React.Dispatch<React.SetStateAction<number>>;
	isErrorTopAnime: boolean;

	// ! top manga
	topManga: MangaData[] | undefined;
	loadingTopManga: boolean;
	topMangaData: {
		data: MangaData[];
		pagination: Pagination;
	};
	isErrorTopManga: boolean;
	topMangaPage: number | string;
	setTopMangaPage: React.Dispatch<React.SetStateAction<number>>;

	// ! season
	seasonNowPage: number | string;
	setSeasonNowPage: React.Dispatch<React.SetStateAction<number>>;
	upComingPage: number | string;
	setUpComingPage: React.Dispatch<React.SetStateAction<number>>;
	recomPage: number | string;
	setRecomPage: React.Dispatch<React.SetStateAction<number>>;

	seasonPage: number;
	setSeasonPage: React.Dispatch<React.SetStateAction<number>>;
	season: string;
	setSeason: React.Dispatch<React.SetStateAction<string>>;
	year: number;
	setYear: React.Dispatch<React.SetStateAction<number>>;

	// ! random anime

	randomAnime: RandomAnimeData;
	loadingRandom: boolean;
	isErrorRandom: boolean;

	// ! pagination
	handleNextTopAnime: () => void;
	handlePrevTopAnime: () => void;
	handleNextTopManga: () => void;
	handlePrevTopManga: () => void;
	handleNextSeasonNow: () => void;
	handlePrevSeasonNow: () => void;
	handleNextUpComing: () => void;
	handlePrevUpComing: () => void;
	handleNextSeason: () => void;
	handlePrevSeason: () => void;
	handleNextRecom: () => void;
	handlePrevRecom: () => void;
}

interface ChildrenType {
	children: React.ReactNode;
}

interface DateDetail {
	day: number;
	month: number;
	year: number;
}

interface ImageDetail {
	image_url: string;
	large_image_url: string;
	small_image_url: string;
}

interface ImagesTopAnime {
	jpg: ImageDetail;
	webp: ImageDetail;
}

interface Genre {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

interface Broadcast {
	day: string;
	time: string;
	timezone: string;
	string: string;
}

interface AnimeData {
	aired: {
		from: string;
		prop: {
			from: DateDetail;
			to: DateDetail;
		};
		string: string;
		to: string;
	};
	airing: boolean;
	approved: boolean;
	background: string;
	broadcast: Broadcast;
	demographics: Genre[];
	duration: string;
	episodes: number;
	explicit_genres: string[];
	favorites: number;
	genres: Genre[];
	images: ImagesTopAnime;
	licensors: Genre[];
	mal_id: number;
	members: number;
	popularity: number;
	producers: Genre[];
	rank: number;
	rating: string;
	score: number;
	scored_by: number;
	season: string;
	source: string;
	status: string;
	studios: Genre[];
	synopsis: string;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	year: number;
}
interface Pagination {
	current_page: number;
	has_next_page: boolean;
	items: {
		count: number;
		total: number;
		per_page: number;
	};
	last_visible_page: number;
}

interface Response {
	data: AnimeData[];
	pagination: Pagination;
}

interface QueryKey {
	queryKey: [string, number];
}

interface UseQueryResult {
	data: Response | undefined;
	isLoading: boolean;
}

interface UseAnimeResult {
	topAnime: AnimeData[] | undefined;
	topAnimePage: number;
	setTopAnimePage: React.Dispatch<React.SetStateAction<number>>;
}

interface GetTopAnime {
	(page: string): Promise<Response>;
}

interface UseQuery {
	(arg: QueryFunctionContext<QueryKey>): UseQueryResult;
}
