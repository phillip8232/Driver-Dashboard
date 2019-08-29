import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../../queris/queris";

import LoadingSpinner from '../LoadingSpinner';


class SmartCard extends Component {

  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.averagespeed}</div>
    }
  }
  render() {
    return (
            <div>{this.displayCarData()}</div>
    );
  }
}

export default graphql(getDashboardAllDataQuery)(SmartCard);