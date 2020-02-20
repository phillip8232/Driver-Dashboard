import { gql } from 'apollo-boost';

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      authToken
      successful
    }
  }
`;

const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;

const getUserDataQuery = gql`
  {
    userData {
      firstName
      id
      cars {
        displayName
        model
        make
        id
      }
    }
  }
`;

const getTripsDataQuery = gql`
  query getDataForCar($vehicleId: ID!) {
    car(id: $vehicleId) {
      trips {
        startLocation {
          lat
          lon
        }
        endLocation {
          lat
          lon
        }
      }
    }
  }
`;

const getDashboardAllDataQuery = gql`
  query getDataForCar($vehicleId: ID!) {
    car(id: $vehicleId) {
      displayName
      odometer
      make
      model
      refillData {
        litres
        totalCost
        odometerKms
        timestamp
        location {
          lat
          lon
        }
      }
      lastFillUp
      lastFillUpTime
      lastLocation
      fuelLeft
      travelSince
      diagnosticIssue {
        code
        isActive
        createdAt
      }
      diagnosticDetail
      businessRatio
      businessTotal
      averageSpeed
      travelDistanceTotal
      travelDistanceThisYear
      timeInCar
      emissions
      fuelEconomy
      parking {
        lat
        lon
      }
      timeTraveled
      trips {
        id
        score
        litres
        litresPerHundredKm
        distance
        averageSpeed
        durationInSeconds
      }
    }
  }
  
`;

export {
  getCarsQuery,
  getUserDataQuery,
  getDashboardAllDataQuery,
  LOGIN_QUERY,
  getTripsDataQuery
};
