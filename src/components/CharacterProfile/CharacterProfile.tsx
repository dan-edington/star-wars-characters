import { useEffect, useState } from 'react';

import { Loader } from '../Loader';

import { Person, Planet, Film, Species, Vehicle } from '../../types/SWAPI';

interface CharacterProfileProps {
	children?: React.ReactNode;
	characterData: Person;
	setCharacterDataFn: React.Dispatch<React.SetStateAction<Person | null>>;
}
//ABORT CONTROLLER
const fetchMultiple = (urlList: [string]): Promise<any> => {
	return new Promise((resolve) => {
		Promise.all(
			urlList.map(async (url) => {
				return await fetch(url);
			})
		)
			.then((response) => {
				return response.map(async (r) => {
					return await r.json();
				});
			})
			.then((data) => {
				resolve(Promise.all(data));
			});
	});
};

export default function CharacterProfile({
	characterData,
	setCharacterDataFn,
}: CharacterProfileProps) {
	const [completeCharacterData, setCompleteCharacterData] =
		useState<Person | null>(null);
	const [loading, setLoading] = useState(true);

	const labels = {
		name: 'Name',
		birth_year: 'Birth Year',
		eye_color: 'Eye Color',
		skin_color: 'Skin Color',
		mass: 'Mass',
		height: 'Height',
		gender: 'Gender',
		species: 'Species',
		starships: 'Starships',
		vehicles: 'Vehicles',
		films: 'Appears In',
	};

	useEffect(() => {
		const fetchExtraData = async () => {
			characterData.films = await fetchMultiple(
				characterData.films as [string]
			);
			characterData.species = await fetchMultiple(
				characterData.species as [string]
			);
			characterData.starships = await fetchMultiple(
				characterData.starships as [string]
			);
			characterData.vehicles = await fetchMultiple(
				characterData.vehicles as [string]
			);
			characterData.homeworld = await fetchMultiple([
				characterData.homeworld,
			] as [string]);
			setCompleteCharacterData(characterData);
			setLoading(false);
		};

		fetchExtraData();
	}, []);

	useEffect(() => {
		console.log(completeCharacterData);
	}, [completeCharacterData]);

	const hairColor = (hairColor: string) => {
		if (hairColor === 'n/a' || hairColor === 'none') return 'no';
		return hairColor;
	};

	const homeworld = (homeworld: [Planet]) => {
		if (Array.isArray(homeworld)) return homeworld[0].name;
		return 'Unknown';
	};

	const species = (species: [Species]) => {
		if (species.length < 1) return 'Human';
		return species[0].name;
	};

	const gender = (gender: string) => {
		if (gender === 'n/a') return '';
		return gender;
	};

	const vehiclesAndStarships = (vehicles: [Vehicle], starships: [Vehicle]) => {
		return vehicles
			.concat(starships)
			.map((el) => el.model)
			.join(', ')
			.replace(/,(?=[^,]*$)/, ' and ');
	};

	const films = (films: [Film]) => {
		return films
			.map((el) => el.title)
			.join(', ')
			.replace(/,(?=[^,]*$)/, ' and ');
	};

	return (
		<>
			{loading && <Loader />}
			{!loading && completeCharacterData && (
				<>
					<p>
						{`${completeCharacterData.name} is a ${gender(
							completeCharacterData.gender
						)} ${species(completeCharacterData.species as [Species])}, born ${
							completeCharacterData.birth_year
						} on ${homeworld(completeCharacterData.homeworld as [Planet])}.`}
					</p>
					<p>{`They have ${completeCharacterData.eye_color} eyes, ${hairColor(
						completeCharacterData.hair_color
					)} hair and ${completeCharacterData.skin_color} skin.`}</p>
					<p>{`${completeCharacterData.name} is ${completeCharacterData.height} cm Tall and weighs ${completeCharacterData.mass} Kg.`}</p>
					{(completeCharacterData.vehicles.length > 0 ||
						completeCharacterData.starships.length > 0) && (
						<p>{`They have driven or flown the ${vehiclesAndStarships(
							completeCharacterData.vehicles as [Vehicle],
							completeCharacterData.starships as [Vehicle]
						)}`}</p>
					)}
					{completeCharacterData.films.length > 0 && (
						<p>{`They appeared in ${films(
							completeCharacterData.films as [Film]
						)}.`}</p>
					)}

					<button onClick={() => setCharacterDataFn(null)}>Back</button>
				</>
			)}
		</>
	);
}
