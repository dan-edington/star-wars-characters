import styled, { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './styles';

const Test = styled.p`
	font-family: var(--font-heading);
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Test>Hello there!</Test>
		</ThemeProvider>
	);
}

export default App;
