type Person = {
	mal_id: number;
	url: string;
	images: {
		jpg: {
			image_url: string;
		};
	};
	name: string;
};

type DataStaff = {
	person: Person;
	positions: string[];
};
