import React from 'react';
import 'antd/dist/antd.css';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ProductImage from '../ProductImage';

const stories = storiesOf('ProductImage', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<div style={{ maxWidth: 700 }}>
		<ProductImage
			image={{
				src:
					'https://cdn.shopify.com/s/files/1/0006/7724/9089/products/44694ee386818f3276566210464cf341_ac37348b-4add-45e3-8709-8d70ec9b6609_430x430.jpg?v=1522334356',
				alt: 'product_image',
			}}
			displayOfferTag={boolean('displayOfferTag')}
		/>
	</div>
));
stories.add('with disabled zoomable effect', () => (
	<div style={{ maxWidth: 700 }}>
		<ProductImage
			image={{
				src:
					'https://cdn.shopify.com/s/files/1/0006/7724/9089/products/44694ee386818f3276566210464cf341_ac37348b-4add-45e3-8709-8d70ec9b6609_430x430.jpg?v=1522334356',
				alt: 'product_image',
			}}
			zoomable={boolean('zoomable', false)}
		/>
	</div>
));
