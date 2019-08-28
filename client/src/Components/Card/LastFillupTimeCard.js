import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLastFillupTimeQuery } from "../../queris/queris";
import LoadingSpinner from '../LoadingSpinner';


class LastFillupTimeCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.latfilluptime}</div>
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

export default graphql(getLastFillupTimeQuery)(LastFillupTimeCard);