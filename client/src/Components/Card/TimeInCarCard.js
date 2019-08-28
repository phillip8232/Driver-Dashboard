import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTimeInCarQuery } from "../../queris/queris";
import { Card, Icon } from 'semantic-ui-react';
import LoadingSpinner from '../LoadingSpinner';


class TimeInCarCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.timeincar} hours</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="grey" name="car" size="big" />
          <div className="data-content">
            <p>Time in Car (this year)</p>
            <h2>120 Hours</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default graphql(getTimeInCarQuery)(TimeInCarCard);