import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import OptionsSelector from './OptionsSelector';

const options = [
	{
		name: 'Size',
		values: [
			{
				value: 5,
			},
			{
				value: 6,
			},
			{
				value: 7,
			},
			{
				value: 8,
			},
		],
	},
	{
		name: 'Color',
		values: [
			{
				value: 'blue',
			},
			{
				value: 'brown',
			},
			{
				value: 'black',
			},
		],
	},
];

const selectedOptions = [6, 'brown'];

storiesOf('OptionsSelector', module)
	.add('default', () => (
		<div style={{ padding: '20px 20px' }}>
			<OptionsSelector options={options} />
		</div>
	))
	.add('with selected options', () => (
		<div style={{ padding: '20px 20px' }}>
			<OptionsSelector
				options={options}
				selectedOptions={selectedOptions}
				onChange={action('option changed')}
			/>
		</div>
	));
