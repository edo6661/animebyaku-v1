type ImageFormat = {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
};

type Images = {
	jpg: ImageFormat;
	webp: ImageFormat;
};

type Entry = {
	images: Images;
	mal_id: number;
	title: string;
	url: string;
};

type AnimeRecommendation = {
	entry: Entry;
	url: string;
	votes: number;
};
