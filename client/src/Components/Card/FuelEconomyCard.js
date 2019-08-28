import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFuelEconomyQuery } from "../../queris/queris";
import { Card, Icon } from 'semantic-ui-react';
import LoadingSpinner from '../LoadingSpinner';


class FuelEconomyCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.fueleconomy}/100km</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="violet" name="dollar sign" size="big" />
          <div className="data-content">
            <p>Fuel Economy</p>
            <h2>{this.displayCarData()}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default graphql(getFuelEconomyQuery)(FuelEconomyCard);