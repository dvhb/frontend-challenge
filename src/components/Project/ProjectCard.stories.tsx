import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProjectCard } from '.';

storiesOf('Components/Project').add('card', () => (
  <ProjectCard title="Single-family rental house" cover="https://via.placeholder.com/175x135" />
));
