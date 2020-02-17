import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { dashboardHeaderQuery } from '../queries/queries';
import LoadingSpinner from './LoadingSpinner';
import { Statistic, Header, Divider } from 'semantic-ui-react';

export default function DashboardHeader() {
  const { loading, error, data } = useQuery(dashboardHeaderQuery);
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <p>Error! {error}</p>;
  } else {
    return (
      <div className="hero-img">
        {console.log('dashboardHeader data', data)}
        <Header as="h1">Welcome back {data.firstName}!</Header>
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
  }
}
