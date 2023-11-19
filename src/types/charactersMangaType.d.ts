interface ImageFormat {
	image_url: string;
	small_image_url: string;
}

interface Images {
	jpg: ImageFormat;
	webp: ImageFormat;
}

interface CharacterManga {
	mal_id: number;
	url: string;
	images: Images;
	name: string;
}

interface CharacterMangas {
	character: Character;
	role: string;
}
