import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react';

class LastFillUpCard extends Component {

  render() {
    return (
        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon float="left" circular inverted color="teal" name="battery high" size="big" />
            <div className="data-content">
              <p>Last Fill Up:</p>
            <h2>{this.props.lastFillUp}</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
            <p>{this.props.fillUpTime}</p>
            <p>{this.props.lastParkingSpot}</p>
            </Card.Content>
          </Card.Content>
        </Card>
    );
  }
}

export default LastFillUpCard;

