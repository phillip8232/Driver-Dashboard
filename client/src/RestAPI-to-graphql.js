const fetch = require("isomorphic-fetch");

const API_URL = "https://dev.gofar.co/api/";

async function fetchJSON(url, options, authToken) {
  const rawResponse = await fetch(url, {
    headers: {
      Authorization: authToken
    },
    ...options
  });
  return await rawResponse.json();
}

async function getVehicleData(vehicleId, authToken) {
  return await fetchJSON(`${API_URL}vehicles/${vehicleId}`, {}, authToken);
}

async function getUserData(userId, authToken) {
  return await fetchJSON(`${API_URL}users/${userId}`, {}, authToken);
}

async function getRefillData(vehicleId, authToken) {
  const baseRefillURL = `${API_URL}vehicles/${vehicleId}/refills`;
  const refillUrl = new URL(baseRefillURL);
  refillUrl.searchParams.append("filter", JSON.stringify({ order: "createdAt DESC", limit: 1 }));
  return await fetchJSON(refillUrl.toString(), {}, authToken);
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
