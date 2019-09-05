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
  refillUrl.searchParams.append(
    "filter",
    JSON.stringify({ order: "createdAt DESC", limit: 1 })
  );
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

// lastLocation GET /users/{id}/parkedVehicles

// //businessRatio
// //businessTotal
// // Currenlty not supported

//averageSpeed
async function getaverageSpeed(userId, authToken) {
  const baseaverageSpeedURL = `${API_URL}users/${userId}/summanry`;
  const averageSpeedUrl = new URL(baseaverageSpeedURL);
  debugger;
  return await fetchJSON(averageSpeedUrl.toString(), {}, authToken);
}

//travelDistanceTotal get /users/{id}/summary.distance
async function getTravelDistanceTotalData(userId, authToken) {
  const baseTravelDistanceTotalURL = `${API_URL}users/${userId}/summanry`;
  const travelDistanceTotalUrl = new URL(baseTravelDistanceTotalURL);
  return await fetchJSON(travelDistanceTotalUrl.toString(), {}, authToken);
}

//travelDistanceThisYear get /users/{id}/summary.distance
async function getTravelDistanceThisYearData(userId, authToken) {
  const baseTravelDistanceThisYearURL = `${API_URL}users/${userId}/summanry`;
  const travelDistanceThisYearUrl = new URL(baseTravelDistanceThisYearURL);
  return await fetchJSON(travelDistanceThisYearUrl.toString(), {}, authToken);
}

//timeInCar get /users/{id}/summary.durationInSeconds
async function getTimeInCarData(userId, authToken) {
  const baseTimeInCarURL = `${API_URL}users/${userId}/summanry`;
  const timeInCarUrl = new URL(baseTimeInCarURL);
  return await fetchJSON(timeInCarUrl.toString(), {}, authToken);
}

//emission get /users/{id}/summary.co2
function getEmissionData(userId, authToken) {
  const baseFuelEconomyURL = `${API_URL}users/${userId}/summanry`;
  const emissionsUrl = new URL(baseEmissionsURL);
  return await fetchJSON(emissionsUrl.toString(), {}, authToken);
}

//fuelEconomy  /users/{id}/summary.economy
function getFuelEconomyData(userId, authToken) {
  const baseFuelEconomyURL = `${API_URL}users/${userId}/summanry`;
  const fuelEconomyUrl = new URL(baseFuelEconomyURL);
  return await fetchJSON(fuelEconomyUrl.toString(), {}, authToken);
}

//parking //Google Map parking location (lat lng)

//timeTraveld Antd Table for time you have traveld: ex] "2019-01-17T08:00:00Z"
//startLocation Antd Table for start location for your last latest trip
//endLocation Antd Table for end location for your last latest trip
