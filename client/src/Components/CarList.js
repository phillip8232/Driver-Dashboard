import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Select from 'react-select';
import { getUserDataQuery } from "../queries/queries";
import LoadingSpinner from "./LoadingSpinner";

function displayCars(data) {
   return data.cars.map(car => {
      return { value: `${car.id}`, label: `${car.displayName} ${car.make} (${car.model})` }
  });
}

export default function() {
  const [selectedOption , setSelectedOption] = useState(null)
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
    console.log(`Option selected:`, selectedOption.value);
  }

  const { loading, error, data } = useQuery(getUserDataQuery);
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    debugger;
    return <p>Error! {error}</p>;
  } else {

    return (
      <div>
        {console.log(displayCars(data.userData))}

        <Select 
          value = {selectedOption}
          onChange={handleChange}
          options={displayCars(data.userData)}
        />
        
      </div>
    );
  }
};