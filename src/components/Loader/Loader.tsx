import styled, { keyframes } from 'styled-components';

const LoaderAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoaderContainer = styled.div`
	display: block;
	position: relative;
	width: 80px;
	height: 80px;
	margin: 0 auto;

	div {
		position: absolute;
		border: 4px solid var(--colors-blue);
		opacity: 1;
		border-radius: 50%;
		animation: ${LoaderAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	div:nth-child(2) {
		animation-delay: -0.5s;
	}
`;

export default function Loader() {
	return (
		<LoaderContainer>
			<div></div>
			<div></div>
		</LoaderContainer>
	);
}
