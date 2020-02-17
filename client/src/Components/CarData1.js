import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getDashboardAllDataQuery } from '../queries/queries';
import LastFillUpCard from './Card/LastFillUpCard';
import FuelLeftCard from './Card/FuelLeftCard';
import DiagnosticCard from './Card/DiagnosticCard';
import BusinessRatioCard from './Card/BusinessRatioCard';
import { Card } from 'semantic-ui-react';


export default function CarData1() {
    const { loading, error, data } = useQuery(getDashboardAllDataQuery, {
      variables: {
        vehicleId: `27e1dabc-a89a-444d-bcc3-ace5a33a3d26`,
      },
    });

    return(
    <div className="ui container">
        <Card.Group>
          <LastFillUpCard
            lastFillUp={data.car.lastFillUp}
            lastfillUpTime={data.car.lastFillUpTime}
            lastLocation={data.car.lastLocation}
          />
          <FuelLeftCard
            fuelLeft={data.car.fuelLeft}
            travelSince={data.car.travelSince}
          />
          <DiagnosticCard
            diagnosticIssue={data.car.diagnosticIssue}
            diagnosticDetail={data.car.diagnosticDetail}
          />
          <BusinessRatioCard
            businessRatio={data.car.businessRatio}
            businessTotal={data.car.businessTotal}
          />
        </Card.Group>
    </div> 
    )
}