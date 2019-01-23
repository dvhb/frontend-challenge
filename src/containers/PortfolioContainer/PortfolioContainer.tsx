import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { Portfolio } from '../../components';

// @todo replace with data from api
import { positions, projects } from '../../__mocks__';

type RouteParams = {};

type Props = RouteComponentProps<RouteParams> & {
  push: typeof push;
};

class PortfolioContainerPure extends Component<Props> {
  componentDidMount() {}

  render() {
    return <Portfolio positions={positions} projects={projects} />;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = { push };

export const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortfolioContainerPure);
