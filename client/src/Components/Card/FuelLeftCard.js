import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import FuelEconomyCard from './FuelEconomyCard';

class FuelLeftCard extends Component {
  render(props) {
    if (!this.props.lastRefillOdo[0], !this.props.refillData[0]) {
      return (
        <Card className="data-cards-r1">
          <Card.Content>
            <Icon
              circular
              inverted
              color="orange"
              name="tachometer alternate"
              size="big"
            />
            <div className="data-content">
              <h2>You have no data</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
            </Card.Content>
          </Card.Content>
        </Card>
      );
    } else {
      this.odometer = this.props.currentOdo;
      this.lastRefillOdo = this.props.lastRefillOdo[0].odometerKms;
      this.kmSinceLastRefill = this.odometer - this.lastRefillOdo;
      this.kmSinceLastRefillRounded = Math.floor(this.kmSinceLastRefill);

      const refillData = this.props.refillData
      const trips = this.props.trips
      const refillTimeStamp = new Date(refillData[0].timestamp)
      const refillLitres = refillData[0].litres
    
      const filteredTrips = trips.filter((trips) => {
          return refillTimeStamp <= new Date(trips.endTime)
      });
  
      const totalLitresUsed = filteredTrips.reduce((total, trip)=>{
          return total + trip.litres;
        }, 0);
      
      const totalDistance = filteredTrips.reduce((total, trip)=> {
          return total + trip.distance;
      }, 0);
  
      const litresLeft = refillLitres - totalLitresUsed
      const averagePer100Km =  (totalLitresUsed / totalDistance) * 100
      const kmsLeft = (totalDistance / totalLitresUsed) * litresLeft

      return (
        <Card className="data-cards-r1">
          {/* <FuelEconomyCard averagePer100Km={averagePer100Km}/> */}
          <Card.Content>
            <Icon
              circular
              inverted
              color="orange"
              name="tachometer alternate"
              size="big"
            />
            <div className="data-content">
              <p>Estimated Fuel Left</p>
              <h2>{kmsLeft.toFixed(1)} km</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
              <p> {this.kmSinceLastRefillRounded} km (since last fill up) </p>
              <p>Litres left since refill: {litresLeft.toFixed(2) > 0 ? litresLeft : "0"} L</p>
              <p>Average per 100km: {averagePer100Km.toFixed(1)}km</p>
            </Card.Content>
          </Card.Content>
        </Card>
      );
    }
  }
}

export default FuelLeftCard;
