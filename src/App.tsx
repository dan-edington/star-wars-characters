import styled, { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './styles';

import { CharacterList } from './components/CharacterList';

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url('./assets/death star.png'), url('./assets/stars.jpeg');
	background-position: 90% 20%, 0% 0%;
	background-size: 30%, cover;
	background-repeat: no-repeat;
	overflow: hidden;
`;

const AppTitle = styled.h1`
	font-family: var(--font-heading);
	${({ theme }) => theme.typography.h1};
	color: var(--colors-yellow);
`;

function App() {
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

export default App;
