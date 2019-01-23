import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { chunk } from 'lodash';
import { IProject } from '../../store/types';
import { ProjectCard } from '../Project';

interface Props {
  projects: IProject[];
}

export class PortfolioProjects extends Component<Props> {
  static defaultProps = {};

  renderProjects = (projects: IProject[]) => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projects: IProject[], row) => {
      return (
        <Row gutter={16} key={row} style={{ marginBottom: 20 }}>
          {projects.map((project: IProject, col) => (
            <Col span={8} key={col}>
              <ProjectCard title={project.title} cover={project.img} />
            </Col>
          ))}
        </Row>
      );
    });
  };

  render() {
    const { projects } = this.props;
    return <Card title="Projects">{this.renderProjects(projects)}</Card>;
  }
}
