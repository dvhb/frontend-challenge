import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { IPosition } from '../../store/types';

interface Props {
  positions: IPosition[];
}

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: '% of portfolio', dataIndex: 'percents', key: 'percents' },
  { title: 'Est. value of shares', dataIndex: 'shares', key: 'shares' },
  { title: 'Position total', dataIndex: 'total', key: 'total' },
];

export class PortfolioPositions extends Component<Props> {
  static defaultProps = {
    positions: [],
  };

  render() {
    const { positions } = this.props;

    return (
      <Card title="Positions" style={{ marginBottom: 30 }}>
        <Table columns={columns} dataSource={positions} />
      </Card>
    );
  }
}
