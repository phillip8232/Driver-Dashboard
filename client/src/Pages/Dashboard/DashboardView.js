import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../../queris/queris";

import LoadingSpinner from '../../Components/LoadingSpinner';
import { Card } from 'semantic-ui-react';
import LastFillUpCard from "../../Components/Card/LastFillUpCard";
import FuelLeftCard from "../../Components/Card/FuelLeftCard";
import DiagnosticCard from "../../Components/Card/DiagnosticCard";
import BusinessRatioCard from "../../Components/Card/BusinessRatioCard";
import AverageSpeedCard from "../../Components/Card/AverageSpeedCard";
import TravelDistanceTotalCard from "../../Components/Card/TravelDistanceTotalCard";
import TimeInCarCard from "../../Components/Card/TimeInCarCard";
import EmissionsCard from "../../Components/Card/EmissionsCard";
import FuelEconomyCard from "../../Components/Card/FuelEconomyCard";


import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import AntdTableComponent from "../../Components/AntdTable/AntdTableComponent";


class DashboardView extends Component {


  displayLastFillUpData() {
    return (this.props.data.car.lastFillUp)
  }

  displayLastFillUpTimeData() {
    return (this.props.data.car.lastFillUpTime)
  }

  displayLastLocationData() {
      return (this.props.data.car.lastLocation)
  }


  displayFuelLeftData() {
      return (this.props.data.car.fuelLeft)
    }


  displayTraveldinceData() {
      return (this.props.data.car.travelSince)
  }

  displayDiagnosticData() {
    return (this.props.data.car.diagnosticIssue)
  }

  displayDiagnosticDetailData() {
      return (this.props.data.car.diagnosticDetail)
  }

  displayBusinessRatioData() {
      return (this.props.data.car.businessRatio)

  }

  displayBusinessTotalData() {
      return (this.props.data.car.businessTotal)
  }

  displayAverageSpeedData() {
      return (this.props.data.car.averageSpeed)
  }


  displayTimeInCarData() {
      return (this.props.data.car.timeIncar)
  }

  displayTravelDistanceTotalData() {
      return (this.props.data.car.travelDistanceTotal)
  }

  displayTravelDistanceThisYear() {
      return (this.props.data.car.travelDistanceThisYear)
  }

  displayEmissionsData() {
      return (this.props.data.car.emissions)
    }


  displayFuelEconomyData() {
      return (this.props.data.car.fuelEconomy)
  }


  render() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (
        <>
          <div className="ui container">
            <Card.Group>
              <LastFillUpCard lastFillUp={this.displayLastFillUpData()}
                fillUpTime={this.displayLastFillUpTimeData()}
                lastLocation={this.displayLastLocationData()}
              />
              <FuelLeftCard fuelleft={this.displayFuelLeftData()}
                travelSince={this.displayTraveldinceData()}
              />
              <DiagnosticCard diagnosticissue={this.displayDiagnosticData()}
                diagnosticdetail={this.displayDiagnosticDetailData()}
              />
              <BusinessRatioCard businessratio={this.displayBusinessRatioData()}
                businesstotal={this.displayBusinessTotalData()}
              />
            </Card.Group>
          </div>
          <div className="ui container">
            <GoogleMap />
          </div>
          <div className="ui container">
            <Card.Group>
              <AverageSpeedCard speed={this.displayAverageSpeedData()} />
              <TravelDistanceTotalCard distancetotal={this.displayTravelDistanceTotalData()}
                distancetotalthisyear={this.displayTravelDistanceThisYear()}
              />
              <TimeInCarCard timeincar={this.displayTimeInCarData()} />
            </Card.Group>
          </div>
          <div className="ui container">
            <Card.Group>
              <EmissionsCard emission={this.displayEmissionsData()} />
              <FuelEconomyCard fuelEconomy={this.displayFuelEconomyData()} />
            </Card.Group>
          </div>
          <div className="ui container">
            <AntdTableComponent />
          </div>
        </>
      );
    }
  }
}

export default graphql(getDashboardAllDataQuery)(DashboardView);
