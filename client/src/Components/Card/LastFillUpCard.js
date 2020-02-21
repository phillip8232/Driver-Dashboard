import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import reverse from 'reverse-geocode';

class LastFillUpCard extends React.Component {
  lat = this.props.lastLocation.lat;
  lng = this.props.lastLocation.lng;

  reverseGeo = reverse.lookup(this.lat, this.lng, 'au');

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
            <p>
              Last Location: {this.reverseGeo.city}
              {console.log(this.reverseGeo)}
            </p>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default LastFillUpCard;
