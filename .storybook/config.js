import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'rx-components',
    goFullScreen: false,
    showStoryPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addongPanelInRight: false,
});

function loadStories() {
    const req = require.context('../lib', true, /[a-zA-Z0-9]\.stories\.js$/);
    console.log(req.keys());
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
