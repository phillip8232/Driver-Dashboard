import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react';


class EmissionsCard extends Component {

  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon float="left" circular inverted color="green" name="tree" size="big" />
          <div className="data-content">
            <p>Emissions</p>
            <h2>{this.props.emission}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default EmissionsCard;

