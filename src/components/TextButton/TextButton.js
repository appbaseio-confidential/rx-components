import styled from 'react-emotion';

const TextButton = styled.span(
	{
		display: 'inline-block',
		textTransform: 'uppercase',
		boxShadow: 'none',
		outline: 0,
		fontSize: '14px',
		fontWeight: 500,
		cursor: 'pointer',
		marginRight: '25px',
	},
	({ theme, style, primary }) => ({
		color: primary ? theme.colors.primaryColor : theme.colors.headingAndLinks,
		'&:hover': {
			color: theme.colors.primaryColor,
		},
		...style,
	}),
);

export default TextButton;
