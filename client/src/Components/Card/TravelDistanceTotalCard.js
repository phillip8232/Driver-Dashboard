import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react';


class TravelDistanceTotalCard extends Component {

  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="brown" name="road" size="big" />
          <div className="data-content">
            <p>Total Distance</p>
            <h2>{this.props.distancetotal}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <h3>{this.props.distancetotalthisyear}</h3>
          </Card.Content>
        </Card.Content>
        <hr></hr>
      </Card>
    );
  }
}

export default TravelDistanceTotalCard;