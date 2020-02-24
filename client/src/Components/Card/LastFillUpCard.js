import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import reverse from 'reverse-geocode';

class LastFillUpCard extends React.Component {
  render(props) {
    if (
      this.props.lastFillUpData[0] === undefined ||
      this.props.lastFillUpData[0] === null
    ) {
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
              <h2> You have no data </h2>
            </div>
            <Card.Content extra>
              <hr></hr>
            </Card.Content>
          </Card.Content>
        </Card>
      );
    } else {
      this.lat = this.props.lastFillUpData[0].location.lat;
      this.lng = this.props.lastFillUpData[0].location.lng;
      this.time = new Date(this.props.lastFillUpData[0].timestamp);
      this.reverseGeo = reverse.lookup(this.lat, this.lng, 'au');

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
              <h2>{this.props.lastFillUpData[0].litres} L</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
              <h4>Last refill</h4>
              <p>Time: {this.time.toDateString()}</p>
              <p>Location: {this.reverseGeo.city}</p>
            </Card.Content>
          </Card.Content>
        </Card>
      );
    }
  }
}

export default LastFillUpCard;
