import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from './Banner';

const bannerImages = [
	'https://rukminim1.flixcart.com/flap/960/960/image/573190.jpg?q=50',
	'https://images-eu.ssl-images-amazon.com/images/G/31/img18/movies/1103933_750x600_gps_cn_qifq.jpg',
	'https://images-eu.ssl-images-amazon.com/images/G/31/img17/movies-tv/pagerefresh/5.jpg',
	'https://images-eu.ssl-images-amazon.com/images/G/31/img17/movies-tv/dec/1090291_750x600_Popular-English-TV-Shows.jpg',
];

storiesOf('Banner', module)
	.add('default', () => (
		<div style={{ maxWidth: 500 }}>
			<Banner href="#" heightRatio={515} widthRatio={960} src={bannerImages[0]} />
		</div>
	))
	.add('in a row', () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridGap: 20,
			}}
		>
			<Banner href="#" src={bannerImages[1]} />
			<Banner href="#" src={bannerImages[2]} />
			<Banner href="#" src={bannerImages[3]} />
		</div>
	));
