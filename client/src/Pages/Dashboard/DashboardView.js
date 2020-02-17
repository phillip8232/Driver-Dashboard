import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getDashboardAllDataQuery } from '../../queries/queries';
import LoadingSpinner from '../../Components/LoadingSpinner';
import CarList from '../../Components/CarList';
import DashboardHeader from '../../Components/DashboardHeader';
import { Card } from 'semantic-ui-react';
import CarData1 from '../../Components/CarData1'
import AverageSpeedCard from '../../Components/Card/AverageSpeedCard';
import TravelDistanceTotalCard from '../../Components/Card/TravelDistanceTotalCard';
import TimeInCarCard from '../../Components/Card/TimeInCarCard';
import EmissionsCard from '../../Components/Card/EmissionsCard';
import FuelEconomyCard from '../../Components/Card/FuelEconomyCard';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import AntdTableComponent from '../../Components/AntdTable/AntdTableComponent';
import Footer from '../../Components/Footer';

export default function DashboardView() {
  const [vehicleIdSelectionState, setVehicleIdSelectionState] = useState(null);

  if (vehicleIdSelectionState === 'undefined' ||vehicleIdSelectionState === null) {
    setVehicleIdSelectionState(`27e1dabc-a89a-444d-bcc3-ace5a33a3d26`);
  }

  // const action = vehicleIdSelectionState => {
  //   setVehicleIdSelectionState(vehicleIdSelectionState.value);
  //   console.log(vehicleIdSelectionState);
  // };

  const { loading, error, data } = useQuery(getDashboardAllDataQuery, {
    variables: {
      vehicleId: vehicleIdSelectionState ,
    },
  });
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    debugger;
    return <p>Error! {error}</p>;
  } else {
    return (
      <>
        <DashboardHeader />
        <CarList />
        {/* Will add CarData1 here */}
        <CarData1 />
        <div className="ui container">
          <GoogleMap />
        </div>
        <div className="ui container">
          <Card.Group>
            <AverageSpeedCard speed={data.car.averageSpeed} />
            <TravelDistanceTotalCard
              distanceTotal={data.car.travelDistanceTotal}
              distanceTotalThisYear={data.car.travelDistanceThisYear}
            />
            <TimeInCarCard timeInCar={data.car.timeInCar} />
          </Card.Group>
        </div>
        <div className="ui container">
          <Card.Group>
            <EmissionsCard emission={data.car.emissions} />
            <FuelEconomyCard fuelEconomy={data.car.fuelEconomy} />
          </Card.Group>
        </div>
        <div className="ui container">
          <AntdTableComponent />
        </div>
        <Footer />
      </>
    );
  }
}
