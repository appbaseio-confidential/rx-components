import styled, { css } from 'react-emotion';
import { getThemeProperty } from '../../utils';

const Navbar = styled('nav')`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 56px;
	background-color: ${props => getThemeProperty(props.theme, 'colors', 'primaryColor')};
	padding: 0 20px;
	line-height: 1.3;
	z-index: 100;

	& > .wrapper {
		max-width: 1200px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		& > div {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}

	.logo {
		margin-right: 20px;
	}

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;

		li {
			padding: 0 15px;

			a {
				font-size: 14px;
				color: #fff;
				letter-spacing: 0.02rem;
				text-transform: uppercase;
			}
		}
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
