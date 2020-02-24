import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

class FuelLeftCard extends Component {
  render(props) {
    if (
      this.props.lastRefillOdo[0] === undefined ||
      this.props.lastRefillOdo[0] === null
    ) {
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
              <p>Estimated Fuel Left</p>
              <h2>{this.props.fuelLeft} km</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
              <p> {this.kmSinceLastRefillRounded} km (since last fill up) </p>
            </Card.Content>
          </Card.Content>
        </Card>
      );
    }
  }
}

export default FuelLeftCard;
