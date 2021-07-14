import styled from 'styled-components';

import { Lightsaber as LightSaberIcon } from '../../icons';

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler;
	direction?: 'left' | 'right';
}

const ButtonElement = styled.button`
	appearance: none;
	border: 0;
	padding: 0;
	margin: 0;
	background: none;
	cursor: pointer;
	color: var(--colors-white);
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	${({ theme }) => theme.typography.bodySmall};
	font-family: 'Righteous', sans-serif;
`;

const Lightsaber = styled(LightSaberIcon)<{ $direction: string }>`
	fill: ${({ $direction }) =>
		$direction === 'right'
			? 'var(--colors-lightsaber-red)'
			: 'var(--colors-lightsaber-blue)'};
	transform: rotate(
		${({ $direction }) => ($direction === 'right' ? '45deg' : '-135deg')}
	);
`;

export default function Button({
	children,
	onClick,
	direction = 'right',
}: ButtonProps) {
	return (
		<ButtonElement onClick={onClick}>
			{children}
			<Lightsaber aria-hidden $direction={direction} />
		</ButtonElement>
	);
}
