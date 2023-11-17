type ImageFormat = {
	image_url: string;
};

type Images = {
	jpg: ImageFormat;
	webp: ImageFormat;
};

type User = {
	username: string;
	url: string;
	images: Images;
};

type Reactions = {
	overall: number;
	nice: number;
	love_it: number;
	funny: number;
	confusing: number;
	informative: number;
	well_written: number;
	creative: number;
};

type ReviewAnime = {
	user: User;
	mal_id: number;
	url: string;
	type: string;
	reactions: Reactions;
	date: string;
	review: string;
	score: number;
	tags: string[];
	is_spoiler: boolean;
	is_preliminary: boolean;
	episodes_watched: number;
};

type Pagination = {
	last_visible_page: number;
	has_next_page: boolean;
};
