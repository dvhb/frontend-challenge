import React, { Component } from 'react';
import { Layout } from 'antd';

interface Props {}

export class Content extends Component<Props> {
  render() {
    return <Layout.Content style={{ padding: '0 24px', minHeight: 400 }}>{this.props.children}</Layout.Content>;
  }
}
