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
		string: string;
	};
}

interface Author {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

interface RelationEntry {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

interface Relation {
	relation: string;
	entry: RelationEntry[];
}

interface External {
	name: string;
	url: string;
}

interface SingleMangaType {
	mal_id: number;
	url: string;
	images: Images;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
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
	relations: Relation[];
	external: External[];
}

type test = {
	images: RandomAnimeData['images'];
	title: RandomAnimeData['title'];
	synopsis: RandomAnimeData['synopsis'];
	genres: RandomAnimeData['genres'];
	rating: RandomAnimeData['rating'];
	status: RandomAnimeData['status'];
	licensors: RandomAnimeData['licensors'];
	episodes: number;
	score: number;
	rank: number;
	season: string | undefined;
	year: number;
	studios: Producer[];
	popularity: number;
};
