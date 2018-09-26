import React from 'react';
import { Card, Button } from 'antd';
import { css } from 'emotion';
import { string, shape, number, oneOfType, arrayOf, func, bool } from 'prop-types';
import styled from 'react-emotion';
import FaPlus from 'react-icons/lib/io/plus';
import FaMinus from 'react-icons/lib/io/minus';
import Flex from '../Flex';
import TextButton from '../TextButton';
import media from '../../utils/media';

const Title = styled.span(
	{
		fontSize: '16px',
		color: '#212121',
		lineHeight: 1,
		display: 'inline',
	},
	({ theme }) => ({
		'&:hover': {
			color: theme.colors.primaryColor,
		},
	}),
);
const $quantity = css`
	padding: 5px 10px 5px 10px;
	border: #adadad;
	margin: 0px 10px 0 10px;
	border-style: solid;
	border-width: 0.1em;
`;
const position = css`
	position: 'inherit';
`;
const main = css`
	width: 100%;
	${media.medium(css`
		flex-direction: column;
	`)};
`;
const saveForLaterBtn = css`
	margin: 5px 10px 0px 25px;
	${media.medium(css`
		margin: 10px 10px 0px 0px;
	`)};
`;
const removeBtn = css`
	margin: 5px 10px 0px 10px;
	${media.medium(css`
		margin: 10px 10px 0px 10px;
	`)};
`;
const deliveryInfo = css`
	margin-right: 20px;
	${media.medium(css`
		margin: 10px 0px;
	`)};
`;
const $price = css`
	font-size: 20px;
	font-weight: 500;
	display: inline-block;
	line-height: 1;
	color: #212121;
	margin-top: 5px;
`;
const ProductDetails = ({
	title,
	quantity,
	loading,
	image,
	price,
	options,
	onChangeQuantity,
	onClickSaveLater,
	onClickRemove,
	deliveryText,
	...props
}) => (
	<Card
		bordered={false}
		css={`
			${loading ? 'pointer-events: none;opacity: 0.5' : undefined};
			border: solid 1px #f0f0f0;
		`}
		{...props}
	>
		<Flex css={main} justifyContent="space-between">
			<Flex>
				<Flex flexDirection="column">
					<div css="height: 112px; width: 120px">
						<img src={image.src} alt={image.altText} css="width: 100%; height: auto" />
					</div>
				</Flex>
				<Flex>
					<Flex flexDirection="column" css="margin-left: 20px">
						<Title>{title}</Title>
						{options.map(item => (
							<div css="margin-top: 2px" key={item.name}>
								{`${item.name}: ${item.value}`}
							</div>
						))}
						<div>
							<span css={$price}>{price}</span>
						</div>
					</Flex>
				</Flex>
			</Flex>
			{deliveryText && (
				<Flex>
					<div css={deliveryInfo}>{deliveryText}</div>
				</Flex>
			)}
		</Flex>
		<Flex css={main}>
			{onChangeQuantity && (
				<Flex>
					<Button
						disabled={quantity === 1}
						onClick={() => onChangeQuantity(quantity - 1)}
						shape="circle"
						css={position}
					>
						<FaMinus color="#212121" size={12} style={{ marginBottom: '3px' }} />
					</Button>
					<div css={$quantity}>{quantity}</div>
					<Button
						css={position}
						onClick={() => onChangeQuantity(quantity + 1)}
						shape="circle"
					>
						<FaPlus color="#212121" size={14} style={{ marginBottom: '3px' }} />
					</Button>
				</Flex>
			)}
			<Flex>
				{onClickSaveLater && (
					<TextButton role="button" css={saveForLaterBtn} onClick={onClickSaveLater}>
						SAVE FOR LATER
					</TextButton>
				)}
				{onClickRemove && (
					<TextButton css={removeBtn} role="button" onClick={onClickRemove}>
						Remove
					</TextButton>
				)}
			</Flex>
		</Flex>
	</Card>
);
ProductDetails.defaultProps = {
	onChangeQuantity: () => null,
	image: {},
	options: [],
};
ProductDetails.propTypes = {
	title: string,
	quantity: number,
	image: shape({
		src: string,
		altText: string,
	}),
	price: oneOfType([string, number]),
	options: arrayOf(shape({
			name: string,
			value: oneOfType([string, number]),
		})),
	onChangeQuantity: func,
	onClickRemove: func,
	loading: bool,
	onClickSaveLater: func,
	deliveryText: oneOfType([string, number]),
};

export default ProductDetails;
