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
      lastfillup
    }
  }
`;

const getLastFillupTimeQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      lastfilluptime
    }
  }
`;

const getFuelLeftQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      fuelleft
    }
  }
`;

const getTraveldSinceQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      traveldsince
    }
  }
`;

const getDiagnosticQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      diagnostic
    }
  }
`;

const getDiagnosticDetailQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      diagnosticdetail
    }
  }
`;


const getBusinessRatioQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      businessratio
    }
  }
`;

const getBusinessTotalQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      businesstotal
    }
  }
`;

const getAverageSpeedQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      averagespeed
    }
  }
`;

const getTravelDistanceTotalQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      traveldistancetotal
    }
  }
`;


const getTravelDistanceThisYearQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      traveldistancethisyear
    }
  }
`;

const getTimeInCarQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      timeincar
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
      fueleconomy
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
      timetraveld
    }
  }
`;


const getStartLocationQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      startlocation
    }
  }
`;


const getEndLocationQuery = gql`
  {
    car(id: "5d65e47f7efc67265a342ea1") {
      endlocation
    }
  }
`;

const getCarQuery = gql`
  query($id: String){
    car(id: $id){
      id
      carName
      owner{
        id
        firstName
        cars{
          id
          carName
        }
      }
    }
  }
`;


// mutation($carName: String!, $lastfillup: String!, $lastfilluptime: String!, $fuelleft: Number!, $traveldsince: Number!, $diagnostic: ""!, $diagnosticdetail: ""!, $businessratio: Number!, $businesstotal: Number!, $averagespeed: Number!, $traveldistancetotal: Number!, $traveldistancethisyear: Number!, $timeincar: Number!, $emissions: Number!, $fueleconomy: Number!, $parking: ""!, $timetraveld: Number!, $startlocation: ""!, $endlocation: ""!, $ownerId: ID!){
//   addCar(carName: $carName, lastfillup: $lastfillup, lastfilluptime: $lastfilluptime, fuelleft: $fuelleft, traveldsince: $traveldistancethisyear, diagnostic: $diagnostic, diagnosticdetail: $diagnosticdetail, businessratio: $businessratio, businesstotal: $businesstotal, averagespeed: $averagespeed, traveldistancetotal: $traveldistancetotal, traveldistancethisyear: $traveldistancethisyear, timeincar: $timeincar, emissions: $emissions, fueleconomy: $fueleconomy, parking: $parking, timetraveld: $timetraveld, startlocation: $startlocation, endlocation: $endlocation, ownerId: $ownerId){
//     carName
//     lastfillup
//     lastfilluptime
//     fuelleft
//     traveldsince
//     diagnostic
//     diagnosticdetail
//     businessratio
//     businesstotal
//     averagespeed
//     traveldistancetotal
//     traveldistancethisyear
//     timeincar
//     emissions
//     fueleconomy
//     parking
//     timetraveld
//     startlocation
//     endlocation
//   }
// }

const AddCarMutation = gql`
mutation{
  addCar(carName: "", lastfillup: "", lastfilluptime: "", fuelleft: "", traveldsince: "", diagnostic: "", diagnosticdetail: "", businessratio: "", businesstotal: "", averagespeed: "", traveldistancetotal: "", traveldistancethisyear: "", timeincar: "", emissions: "", fueleconomy: "", parking: "", timetraveld: "", startlocation: "", endlocation: "", ownerId: ID){
    carName
    lastfillup
    lastfilluptime
    fuelleft
    traveldsince
    diagnostic
    diagnosticdetail
    businessratio
    businesstotal
    averagespeed
    traveldistancetotal
    traveldistancethisyear
    timeincar
    emissions
    fueleconomy
    parking
    timetraveld
    startlocation
    endlocation
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
  getCarQuery
};


