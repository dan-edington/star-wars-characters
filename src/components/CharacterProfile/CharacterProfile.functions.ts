import { Planet, Film, Species, Vehicle } from '../../types/SWAPI';

export const hairColor = (hairColor: string) => {
	if (hairColor === 'n/a' || hairColor === 'none' || hairColor === 'unknown')
		return 'no';
	return hairColor;
};

export const homeworld = (homeworld: [Planet]) => {
	if (Array.isArray(homeworld)) return homeworld[0].name;
	return 'Unknown';
};

export const species = (species: [Species]) => {
	if (species.length < 1) return 'Human';
	return species[0].name;
};

export const gender = (gender: string) => {
	if (gender === 'n/a' || gender === 'unknown') return '';
	return gender;
};

export const vehiclesAndStarships = (
	vehicles: [Vehicle],
	starships: [Vehicle]
) => {
	return vehicles
		.concat(starships)
		.map((el) => el.model)
		.join(', ')
		.replace(/,(?=[^,]*$)/, ' and ');
};

export const films = (films: [Film]) => {
	return films
		.map((el) => el.title)
		.join(', ')
		.replace(/,(?=[^,]*$)/, ' and ');
};
