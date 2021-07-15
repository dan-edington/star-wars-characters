import { useEffect, useState } from 'react';

import { Loader } from '../Loader';
import { Button } from '../Button';

import { ButtonContainer, ProfileText } from './CharacterProfile.styled';

import {
	hairColor,
	homeworld,
	species,
	gender,
	vehiclesAndStarships,
	films,
} from './CharacterProfile.functions';

import { Person, Planet, Film, Species, Vehicle } from '../../types/SWAPI';

interface CharacterProfileProps {
	children?: React.ReactNode;
	characterData: Person;
	setCharacterDataFn: React.Dispatch<React.SetStateAction<Person | null>>;
}

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{loading && <Loader />}
			{!loading && completeCharacterData && (
				<>
					<ProfileText>
						{`${completeCharacterData.name} is a ${gender(
							completeCharacterData.gender
						)} ${species(completeCharacterData.species as [Species])}, born ${
							completeCharacterData.birth_year
						} on ${homeworld(completeCharacterData.homeworld as [Planet])}.`}
					</ProfileText>
					<ProfileText>{`They have ${
						completeCharacterData.eye_color
					} eyes, ${hairColor(completeCharacterData.hair_color)} hair and ${
						completeCharacterData.skin_color
					} skin.`}</ProfileText>
					<ProfileText>{`${completeCharacterData.name} is ${completeCharacterData.height} cm Tall and weighs ${completeCharacterData.mass} Kg.`}</ProfileText>
					{(completeCharacterData.vehicles.length > 0 ||
						completeCharacterData.starships.length > 0) && (
						<ProfileText>{`They have driven or flown the ${vehiclesAndStarships(
							completeCharacterData.vehicles as [Vehicle],
							completeCharacterData.starships as [Vehicle]
						)}`}</ProfileText>
					)}
					{completeCharacterData.films.length > 0 && (
						<ProfileText>{`They appeared in ${films(
							completeCharacterData.films as [Film]
						)}.`}</ProfileText>
					)}
					<ButtonContainer>
						<Button onClick={() => setCharacterDataFn(null)} direction="left">
							Back
						</Button>
					</ButtonContainer>
				</>
			)}
		</>
	);
}
