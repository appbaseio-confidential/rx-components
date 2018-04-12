import React from 'react';
import { string, object, number } from 'prop-types';

import Container, { image } from '../../styles/Banner';

const Banner = ({
 src, heightRatio, widthRatio, ...props
}) => (
	<Container {...props}>
		<div
			className={image}
			style={{
				backgroundImage: `url(${src})`,
				paddingTop: `${heightRatio / widthRatio * 100}%`, // eslint-disable-line
			}}
		/>
	</Container>
);

Banner.defaultProps = {
	style: {},
	className: '',
	heightRatio: 3,
	widthRatio: 4,
};

Banner.propTypes = {
	src: string.isRequired,
	href: string.isRequired,
	style: object,
	className: string,
	heightRatio: number,
	widthRatio: number,
};

export default Banner;
