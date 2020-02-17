import React, { useState } from 'react';
import CarList from '../../Components/CarList';
import DashboardHeader from '../../Components/DashboardHeader';
import CarData from '../../Components/CarData'
import Footer from '../../Components/Footer';

export default function DashboardView() {
  const [vehicleIdSelectionState, setVehicleIdSelectionState] = useState(null);
  const selectVehicle = vehicleIdSelectionState => {
    setVehicleIdSelectionState(vehicleIdSelectionState);
  };

  if (vehicleIdSelectionState != null){
    return (  
      <>
        <DashboardHeader />
        <CarList test={selectVehicle} />
        <CarData vehicleId={vehicleIdSelectionState} />
        <Footer />
      </>
    );
  } else {
    return(
      <>
        <DashboardHeader />
        <CarList test={selectVehicle} />
        <div style={{height:"500px", textAlign:"center", paddingTop:"50px"}}>
          <h1>You forgot to choose a vehicle</h1>
          <img src="https://media.giphy.com/media/xT3i0ZscbtF5DvLrGg/giphy.gif" alt="Patrick-Gif" />
        </div>
        <Footer />
      </>
    )
  }
}
