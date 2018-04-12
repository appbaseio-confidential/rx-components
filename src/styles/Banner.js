import styled, { css } from 'react-emotion';

import { getThemeProperty } from '../utils';

const Banner = styled.a`
	border-radius: 2px;
	position: relative;
	overflow: hidden;
	box-shadow: ${({ theme }) => getThemeProperty(theme, 'colors', 'boxShadow')};
`;

const image = css`
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 0;
	padding-top: 66.6%;
`;

export default Banner;
export { image };
