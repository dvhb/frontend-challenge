import React from 'react';
import { storiesOf } from '@storybook/react';
import { PortfolioPositions } from '.';
import { positions } from '../../__mocks__';

storiesOf('Components/Portfolio').add('positions', () => <PortfolioPositions positions={positions} />);
