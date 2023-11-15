import cn from '../helpers/cn';

interface Variants {
	[key: string]: {
		[value: string]: string;
	};
}

interface StyleProps {
	[key: string]: string;
}

const variant = (base: string, variants: Variants) => {
	return function builder(props: StyleProps): string {
		const classes: string[] = [];

		Object.entries(props).forEach(([key, value]) => {
			if (!(key in variants)) return console.warn('ga ketemu puh key nya', key);
			classes.push(variants[key][value]);
		});
		return cn(base, ...classes);
	};
};

export default variant;
