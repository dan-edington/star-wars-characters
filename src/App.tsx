import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './styles';

import { CharacterList } from './components/CharacterList';
import { CharacterProfile } from './components/CharacterProfile';

import { AppContainer, AppTitle } from './App.styled';

import { Person } from './types/SWAPI';

export default function App() {
	const [characterData, setCharacterData] = useState<Person | null>(null);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AppContainer>
				<AppTitle>Star Wars Characters</AppTitle>
				{!characterData && (
					<CharacterList setCharacterDataFn={setCharacterData} />
				)}
				{characterData && (
					<CharacterProfile
						characterData={characterData}
						setCharacterDataFn={setCharacterData}
					/>
				)}
			</AppContainer>
		</ThemeProvider>
	);
}
