/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const req = require.context('../src', true, /stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
