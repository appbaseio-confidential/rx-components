import React from 'react';
import { string, object } from 'prop-types';

import Container, { image } from '../../styles/Banner';

const Banner = ({ src, ...props }) => (
	<Container {...props}>
		<div
			className={image}
			style={{
				backgroundImage: `url(${src})`,
			}}
		/>
	</Container>
);

Banner.defaultProps = {
	style: {},
	className: '',
};

Banner.propTypes = {
	src: string.isRequired,
	href: string.isRequired,
	style: object,
	className: string,
};

export default Banner;
