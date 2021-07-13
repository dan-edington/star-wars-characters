import { useState, useEffect } from 'react';

import { Loader } from '../Loader';

import useFetch from '../../hooks/useFetch';

import { PeopleData } from '../../types/SWAPI';

import { CharacterListContainer, CharacterUL } from './CharacterList.styled';

export default function CharacterList() {
	const { loading, data, error, setUrl, setOptions } = useFetch<PeopleData>(
		'https://swapi.dev/api/people/'
	);

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
									<button>{el.name}</button>
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
