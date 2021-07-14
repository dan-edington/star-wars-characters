import { Loader } from '../Loader';
import { Button } from '../Button';

import useFetch from '../../hooks/useFetch';

import { PeopleData, Person } from '../../types/SWAPI';

import {
	CharacterListContainer,
	CharacterUL,
	ButtonContainer,
} from './CharacterList.styled';

interface CharacterListProps {
	children?: React.ReactNode;
	setCharacterDataFn: React.Dispatch<React.SetStateAction<Person | null>>;
}

export default function CharacterList({
	setCharacterDataFn,
}: CharacterListProps) {
	const { loading, data, error, setUrl, setOptions } = useFetch<PeopleData>(
		'https://swapi.dev/api/people/'
	);

	const selectCharacter = (characterData: Person) => {
		setCharacterDataFn(characterData);
	};

	return (
		<CharacterListContainer>
			{loading && <Loader />}
			{error && <p>Something went wrong</p>}
			{!loading &&
				!error &&
				data?.results?.length &&
				data?.results?.length > 0 && (
					<div>
						<CharacterUL>
							{data?.results?.map((el) => (
								<li key={el.name}>
									<button onClick={() => selectCharacter(el)}>{el.name}</button>
								</li>
							))}
						</CharacterUL>
						<ButtonContainer>
							{data?.previous && (
								<Button
									onClick={() => setUrl(data.previous as RequestInfo)}
									direction="left"
								>
									Previous page
								</Button>
							)}
							{data?.next && (
								<Button
									onClick={() => setUrl(data.next as RequestInfo)}
									direction="right"
								>
									Next page
								</Button>
							)}
						</ButtonContainer>
					</div>
				)}
		</CharacterListContainer>
	);
}
