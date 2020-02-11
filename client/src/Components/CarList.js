import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Select from 'react-select';

import { getUserDataQuery } from "../queries/queries";
import LoadingSpinner from "./LoadingSpinner";

function displayCars(data) {
  return data.cars.map(car => {
    return (
      car.displayName
      // console.log(car.id)
    );
  });
}

export default function() {

  // const [selectedOption, setSelectedOption] = useState();
  
  // const handleChange = () => {
  //   setSelectedOption(
  //     selectedOption ,
  //     () => console.log('option selected')
  //     );
  // };

 
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
        {console.log(displayCars(data.userData))}
   
        <Select
          // value={selectedOption}
          // onChange={handleChange}
          options={displayCars(data.userData)}
        />
      </div>
    );
  }
};

