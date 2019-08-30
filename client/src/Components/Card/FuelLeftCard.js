import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";




class FuelLeftCard extends Component {

  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="orange" name="tachometer alternate" size="big" />
          <div className="data-content">
            <p>Estimated Fuel Left</p>
            <h2>{this.props.fuelleft}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <p>
              {this.props.travelSince}
            </p>

          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default FuelLeftCard;
