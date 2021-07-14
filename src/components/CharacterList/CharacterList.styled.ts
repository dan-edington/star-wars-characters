import styled from 'styled-components';

export const CharacterListContainer = styled.div``;

export const CharacterUL = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;

	li {
		margin-bottom: 10px;

		button {
			display: block;
			${({ theme }) => theme.typography.body};
			font-family: 'Righteous', sans-serif;
			color: var(--colors-white);
			text-shadow: 0 0 0px var(--colors-blue), 0 0 0px var(--colors-blue);
			background: none;
			border: 0;
			padding: 0;
			margin: 0 auto;
			appearance: none;
			transition: text-shadow 0.5s ease-out;

			&:hover {
				text-shadow: 0 0 40px var(--colors-blue), 0 0 20px var(--colors-blue);
				cursor: pointer;
			}
		}
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	--button-spacing: 25px;

	button {
		&:first-child {
			margin-right: var(--button-spacing);
		}
		&:last-child {
			margin-left: var(--button-spacing);
		}
	}
`;
