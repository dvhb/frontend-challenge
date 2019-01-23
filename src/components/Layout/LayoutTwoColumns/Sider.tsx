import React, { Component } from 'react';
import { Layout } from 'antd';

interface Props {}

export class Sider extends Component<Props> {
  render() {
    return (
      <Layout.Sider theme="light" width={300} style={{ background: '#f0f2f5' }}>
        {this.props.children}
      </Layout.Sider>
    );
  }
}
