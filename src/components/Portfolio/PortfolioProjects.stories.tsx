import React from 'react';
import { storiesOf } from '@storybook/react';
import { PortfolioProjects } from '.';

import { projects } from '../../__mocks__';

storiesOf('Components/Portfolio').add('projects', () => <PortfolioProjects projects={projects} />);
