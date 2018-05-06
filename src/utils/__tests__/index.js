import { getThemeProperty } from '../index';

const themeFactory = () => ({
	colors: {
		primaryColor: 'hotpink',
	},
});

test('should return null if property does not exist', () => {
	const theme = themeFactory();
	const res = getThemeProperty(theme, 'colors', 'secondaryColor');
	expect(res).toBe(null);
});

test('should return property if it exists', () => {
	const theme = themeFactory();
	const res = getThemeProperty(theme, 'colors', 'primaryColor');
	expect(res).toBeTruthy();
});
