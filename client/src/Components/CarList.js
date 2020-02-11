import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Select from 'react-select';

import { getUserDataQuery } from "../queries/queries";
import LoadingSpinner from "./LoadingSpinner";

function displayCars(data) {
  return data.cars.map(car => {
    return (<ul key={car.id}>
      {car.displayName}({car.make} - {car.model})
    </ul>);
  });
}

export default function() {
  const { loading, error, data } = useQuery(getUserDataQuery);
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    debugger;
    return <p>Error! {error}</p>;
  } else {
    debugger;

    return (
      <div>
        <Select
          options={displayCars(data.userData)}
        />
      </div>
    );
  }
};

