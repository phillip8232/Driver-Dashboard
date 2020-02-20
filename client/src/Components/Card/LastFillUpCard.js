import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

class LastFillUpCard extends Component {
  render() {
    return (
      <Card className="data-cards-r1">
        <Card.Content>
          <Icon
            float="left"
            circular
            inverted
            color="teal"
            name="battery high"
            size="big"
          />
          <div className="data-content">
            <p>Litres input last fillup </p>
            <h2>{this.props.lastFillUp} L</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <p>{this.props.lastfillUpTime}</p>
            <p>Last Location: {this.props.lastLocation.lat}</p>
            <p>Last Location: {this.props.lastLocation.lng}</p>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default LastFillUpCard;
