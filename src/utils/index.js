import defaultTheme from '../styles/theme';

const getThemeProperty = (theme, property) => {
	if (theme) {
		return theme[property] || defaultTheme[property] || null;
	}
	return defaultTheme[property] || null;
};

export { getThemeProperty };
