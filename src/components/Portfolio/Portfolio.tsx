import React, { Component } from 'react';
import { ChartRadius, LayoutTwoColumns, PortfolioPositions, PortfolioProjects } from '..';
import { IPosition, IProject } from '../../store/types';

interface Props {
  positions?: IPosition[];
  projects?: IProject[];
}

export class Portfolio extends Component<Props> {
  static defaultProps = {};

  render() {
    const { positions, projects } = this.props;
    return (
      <LayoutTwoColumns title="Portfolio">
        <LayoutTwoColumns.Content>
          {positions && <PortfolioPositions positions={positions} />}
          {projects && <PortfolioProjects projects={projects} />}
        </LayoutTwoColumns.Content>
        <LayoutTwoColumns.Sider>
          <ChartRadius />
        </LayoutTwoColumns.Sider>
      </LayoutTwoColumns>
    );
  }
}
