import { css } from 'styled-components';

const rem = (size: string) => `${parseInt(size, 10) / 16}rem`;

function getTextStyles(
	fontWeight: number,
	fontSize: string,
	lineHeight: number
) {
	return css`
		font-weight: ${fontWeight};
		font-size: ${rem(fontSize)};
		line-height: ${lineHeight};
		margin: 0;
	`;
}

const typography = {
	h1: getTextStyles(400, '75px', 1.34),
	h2: getTextStyles(400, '42px', 1.34),
	h3: getTextStyles(400, '36px', 1.2),
	body: getTextStyles(400, '16px', 1.5),
};

export default typography;
