import { Loader } from '../Loader';

import useFetch from '../../hooks/useFetch';

import { PeopleData, Person } from '../../types/SWAPI';

import { CharacterListContainer, CharacterUL } from './CharacterList.styled';

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
						{data?.previous && (
							<button onClick={() => setUrl(data.previous as RequestInfo)}>
								Previous page
							</button>
						)}
						{data?.next && (
							<button onClick={() => setUrl(data.next as RequestInfo)}>
								Next page
							</button>
						)}
					</div>
				)}
		</CharacterListContainer>
	);
}
