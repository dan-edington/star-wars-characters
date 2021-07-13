import { useEffect, useState } from 'react';

interface FetchHook<T> {
	loading: boolean;
	data: null | T;
	error: boolean;
	setUrl: (url: RequestInfo) => void;
	setOptions: (options: RequestInit) => void;
}

export default function useFetch<T>(
	url: RequestInfo,
	options?: RequestInit
): FetchHook<T> {
	const initialState = {
		loading: false,
		data: null,
		error: false,
	};
	const [fetchState, setFetchState] = useState(initialState);
	const [fetchUrl, setFetchUrl] = useState(url);
	const [fetchOptions, setFetchOptions] = useState(options);

	useEffect(() => {
		if (!fetchUrl) return;

		const controller = new AbortController();
		const signal = controller.signal;

		setFetchState({
			loading: true,
			data: null,
			error: false,
		});

		fetch(fetchUrl, {
			...fetchOptions,
			signal,
		})
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(`Fetch error: ${response.status}`);
				} else {
					return response.json();
				}
			})
			.then((data) => {
				setFetchState({
					loading: false,
					data,
					error: false,
				});
			})
			.catch((error) => {
				setFetchState({
					loading: false,
					data: null,
					error,
				});
			});

		return () => {
			controller.abort();
		};
	}, [fetchUrl, fetchOptions]);

	const setUrl = (url: RequestInfo) => setFetchUrl(url);
	const setOptions = (options: RequestInit) => setFetchOptions(options);

	return {
		...fetchState,
		setUrl,
		setOptions,
	};
}
