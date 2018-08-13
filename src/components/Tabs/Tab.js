import styled, { css } from 'react-emotion';

const Tab = styled.div`
	border-bottom: 1px solid #eee;
	padding: 8px 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	.anticon,
	.feather {
		transition: opacity 0.3s ease-in-out;
		opacity: 0;
		height: 17px;
	}
	&:hover {
		.anticon,
		.feather {
			opacity: 1;
		}
	}
	${({ active }) =>
		active &&
		css`
			box-shadow: 0 3px 0 #40a9ff;
			color: #40a9ff;
		`};
`;

export default Tab;
