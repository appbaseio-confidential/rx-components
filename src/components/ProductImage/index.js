import React from 'react';
import { Card } from 'antd';
import { css } from 'emotion';
import { shape, string, number, bool, func } from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import Flex from '../Flex';
import media from '../../utils/media';

const fluidContainer = (smallContainerWidth, smallContainerHeight) => css`
	${smallContainerWidth && `width: ${smallContainerWidth}px;`} ${smallContainerHeight &&
		`height: ${smallContainerHeight}px;`}
	padding: 0px 0px 10px 0px;
	${media.large(css`
		pointer-events: none;
		order: 1;
		width: 100%;
		justify-content:center;
		align-items:'center;
	`)};
`;
const largeImage = css`
	max-width: 820px;
	max-height: 600px;
`;
const offerLabel = css`
	top: 20px;
	position: absolute;
	background-color: green;
	padding: 5px 8px 5px 8px;
	color: #fff;
	z-index: 1000;
`;
class ProductImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: undefined,
			height: undefined,
			dWidth: undefined,
		};
		this.SMALL_CONTAINER_HEIGHT = props.smallImageContainerDimensions.height;
		this.SMALL_CONTAINER_WIDTH = props.smallImageContainerDimensions.width;
		this.MAX_SMALL_IMAGE_WIDTH = props.smallImageDimensions.width;
		this.MAX_SMALL_IMAGE_HEIGHT = props.smallImageDimensions.height;
		this.ENLARGED_CONTAINER_HEIGHT = props.enlargedImageDimensions.height;
		this.ENLARGED_CONTAINER_MAX_WIDTH = props.enlargedImageDimensions.width;
		this.SCALING_FACTOR = props.scalingFactor;
	}
	componentDidMount() {
		this.updateDimensions(this.setImageDimensions(this.props.image.src));
	}
	componentDidUpdate(prevProps) {
		if (prevProps.image !== this.props.image) {
			this.updateDimensions(this.setImageDimensions(this.props.image.src));
		}
	}
	get smallImageMaxDimensions() {
		const { dWidth } = this.state;
		return {
			maxWidth:
				dWidth > this.MAX_SMALL_IMAGE_WIDTH ? this.MAX_SMALL_IMAGE_WIDTH : dWidth - 40,
			maxHeight: this.MAX_SMALL_IMAGE_HEIGHT,
		};
	}
	get largeImageMaxDimensions() {
		const { width, height } = this.state;
		return {
			maxWidth: parseInt(width * this.SCALING_FACTOR, 10),
			maxHeight: parseInt(height * this.SCALING_FACTOR, 10),
		};
	}
	setImageDimensions = (url) => {
		if (typeof window !== 'undefined') {
			const imga = document.createElement('img');
			imga.src = url;
			imga.onload = ({ target: img }) => {
				const aspectRatio = img.height / img.width;
				let height = null;
				let width = null;
				if (aspectRatio > 1) {
					const possibleWidth = this.MAX_SMALL_IMAGE_HEIGHT * (1 / aspectRatio);
					width =
						possibleWidth > this.state.dWidth - 40
							? this.state.dWidth - 40
							: possibleWidth;
					height = width * aspectRatio;
				} else {
					const maxWidth =
						this.state.dWidth > this.MAX_SMALL_IMAGE_WIDTH
							? this.MAX_SMALL_IMAGE_WIDTH
							: this.state.dWidth - 40;
					width = maxWidth;
					height = maxWidth * aspectRatio;
				}
				if (!this.SMALL_CONTAINER_HEIGHT) {
					this.SMALL_CONTAINER_HEIGHT = height;
				}
				if (!this.SMALL_CONTAINER_WIDTH) {
					this.SMALL_CONTAINER_WIDTH = width;
				}
				this.setState({
					height,
					width,
				});
			};
		}
	};
	updateDimensions = (callback = () => null) => {
		if (typeof window !== 'undefined') {
			const w = window;
			const d = document;
			const { documentElement } = d;
			const $body = d.getElementsByTagName('body')[0];
			const width = w.innerWidth || documentElement.clientWidth || $body.clientWidth;
			this.setState({ dWidth: width }, callback);
		}
	};
	render() {
		const {
			zoomable,
			displayOfferTag,
			bordered,
			image,
			calculateSrc,
			calculateSrcLarge,
		} = this.props;
		const { width, height } = this.state;
		const smallImageDimensions = this.smallImageMaxDimensions;
		const largeImageDimensions = this.largeImageMaxDimensions;
		const url =
			(calculateSrc &&
				calculateSrc(smallImageDimensions.maxWidth, smallImageDimensions.maxHeight)) ||
			image.src;
		const srcLarge =
			(calculateSrcLarge &&
				calculateSrc(largeImageDimensions.maxWidth, largeImageDimensions.maxHeight)) ||
			image.src;
		// Calculate the top & left margin for enlarged container
		const marginLeft = (this.SMALL_CONTAINER_WIDTH - width) / 2;
		const enlargedContainerWidth =
			width * this.SCALING_FACTOR < this.ENLARGED_CONTAINER_MAX_WIDTH
				? width * this.SCALING_FACTOR
				: this.ENLARGED_CONTAINER_MAX_WIDTH;
		return (
			<Card
				bodyStyle={{ padding: '0px' }}
				bordered={bordered}
				className={fluidContainer(this.SMALL_CONTAINER_WIDTH, this.SMALL_CONTAINER_HEIGHT)}
				css={`
					${zoomable ? null : 'pointer-events: none;'};
				`}
			>
				{displayOfferTag && <span css={offerLabel}>ON OFFER</span>}
				<Flex
					alignItems="center"
					justifyContent="center"
					flexDirection="row"
					css="width: 100%"
				>
					{image &&
						width &&
						height && (
							<ReactImageMagnify
								{...{
									smallImage: {
										alt: image.alt,
										src: url,
										width,
										height,
									},
									largeImage: {
										src: srcLarge,
										width: width * this.SCALING_FACTOR,
										height: height * this.SCALING_FACTOR,
									},
									enlargedImageContainerDimensions: {
										width: enlargedContainerWidth,
										height: this.ENLARGED_CONTAINER_HEIGHT,
									},
									enlargedImageContainerStyle: {
										marginLeft: `${marginLeft + 10}px`,
									},
									enlargedImageContainerClassName: largeImage,
									shouldUsePositiveSpaceLens: true,
								}}
							/>
						)}
				</Flex>
			</Card>
		);
	}
}
ProductImage.defaultProps = {
	zoomable: true,
	displayOfferTag: false,
	smallImageContainerDimensions: {
		width: 450,
		height: 470,
	},
	smallImageDimensions: {
		width: 430,
		height: 430,
	},
	enlargedImageDimensions: {
		width: 900,
		height: 550,
	},
	scalingFactor: 2,
	bordered: true,
};
ProductImage.propTypes = {
	image: shape({
		src: string,
		alt: string,
	}).isRequired,
	calculateSrc: func,
	calculateSrcLarge: func,
	zoomable: bool,
	displayOfferTag: bool,
	smallImageContainerDimensions: shape({
		width: number,
		height: number,
	}),
	enlargedImageDimensions: shape({
		width: number,
		height: number,
	}),
	smallImageDimensions: shape({
		width: number,
		height: number,
	}),
	scalingFactor: number,
	bordered: bool,
};
export default ProductImage;
