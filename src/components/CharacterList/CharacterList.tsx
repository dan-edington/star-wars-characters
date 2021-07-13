import { useState, useEffect } from 'react';

import useFetch from '../../hooks/useFetch';

import { PeopleData } from '../../types/SWAPI';

export default function CharacterList() {
	const { loading, data, error, setUrl, setOptions } = useFetch<PeopleData>(
		'https://swapi.dev/api/people/'
	);

	return (
		<>
			{loading && <p>LOADING</p>}
			{error && <p>Something went wrong</p>}
			{!loading &&
				!error &&
				data?.results?.length &&
				data?.results?.length > 0 && (
					<div>
						<ul>
							{data?.results?.map((el) => (
								<li key={el.name}>{el.name}</li>
							))}
						</ul>
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
		</>
	);
}
