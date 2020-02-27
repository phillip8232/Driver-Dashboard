import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getDashboardAllDataQuery, getUserDataQuery } from '../queries/queries';
import LoadingSpinner from './LoadingSpinner';
import { Statistic, Header, Divider } from 'semantic-ui-react';

export default function DashboardHeader(props) {
  const { loading: carLoading, error: carError, data: carData } = useQuery(
    getDashboardAllDataQuery,
    {
      variables: {
        vehicleId: props.vehicleIdState.value,
      },
    }
  );
  const { error: userError, data: userData } = useQuery(getUserDataQuery);

  if (carLoading) {
    return <LoadingSpinner />;
  } else if ((carError, userError)) {
    return <p>Error! {(carError, userError)}</p>;
  } else {
    return (
      <div className="hero-img">
        <Header as="h1">Welcome back {userData.userData.firstName}!</Header>
        <div className="hero-img-car-data">
          <h3>
            {carData.car.make} {carData.car.model}'s Lifetime Statistics from
            GOFAR
          </h3>
          <Divider hidden />
          <Statistic.Group size="mini">
            <Statistic>
              <Statistic.Value>{carData.car.trips.length}</Statistic.Value>
              <Statistic.Label> Total trips </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                {carData.car.travelDistanceTotal} KM
              </Statistic.Value>
              <Statistic.Label>Total Distance</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{carData.car.timeInCar} </Statistic.Value>
              <Statistic.Label>Time in Car (hrs) </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                {Math.floor(carData.car.odometer)} KM
              </Statistic.Value>
              <Statistic.Label>Current Odometer</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </div>
      </div>
    );
  }
}
