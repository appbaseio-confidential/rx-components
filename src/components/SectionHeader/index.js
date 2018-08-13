import React from 'react';
import { string } from 'prop-types';
import { css } from 'emotion';

import Button from '../Button';

const styles = css`
	padding: 0 20px;
	h2 {
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	p {
		color: #666;
	}
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const SectionHeader = ({ title, description, href }) => (
	<section className={styles}>
		<div>
			<h2 style={{ letterSpacing: 1, textTransform: 'uppercase' }}>{title}</h2>
			<p style={{ color: '#666' }}>{description}</p>
		</div>
		{href && (
			<Button type="primary" href={href}>
				View All
			</Button>
		)}
	</section>
);

SectionHeader.propTypes = {
	description: string,
	href: string,
	title: string,
};

export default SectionHeader;
