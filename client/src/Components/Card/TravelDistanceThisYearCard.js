import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTravelDistanceThisYearQuery } from "../../queris/queris";
import LoadingSpinner from '../LoadingSpinner';


class TravelDistanceThisYearCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.traveldistancethisyear} km(This tax year)</div>
    }
  }
  render() {
    return (
      <div>
          {this.displayCarData()}
      </div>
    );
  }
}

export default graphql(getTravelDistanceThisYearQuery)(TravelDistanceThisYearCard);