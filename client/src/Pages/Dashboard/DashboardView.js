import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../../queris/queris";

import { Card } from 'semantic-ui-react';
import LoadingSpinner from '../../Components/LoadingSpinner';
import LastFillupCard from "../../Components/Card/LastFillupCard";
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



  displayLastFillupData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.lastfillup}</div>
    }
  }

  displayLastFillupTimeData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.lastfilluptime}</div>
    }
  }

  displayEndlocationData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.endlocation}</div>
    }
  }

  displayFuelLeftData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.fuelleft}</div>
    }
  }

  displayTraveldinceData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.traveldsince}</div>
    }
  }

  displayDiagnosticData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.diagnostic}</div>
    }
  }


  displayDiagnosticDetailData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.diagnosticdetail}</div>
    }
  }


  displayBusinessRatioData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.businessratio}</div>
    }
  }


  displayBusinessTotalData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.businesstotal}</div>
    }
  }

  displayAverageSpeedData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.averagespeed}</div>
    }
  }

  displayTimeInCarData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.timeincar}</div>
    }
  }


  displayTravelDistanceTotalData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.traveldistancetotal}</div>
    }
  }


  displayTravelDistanceThisYear() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.traveldistancethisyear}</div>
    }
  }



  displayEmissionsData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.emissions}</div>
    }
  }

  displayFuelEconomyData() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return <div>{data.car.fueleconomy}</div>
    }
  }




  render() {
    return (
      <>
        <div className="ui container">
          <Card.Group>
            <LastFillupCard fillup={this.displayLastFillupData()}
                            filluptime={this.displayLastFillupTimeData()}
                            lastparkingspot={this.displayEndlocationData()}
            />
            <FuelLeftCard fuelleft={this.displayFuelLeftData()}
                          traveldsince={this.displayTraveldinceData()}
            />
            <DiagnosticCard diagnostic={this.displayDiagnosticData()}
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
            <FuelEconomyCard fueleconomy={this.displayFuelEconomyData()}/>
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