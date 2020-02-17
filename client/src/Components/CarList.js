import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Select from 'react-select';
import { getUserDataQuery } from '../queries/queries';
import LoadingSpinner from './LoadingSpinner';
import DashboardHeader from './DashboardHeader';

function displayCars(data) {
  return data.cars.map(car => {
    return {
      value: car.id,
      label: `${car.displayName} ${car.make} (${car.model})`,
    };
  });
}
export default function(props) {
  const { loading, error, data } = useQuery(getUserDataQuery);
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <p>Error! {error}</p>;
  } else {
    return (
      <div>
        <Select
          value={props.vehicleIdSelectionState}
          onChange={props.action}
          options={displayCars(data.userData)}
        />
      </div>
    );
  }
}
