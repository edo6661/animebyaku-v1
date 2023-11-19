interface ImageFormat {
	image_url: string;
}

interface Images {
	jpg: ImageFormat;
	webp: ImageFormat;
}

interface User {
	username: string;
	url: string;
	images: Images;
}

interface Reactions {
	overall: number;
	nice: number;
	love_it: number;
	funny: number;
	confusing: number;
	informative: number;
	well_written: number;
	creative: number;
}

interface ReviewManga {
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
}

interface Pagination {
	last_visible_page: number;
	has_next_page: boolean;
}

interface RootObject {
	data: Data[];
	pagination: Pagination;
}
