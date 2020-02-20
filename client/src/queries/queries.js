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
      id
      firstName
      cars {
        displayName
        model
        make
        id
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
          lng
        }
      }
      lastFillUp
      lastFillUpTime
      lastLocation {
        lat
        lng
      }
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
        lng
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
        tags {
          name
          id
          tagType
          createdAt
        }
      }
    }
  }
`;

export {
  getCarsQuery,
  getUserDataQuery,
  getDashboardAllDataQuery,
  LOGIN_QUERY,
};
