interface Results {
	count: number;
	previous: null | string;
	next: null | string;
}

export interface Film {
	title: string;
}

export interface Species {
	name: string;
}

export interface Vehicle {
	model: string;
}

export interface Planet {
	name: string;
}
export interface Person {
	name: string;
	birth_year: string;
	eye_color: string;
	skin_color: string;
	hair_color: string;
	mass: string;
	height: string;
	gender: string;
	films: [string | Film];
	species: [string | Species];
	starships: [string | Vehicle];
	vehicles: [string | Vehicle];
	homeworld: string | [Planet];
}

export interface PeopleData extends Results {
	results: [Person];
}
