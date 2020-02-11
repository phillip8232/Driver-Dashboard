import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Select from 'react-select';

import { getUserDataQuery } from "../queries/queries";
import LoadingSpinner from "./LoadingSpinner";

  function displayCars(data) {
    return data.cars.map(car => {
      return { value: 'Name', label: `${car.displayName}` }
    });
  }


export default function() {
  // const [selectedOption] = useState(null)


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
        // value={selectedOption}
        placeholder={<p>List of cars</p>}
        options={displayCars(data.userData)}
        />
        {console.log(displayCars(data.userData))}
      </div>
    );
  }
}