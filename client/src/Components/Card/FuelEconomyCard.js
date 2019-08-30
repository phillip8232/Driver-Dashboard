import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react';


class FuelEconomyCard extends Component {

  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="violet" name="dollar sign" size="big" />
          <div className="data-content">
            <p>Fuel Economy</p>
            <h2>{this.props.fuelEconomy}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default FuelEconomyCard;

