import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react';
import SmartCard from "./SmartCard"


class AverageSpeedCard extends Component {

  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon float="left" circular inverted color="yellow" name="shipping fast" size="big" />
          <div className="data-content">
            <p>Average Speed</p>
            <h2><SmartCard/></h2>
          </div>
          <Card.Content extra>
            <hr></hr>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default AverageSpeedCard;