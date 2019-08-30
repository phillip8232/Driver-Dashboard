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



  displayLastFillUpData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.lastfillup)
    }
  }

  displayLastFillUpTimeData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.lastfilluptime)
    }
  }

  displayEndlocationData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.endlocation)
    }
  }

  displayFuelLeftData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.fuelleft)
    }
  }

  displayTraveldinceData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.traveldsince)
    }
  }

  displayDiagnosticData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.diagnostic)
    }
  }


  displayDiagnosticDetailData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.diagnosticdetail)
    }
  }


  displayBusinessRatioData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.businessratio)
    }
  }


  displayBusinessTotalData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.businesstotal)
    }
  }

  displayAverageSpeedData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.averagespeed)
    }
  }

  displayTimeInCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.timeincar)
    }
  }


  displayTravelDistanceTotalData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.traveldistancetotal)
    }
  }


  displayTravelDistanceThisYear() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.traveldistancethisyear)
    }
  }



  displayEmissionsData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.emissions)
    }
  }

  displayFuelEconomyData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (data.car.fueleconomy)
    }
  }



  render() {
    return (
      <>
        <div className="ui container">
          <Card.Group>
            <LastFillUpCard fillUp={this.displayLastFillUpData()}
                            fillUpTime={this.displayLastFillUpTimeData()}
                            lastParkingSpot={this.displayEndlocationData()}
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
            <AverageSpeedCard speed={this.displayAverageSpeedData()}/>
            <TravelDistanceTotalCard distancetotal={this.displayTravelDistanceTotalData()}
                                     distancetotalthisyear={this.displayTravelDistanceThisYear()}
            />
            <TimeInCarCard timeincar={this.displayTimeInCarData()}/>
          </Card.Group>
        </div>
        <div className="ui container">
          <Card.Group>
            <EmissionsCard emission={this.displayEmissionsData()} />
            <FuelEconomyCard fuelEconomy={this.displayFuelEconomyData()}/>
          </Card.Group>
        </div>
        <div className="ui container">
          <AntdTableComponent/>
        </div>
      </>
    );
  }
}

export default graphql(getDashboardAllDataQuery)(DashboardView);
