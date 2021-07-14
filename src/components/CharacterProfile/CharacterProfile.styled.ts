import styled from 'styled-components';

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

export const ProfileText = styled.p`
	${({ theme }) => theme.typography.body};
	font-family: 'Righteous', sans-serif;
	color: var(--colors-white);
	text-align: center;
`;
