import React from 'react';
import styled from 'react-emotion';
import { func, arrayOf, string, shape } from 'prop-types';

import Tab from './Tab';

const Container = styled('div')({
	display: 'flex',
	textTransform: 'capitalize',
	alignItems: 'center',
	padding: '17px 16px 16px 16px',
	position: 'absolute',
	fontSize: '0.875rem',
});

const Tabs = ({
 onChange, active, options, ...props
}) => (
	<Container {...props}>
		<h4 css={{ margin: '0 16px 0 0', fontWeight: 500 }}>Sort By</h4>
		{options.map(item => (
			<Tab
				css={{ borderBottom: 'none' }}
				active={active === item.value}
				key={item.value}
				onClick={() => onChange(item.value)}
			>
				{item.label}
			</Tab>
		))}
	</Container>
);

Tabs.propTypes = {
	onChange: func,
	active: string,
	options: arrayOf(shape({ label: string, value: string })),
};

export default Tabs;
export { Tab };
