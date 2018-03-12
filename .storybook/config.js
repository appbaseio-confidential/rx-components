import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/styles/theme';

setOptions({
    name: 'rx-components',
    goFullScreen: false,
    showStoryPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addongPanelInRight: false,
});

const ThemeDecorator = children => <ThemeProvider theme={theme}>{children()}</ThemeProvider>;

addDecorator(ThemeDecorator);

function loadStories() {
    const req = require.context('../src', true, /[a-zA-Z0-9]\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
