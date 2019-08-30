import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;


const getOwnersQuery = gql`
  {
    owners {
      firstName
      id
    }
  }
`;

const getCarNameQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      carName
    }
  }
`;


const getLastFillupQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      lastFillUp
    }
  }
`;

const getLastFillupTimeQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      lastFillUpTime
    }
  }
`;

const getFuelLeftQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      fuelLeft
    }
  }
`;

const getTraveldSinceQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      travelSince
    }
  }
`;

const getDiagnosticQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      diagnosticIssue
    }
  }
`;

const getDiagnosticDetailQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      diagnosticDetail
    }
  }
`;


const getBusinessRatioQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      businessRatio
    }
  }
`;

const getBusinessTotalQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      businessTotal
    }
  }
`;

const getAverageSpeedQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      averageSpeed
    }
  }
`;

const getTravelDistanceTotalQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      travelDistanceTotal
    }
  }
`;


const getTravelDistanceThisYearQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      travelDistanceThisYear
    }
  }
`;

const getTimeInCarQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      timeInCar
    }
  }
`;

const getEmissionsQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      emissions
    }
  }
`;

const getFuelEconomyQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      fuelEconomy
    }
  }
`;


const getParkingQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      parking
    }
  }
`;


const getTimeTraveldQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      timeTraveld
    }
  }
`;


const getStartLocationQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      startLocation
    }
  }
`;


const getEndLocationQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      endLocation
    }
  }
`;


const getDashboardAllDataQuery = gql`
{
  car(id: "5d65e47f7efc67265a342ea1"){
    carName
    lastFillUp
    lastFillupTime
    fuelLeft
    travelSince
    diagnosticIssue
    diagnosticDetail
    businessRatio
    businessTotal
    averageSpeed
    travelDistanceTotal
    travelDistanceThisYear
    timeInCar
    emissions
    fuelEconomy
    parking
    timeTraveld
    startLocation
    endLocation
  }
}
`;


const AddCarMutation = gql`
mutation{
  addCar(carName: "", lastFillUp: "", lastfilluptime: "", fuelleft: "", traveldsince: "", diagnostic: "", diagnosticdetail: "", businessratio: "", businesstotal: "", averagespeed: "", traveldistancetotal: "", traveldistancethisyear: "", timeincar: "", emissions: "", fueleconomy: "", parking: "", timetraveld: "", startlocation: "", endlocation: "", ownerId: ID){
    carName
    lastFillUp
    lastFillupTime
    fuelLeft
    travelSince
    diagnosticIssue
    diagnosticDetail
    businessRatio
    businessTotal
    averageSpeed
    travelDistanceTotal
    travelDistanceThisYear
    timeInCar
    emissions
    fuelEconomy
    parking
    timeTraveld
    startLocation
    endLocation
  }
}
`;


export {
  getCarsQuery,
  getOwnersQuery,
  AddCarMutation,
  getCarNameQuery,
  getLastFillupQuery,
  getLastFillupTimeQuery,
  getFuelLeftQuery,
  getTraveldSinceQuery,
  getDiagnosticQuery,
  getDiagnosticDetailQuery,
  getBusinessRatioQuery,
  getBusinessTotalQuery,
  getAverageSpeedQuery,
  getTravelDistanceTotalQuery,
  getTravelDistanceThisYearQuery,
  getTimeInCarQuery,
  getEmissionsQuery,
  getFuelEconomyQuery,
  getParkingQuery,
  getTimeTraveldQuery,
  getStartLocationQuery,
  getEndLocationQuery,
  getDashboardAllDataQuery
};
