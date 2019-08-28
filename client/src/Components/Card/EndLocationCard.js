import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getEndLocationQuery } from "../../queris/queris";
import LoadingSpinner from '../LoadingSpinner';


class EndLocationCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.endlocation}</div>
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.displayCarData()}
        </ul>
      </div>
    );
  }
}

export default graphql(getEndLocationQuery)(EndLocationCard);