const fetch = require("isomorphic-fetch");

const API_URL = "https://dev.gofar.co/api/";

async function getVehicleData(vehicleId, authToken) {
  const vehicleDataResponse = await fetch(`${API_URL}vehicles/${vehicleId}`, {
    headers: {
      Authorization: authToken
    }
  });
  const vehicleData = await vehicleDataResponse.json();
  return vehicleData;
}

async function getUserData(userId, authToken) {
  const userDataResponse = await fetch(`${API_URL}users/${userId}`, {
    headers: {
      Authorization: authToken
    }
  });
  const userData = await userDataResponse.json();
  return userData;
}

async function getRefillData(vehicleId, authToken) {
  const baseRefillURL = `${API_URL}vehicles/${vehicleId}/refills`;
  const refillUrl = new URL(baseRefillURL);
  const urlParams = { filter: { order: "createdAt DESC", limit: 1 } };
  Object.keys(urlParams).forEach(key =>
    refillUrl.searchParams.append(key, urlParams[key])
  );
  const refillsDataResponse = await fetch(refillUrl.toString(), {
    headers: {
      Authorization: authToken
    }
  });
  const refillsData = await refillsDataResponse.json();
  return refillsData;
}

async function getDetailsForVehicle(vehicleId, authToken) {
  const [vehicleData, refillData] = await Promise.all([
    getVehicleData(vehicleId, authToken),
    getRefillData(vehicleId, authToken)
  ]);
  debugger;
  const finalResult = {
    id: vehicleId,
    carName: vehicleData.displayName
  };
  return finalResult;
}

getDetailsForVehicle(
  "ae601765-b5bc-48c1-bffa-d4d77698aef7",
  "ut6c6ON9HCADkurhQncOuoWdoReo6oMSpsEHS4yk7muLUu6h1A2YRmEupp9guu0s"
);

// // GET /users/{id}/parkedVehicles

// //GET /Vehicles/{id}/diagnosticTroubleCodes
// //diagnosticIssue
// //diagnosticDetail
// async function getdiagnosticTroubleCodes(vehicledID, authToken){
//   const diagnosticTroubleCodes = await Promise.all([
//     getdiagnosticTroubleCodes(vehicleId, authToken)
//   ]);
//   const finalResult = {
//     id: vehicleId,
//     carName: vehicleData.displayName
//   }
// }

// //businessRatio
// //businessTotal
// // Currenlty not supported

// //averageSpeed
// function getaverageSpeed(vehicledID, authToken){
//   const baseaverageSpeedURL = `${API_URL}users/${userId}/summanry`;
//   const averageSpeedUrl = new URL(baseaverageSpeedURL);

//   Object.keys(urlParams).forEach(key => averageSpeedUrl.searchParams.append(key, urlParams[key]));
//   const averageSpeedDataResponse = await fetch(averageSpeedUrl, {
//     headers: {
//       'Authorization': authToken
//     },
//   });
//   const averageSpeedData = await averageSpeedDataResponse.json();
//   return averageSpeedData;
// }
// //travelDistanceTotal
// function getaverageSpeed(vehicledID, authToken){
//   const baseaverageSpeedURL = `${API_URL}users/${userId}/summanry`;
//   const averageSpeedUrl = new URL(baseaverageSpeedURL);

//   Object.keys(urlParams).forEach(key => averageSpeedUrl.searchParams.append(key, urlParams[key]));
//   const averageSpeedDataResponse = await fetch(averageSpeedUrl, {
//     headers: {
//       'Authorization': authToken
//     },
//   });
//   const averageSpeedData = await averageSpeedDataResponse.json();
//   return averageSpeedData;
// }

// //travelDistanceThisYear

//timeInCar
//emissions

//fuelEconomy

//parking

//timeTraveld

//startLocation

//endLocation
