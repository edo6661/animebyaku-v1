type ImageType = {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
};

type TrailerType = {
	youtube_id: string;
	url: string;
	embed_url: string;
};

type TitleType = {
	type: string;
	title: string;
};

type DatePropType = {
	day: number;
	month: number;
	year: number;
};

type AiredType = {
	from: string;
	to: string;
	prop: {
		from: DatePropType;
		to: DatePropType;
		string: string;
	};
};

type BroadcastType = {
	day: string;
	time: string;
	timezone: string;
	string: string;
};

type ProducerType = {
	mal_id: number;
	type: string;
	name: string;
	url: string;
};

type PaginationType = {
	last_visible_page: number;
	has_next_page: boolean;
	items: {
		count: number;
		total: number;
		per_page: number;
	};
};

type SeasonNowType = {
	mal_id: number;
	url: string;
	images: {
		jpg: ImageType;
		webp: ImageType;
	};
	trailer: TrailerType;
	approved: boolean;
	titles: TitleType[];
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: AiredType;
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: string;
	year: number;
	broadcast: BroadcastType;
	producers: ProducerType[];
	licensors: ProducerType[];
	studios: ProducerType[];
	genres: ProducerType[];
	explicit_genres: ProducerType[];
	themes: ProducerType[];
	demographics: ProducerType[];
};

type ResponseSeasonNow = {
	data: SeasonNowType[];
	pagination: PaginationType;
};
