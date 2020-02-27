webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/queries/queries.js":
/*!********************************!*\
  !*** ./src/queries/queries.js ***!
  \********************************/
/*! exports provided: getCarsQuery, getUserDataQuery, getDashboardAllDataQuery, LOGIN_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarsQuery", function() { return getCarsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserDataQuery", function() { return getUserDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardAllDataQuery", function() { return getDashboardAllDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_QUERY", function() { return LOGIN_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject4() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getDataForCar($vehicleId: ID!) {\n    car(id: $vehicleId) {\n      displayName\n      odometer\n      make\n      model\n      refillData {\n        litres\n        totalCost\n        odometerKms\n        timestamp\n        location {\n          lat\n          lng\n        }\n      }\n      odometerAtRefill\n      lastFillUp\n      lastFillUpTime\n      lastLocation {\n        lat\n        lng\n      }\n      fuelLeft\n      travelSince\n      diagnosticIssue {\n        code\n        isActive\n      }\n      diagnosticDetail\n      businessRatio\n      businessTotal\n      averageSpeed\n      travelDistanceTotal\n      travelDistanceThisYear\n      timeInCar\n      emissions\n      fuelEconomy\n      parking {\n        lat\n        lng\n      }\n      timeTraveled\n      recentTrip {\n        id\n        score\n        litres\n        litresPerHundredKm\n        distance\n        averageSpeed\n        durationInSeconds\n        startTime\n        endTime\n        tags {\n          name\n          id\n          tagType\n        }\n      }\n      trips {\n        litres\n        litresPerHundredKm\n        distance\n        averageSpeed\n        durationInSeconds\n        startTime\n        endTime\n        tags {\n          name\n          id\n          tagType\n        }\n        startLocation {\n          geoPoint {\n            lat\n            lng\n          }\n        }\n        endLocation {\n          geoPoint {\n            lat\n            lng\n          }\n        }\n      }\n      parkedVehicle {\n        name\n        location {\n          lat\n          lng\n        }\n        timestamp\n      }\n    }\n  }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    userData {\n      id\n      firstName\n      cars {\n        displayName\n        model\n        make\n        id\n      }\n    }\n  }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    cars {\n      carName\n      id\n    }\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      userId\n      authToken\n      successful\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const LOGIN_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
const getCarsQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());
const getUserDataQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3());
const getDashboardAllDataQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4());


/***/ })

})
//# sourceMappingURL=dashboard.js.434ac44783d57bde9f9b.hot-update.js.map