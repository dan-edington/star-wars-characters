interface Results {
	count: number;
	previous: null | string;
	next: null | string;
}

interface Person {
	name: string;
	birth_year: string;
	eye_color: string;
	skin_color: string;
	mass: string;
	height: string;
	gender: string;
	films: [string];
	species: [string];
	starships: [string];
	vehicles: [string];
}

export interface PeopleData extends Results {
	results: [Person];
}
