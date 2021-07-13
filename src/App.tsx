import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './styles';

import { CharacterList } from './components/CharacterList';

import { AppContainer, AppTitle } from './App.styled';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AppContainer>
				<AppTitle>Star Wars Characters</AppTitle>
				<CharacterList />
			</AppContainer>
		</ThemeProvider>
	);
}
