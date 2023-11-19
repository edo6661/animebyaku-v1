type Characters = {
	character: Character;
	role: string;
	favorites: number;
	voice_actors: VoiceActor[]; // ini seharusnya array
};

type Character = {
	mal_id: number;
	url: string;
	images: {
		jpg: {
			image_url: string;
			small_image_url: string;
		};
		webp: {
			image_url: string;
			small_image_url: string;
		};
	};
	name: string;
};

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

type VoiceActor = {
	person: Person;
	language: string;
};
