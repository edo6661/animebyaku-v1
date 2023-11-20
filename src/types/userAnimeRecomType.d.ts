type ImageType = {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
};

type EntryRecomUser = {
	mal_id: number;
	url: string;
	images: {
		jpg: ImageType;
		webp: ImageType;
	};
	title: string;
};

type UserType = {
	url: string;
	username: string;
};

type EntryRecomUserType = {
	mal_id: string;
	date: string;
	entry: EntryRecomUser[];
	content: string;
	user: UserType;
};

type PaginationType = {
	last_visible_page: number;
	has_next_page: boolean;
};

type ResponseRecomUser = {
	data: EntryRecomUserType[];
	pagination: PaginationType;
};
