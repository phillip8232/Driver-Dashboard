import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      vehicleName
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

const getDashboardAllDataQuery = gql`
  {
    car(id: "$vehicleId") {
      vehicleName
      lastFillUp
      lastFillUpTime
      lastLocation
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
      timeTraveled
      trips {
        startLocation
        endLocation
      }
    }
    owner(id: "5d6df6bd671e487c075bf05a") {
      firstName
      cars {
        vehicleName
      }
    }
  }
`;

export { getCarsQuery, getOwnersQuery, getDashboardAllDataQuery };
