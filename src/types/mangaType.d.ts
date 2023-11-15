interface ImageFormat {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

interface Images {
	jpg: ImageFormat;
	webp: ImageFormat;
}

interface Title {
	type: string;
	title: string;
}

interface DateProp {
	day: number;
	month: number;
	year: number;
}

interface Published {
	from: string;
	to: string;
	prop: {
		from: DateProp;
		to: DateProp;
	};
	string: string;
}

interface Author {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

interface PaginationItems {
	count: number;
	total: number;
	per_page: number;
}

interface Pagination {
	last_visible_page: number;
	has_next_page: boolean;
	items: PaginationItems;
}

interface MangaData {
	mal_id: number;
	url: string;
	images: Images;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: string;
	title_japanese: string;
	type: string;
	chapters: number;
	volumes: number;
	status: string;
	publishing: boolean;
	published: Published;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	authors: Author[];
	serializations: Author[];
	genres: Author[];
	explicit_genres: Author[];
	themes: Author[];
	demographics: Author[];
}

interface Response {
	data: MangaData[];
	pagination: Pagination;
}
