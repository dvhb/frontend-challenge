import React from 'react';
import { storiesOf } from '@storybook/react';
import { LayoutTwoColumns } from '.';

storiesOf('Components/Layout').add('two columns', () => (
  <LayoutTwoColumns>
    <LayoutTwoColumns.Content>Content</LayoutTwoColumns.Content>
    <LayoutTwoColumns.Sider>Sider</LayoutTwoColumns.Sider>
  </LayoutTwoColumns>
));
