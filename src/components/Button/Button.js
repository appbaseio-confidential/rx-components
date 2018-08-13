import styled from 'react-emotion';

const Button = styled.a(
	{
		padding: '10px 15px',
		transition: '0.3s ease-in-out',
		borderRadius: 4,
		fontSize: '0.875rem',
		'&:hover': {
			color: 'white',
		},
	},
	({ theme }) => ({
		background: theme.colors.buttonBackgroundColor,
		color: theme.colors.buttonTextColor,
		fontSize: theme.typography.buttonFontSize,
		fontFamily: `${theme.typography.buttonFont} !important`,
		'&:hover': {
			boxShadow: theme.boxShadow,
		},
	}),
);

export default Button;
