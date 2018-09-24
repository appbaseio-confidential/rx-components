import React from 'react';
import { string, node, object } from 'prop-types';
import { css } from 'emotion';
import Flex from '../Flex';

const subHeading = css`
	color: #878787;
	flex: 10%;
	font-weight: 500;
	font-size: 14px;
	min-width: 100px;
`;

const description = css`
	flex: 90%;
	margin-right: 10px;
	font-size: 14px;
	flex-wrap: wrap;
`;

const DescriptionRow = ({ title, component, ...props }) => (
	<Flex flexDirection="row" css="padding-bottom: 16px;" {...props}>
		{title && (
			<Flex css={subHeading} alignItems="center">
				<span>{title}</span>
			</Flex>
		)}
		<Flex flexDirection="row" css={description}>
			{component}
		</Flex>
	</Flex>
);

DescriptionRow.propTypes = {
	title: string,
	component: node,
	style: object,
};

export default DescriptionRow;
