import defaultTheme from '../styles/theme';

const getThemeProperty = (theme, property) =>
	(theme ? theme[property] : defaultTheme[property]) || null;

export { getThemeProperty };
