import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../Banner';

test('should match snapshot', () => {
	const tree = renderer
		.create(<Banner
				src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/movies/1103933_750x600_gps_cn_qifq.jpg"
				href="movies/oscars"
				target="_blank"
				heightRatio={60}
				widthRatio={75}
		/>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
