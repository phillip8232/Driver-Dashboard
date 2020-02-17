import React, { useState } from 'react';
import CarList from '../../Components/CarList';
import DashboardHeader from '../../Components/DashboardHeader';
import CarData from '../../Components/CarData';
import Footer from '../../Components/Footer';

export default function DashboardView() {
  const [vehicleIdSelectionState, setVehicleIdSelectionState] = useState(null);

  const selectVehicle = vehicleIdSelectionState => {
    setVehicleIdSelectionState(vehicleIdSelectionState.value);
  };

  if (vehicleIdSelectionState != null) {
    return (
      <>
        <DashboardHeader state={vehicleIdSelectionState} />
        <CarList test={selectVehicle} />
        <CarData state={vehicleIdSelectionState} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <CarList test={selectVehicle} />
        <div style={{ height: '500px', textAlign: 'center' }}>
          <h1>You must select a car</h1>
        </div>
        <Footer />
      </>
    );
  }
}
