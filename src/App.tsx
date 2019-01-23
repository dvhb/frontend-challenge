import React, { Component } from 'react';
import { LayoutTwoColumns } from './components';

class App extends Component {
  render() {
    return (
      <LayoutTwoColumns title="Portfolio">
        <LayoutTwoColumns.Content>content</LayoutTwoColumns.Content>
        sidebar
        <LayoutTwoColumns.Sider />
      </LayoutTwoColumns>
    );
  }
}

export default App;
