import defaultTheme from '../styles/theme';

const getThemeProperty = (theme, property, subProperty) => {
	if (theme) {
		if (property && subProperty) {
			return theme[property]
				? theme[property][subProperty] || defaultTheme[property][subProperty] || null
				: defaultTheme[property][subProperty] || null;
		}
		return theme[property] || defaultTheme[property] || null;
	}
	return defaultTheme[property] || null;
};

export { getThemeProperty }; //eslint-disable-line
