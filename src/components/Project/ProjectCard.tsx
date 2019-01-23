import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface Props {
  title: string;
  cover: string;
}

export class ProjectCard extends Component<Props> {
  static defaultProps = {};

  render() {
    const { title, cover } = this.props;

    return (
      <Card hoverable style={{ width: 275 }} cover={<img alt="cover" src={cover} />}>
        <Meta title={title} />
      </Card>
    );
  }
}
