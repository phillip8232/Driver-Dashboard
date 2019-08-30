import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../../queris/queris";

import { Card } from 'semantic-ui-react';
import LoadingSpinner from '../../Components/LoadingSpinner';
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

  constructor(props) {
    super(props)
  }

  displayLastFillUpData() {
    return (this.props.data.car.lastfillup)
  }

  displayLastFillUpTimeData() {
    return (this.props.data.car.lastfilluptime)
  }

  displayEndLocationData() {
      return (this.props.data.car.endlocation)
  }


  displayFuelLeftData() {
      return (this.props.data.car.fuelleft)
    }


  displayTraveldinceData() {
      return (this.props.data.car.traveldsince)
  }

  displayDiagnosticData() {
      return (this.props.data.car.diagnostic)
  }

  displayDiagnosticDetailData() {
      return (this.props.data.car.diagnosticdetail)
  }

  displayBusinessRatioData() {
      return (this.props.data.car.businessratio)

  }

  displayBusinessTotalData() {
      return (this.props.data.car.businesstotal)
  }

  displayAverageSpeedData() {
      return (this.props.data.car.averagespeed)
  }


  displayTimeInCarData() {
      return (this.props.data.car.timeincar)
  }

  displayTravelDistanceTotalData() {
      return (this.props.data.car.traveldistancetotal)
  }

  displayTravelDistanceThisYear() {
      return (this.props.data.car.traveldistancethisyear)
  }

  displayEmissionsData() {
      return (this.props.data.car.emissions)
    }


  displayFuelEconomyData() {
      return (this.props.data.car.fueleconomy)
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
              <LastFillUpCard fillUp={this.displayLastFillUpData()}
                fillUpTime={this.displayLastFillUpTimeData()}
                lastParkingSpot={this.displayEndLocationData()}
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
