import React from 'react';
import { func, shape, arrayOf, string, number, oneOfType } from 'prop-types';
import styled from 'react-emotion';
import Description from '../DescriptionRow';

const RenderValue = styled.button`
	border-style: solid;
	padding: 5px 10px;
	border-color: ${({
		theme: {
			colors: { primaryColor, borderAndLines },
		},
		active,
	}) => (active ? primaryColor : borderAndLines)};
	border-width: 0.1em;
	font-size: 18px;
	margin: 0px 10px 10px 0px;
	cursor: pointer;
`;

const RenderColor = styled.button`
	border-style: solid;
	padding: 5px 10px;
	height: 60px;
	width: 60px;
	cursor: pointer;
	background: ${({ color }) => color || 'black'};
	border-color: ${({
		theme: {
			colors: { primaryColor, borderAndLines },
		},
		active,
	}) => (active ? primaryColor : borderAndLines)};
	border-width: 0.15em;
	margin: 0px 10px 10px 0px;
`;

const OptionsSelector = ({ options, selectedOptions, onChange }) =>
	options.map((option, position) => {
		if (option.name.toLowerCase() === 'title') {
			return null;
		}
		return (
			<Description
				style={{
					paddingBottom: '6px',
				}}
				key={option.name}
				title={option.name}
				component={option.values.map(item =>
						(option.name === 'Color' ? (
							<RenderColor
								key={item.value}
								color={item.value}
								onClick={() => onChange(item.value, position)}
								active={selectedOptions.indexOf(item.value) > -1}
							/>
						) : (
							<RenderValue
								onClick={() => onChange(item.value, position)}
								active={selectedOptions.indexOf(item.value) > -1}
								key={item.value}
							>
								<span>{item.value}</span>
							</RenderValue>
						)))}
			/>
		);
	});
OptionsSelector.defaultProps = {
	options: [],
	selectedOptions: [],
	onChange: () => null,
};
OptionsSelector.propTypes = {
	options: arrayOf(shape({
			name: string,
			values: arrayOf(shape({
					value: oneOfType([string, number]),
				})),
		})),
	selectedOptions: arrayOf(oneOfType([string, number])),
	onChange: func,
};

export default OptionsSelector;
