import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react';
import LastFillupTimeCard from "./LastFillupTimeCard";

class LastFillupCard extends Component {

  render() {
    return (

        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon float="left" circular inverted color="teal" name="battery high" size="big" />
            <div className="data-content">
              <p>Last Fill Up:</p>
            <h2>{this.props.fillup}</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
            <p>{this.props.filluptime}</p>
            <p>{this.props.lastparkingspot}</p>
            </Card.Content>
          </Card.Content>
        </Card>

    );
  }
}

export default LastFillupCard;