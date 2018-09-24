import React from 'react';
import 'antd/dist/antd.css';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import ProductDetails from './ProductDetails';

storiesOf('ProductDetails', module).add('default', () => (
	<div style={{ maxWidth: 700 }}>
		<ProductDetails
			image={{
				src:
					'https://cdn.shopify.com/s/files/1/0006/7724/9089/products/44694ee386818f3276566210464cf341_ac37348b-4add-45e3-8709-8d70ec9b6609_430x430.jpg?v=1522334356',
				alt: 'product_image',
			}}
			title="Blue shirt"
			quantity={1}
			price="$200"
			deliveryPrice="$10"
			options={[
				{
					name: 'Size',
					value: 8,
				},
				{
					name: 'Color',
					value: 'black',
				},
			]}
			onChangeQuantity={action('Quality Changed')}
			onClickRemove={action('onClickRemove')}
			onClickSaveLater={action('onClickSaveLater')}
		/>
	</div>
));
