import styled, { css } from 'react-emotion';
import { getThemeProperty } from '../../utils';

const Navbar = styled('nav')`
	background-color: ${props => getThemeProperty(props.theme, 'colors', 'primaryColor')};
	padding: 0 20px;
	height: 56px;

	& > .wrapper {
		max-width: 1200px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

const searchbox = css`
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
	border: 0;
	border-radius: 2px;
	height: 38px;
	min-width: 400px;

	input {
		border: 0;
		height: 38px;
		border-radius: 2px;
	}

	.suggestions-list {
		top: 37px;
		border: 0;
		border-top: 1px solid #eee;
		border-radius: 0 0 2px 2px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
	}
`;

export default Navbar;
export { searchbox };
