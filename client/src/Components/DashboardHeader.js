import React from 'react';
import { Statistic, Header, Divider } from 'semantic-ui-react';

const DashboardHeader = props => {
  return (
    <div className="hero-img">
      {console.log('dashboardHeader props', props)}
      <Header as="h1">Welcome back {props.firstName}!</Header>
      <div className="hero-img-car-data">
        <h3>TODO</h3>
        <Divider hidden />
        <Statistic.Group size="mini">
          <Statistic>
            <Statistic.Value>TODO</Statistic.Value>
            <Statistic.Label>Trips </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>TODO KM</Statistic.Value>
            <Statistic.Label>Total Distance</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>TODO</Statistic.Value>
            <Statistic.Label>Time in Car (hrs) </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
};

export default DashboardHeader;
