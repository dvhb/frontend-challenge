import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import { Content } from './Content';
import { Sider } from './Sider';

interface Props {
  title: string;
}

export class LayoutTwoColumns extends Component<Props> {
  static Content = Content;
  static Sider = Sider;

  static defaultProps = {
    title: 'Page title',
  };

  render() {
    const { title } = this.props;
    return (
      <Layout>
        <Layout.Header className="header" style={{ background: '#fff', position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Your account</Menu.Item>
            <Menu.Item key="2">Invest</Menu.Item>
            <Menu.Item key="3">Resources</Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '100px 50px 50px 0' }}>
          <h1 style={{ paddingLeft: 25 }}>{title}</h1>
          <Layout>{this.props.children}</Layout>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>footer</Layout.Footer>
      </Layout>
    );
  }
}
