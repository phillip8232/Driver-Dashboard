import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAverageSpeedQuery } from "../../queris/queris";
import { Card, Icon } from 'semantic-ui-react';
import LoadingSpinner from '../LoadingSpinner';


class AverageSpeedCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.averagespeed} km/hr</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon float="left" circular inverted color="yellow" name="shipping fast" size="big" />
          <div className="data-content">
            <p>Average Speed</p>
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

export default graphql(getAverageSpeedQuery)(AverageSpeedCard);