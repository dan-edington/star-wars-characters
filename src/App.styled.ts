import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 20px;
	background-image: url('./assets/death star.png'), url('./assets/stars.jpeg');
	background-position: 90% 20%, 0% 0%;
	background-size: 30%, cover;
	background-repeat: no-repeat;
	overflow-x: hidden;
`;

export const AppTitle = styled.h1`
	font-family: var(--font-heading);
	${({ theme }) => theme.typography.h1};
	color: var(--colors-yellow);
	text-align: center;
	margin-bottom: 40px;
`;
