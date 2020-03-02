module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "Atup":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LoadingSpinner = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
  active: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
  size: "massive"
}, "Loading")));

/* harmony default export */ __webpack_exports__["a"] = (LoadingSpinner);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "GbLe":
/***/ (function(module, exports) {

module.exports = require("reverse-geocode");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dN3h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCarsQuery */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDashboardAllDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_QUERY; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const LOGIN_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      authToken
      successful
    }
  }
`;
const getCarsQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  {
    cars {
      carName
      id
    }
  }
`;
const getUserDataQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
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
const getDashboardAllDataQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
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
      odometerAtRefill
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
      }
      businessRatio
      businessTotal
      averageSpeed
      travelDistanceTotal
      travelDistanceThisYear
      timeInCar
      emissions
      fuelEconomy
      timeTraveled
      recentTrip {
        id
        score
        litres
        litresPerHundredKm
        distance
        averageSpeed
        durationInSeconds
        startTime
        endTime
        tags {
          name
          id
          tagType
        }
      }
      trips {
        litres
        litresPerHundredKm
        distance
        averageSpeed
        durationInSeconds
        startTime
        endTime
        tags {
          name
          id
          tagType
        }
        startLocation {
          displayName
        }
        endLocation {
          displayName
        }
      }
      parkedVehicle {
        name
        location {
          lat
          lng
        }
        timestamp
      }
    }
  }
`;


/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./src/queries/queries.js
var queries = __webpack_require__("dN3h");

// EXTERNAL MODULE: ./src/Components/LoadingSpinner.js
var LoadingSpinner = __webpack_require__("Atup");

// CONCATENATED MODULE: ./src/Components/CarList.js
var __jsx = external_react_default.a.createElement;






function displayCars(data) {
  return data.cars.map(car => {
    return {
      value: car.id,
      label: `${car.displayName} ${car.make} (${car.model})`
    };
  });
}

/* harmony default export */ var CarList = (function (props) {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(queries["c" /* getUserDataQuery */]);

  if (loading) {
    return __jsx(LoadingSpinner["a" /* default */], null);
  } else if (error) {
    return __jsx("p", null, "Error! ", error);
  } else {
    return __jsx("div", {
      style: {
        padding: '10px 140px 0px 140px'
      }
    }, __jsx(external_react_select_default.a, {
      placeholder: 'Select a vehicle',
      onChange: props.vehicleSelection,
      options: displayCars(data.userData)
    }));
  }
});
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// CONCATENATED MODULE: ./src/Components/DashboardHeader.js
var DashboardHeader_jsx = external_react_default.a.createElement;





function DashboardHeader(props) {
  const {
    loading: carLoading,
    error: carError,
    data: carData
  } = Object(react_hooks_["useQuery"])(queries["b" /* getDashboardAllDataQuery */], {
    variables: {
      vehicleId: props.vehicleIdState.value
    }
  });
  const {
    error: userError,
    data: userData
  } = Object(react_hooks_["useQuery"])(queries["c" /* getUserDataQuery */]);

  if (carLoading) {
    return DashboardHeader_jsx(LoadingSpinner["a" /* default */], null);
  } else if (carError, userError) {
    return DashboardHeader_jsx("p", null, "Error! ", (carError, userError));
  } else {
    return DashboardHeader_jsx("div", {
      className: "hero-img"
    }, DashboardHeader_jsx(external_semantic_ui_react_["Header"], {
      as: "h1"
    }, "Welcome back ", userData.userData.firstName, "!"), DashboardHeader_jsx("div", {
      className: "hero-img-car-data"
    }, DashboardHeader_jsx("h3", {
      style: {
        color: '#fff'
      }
    }, carData.car.make, " ", carData.car.model, "'s Lifetime Statistics from GOFAR"), DashboardHeader_jsx(external_semantic_ui_react_["Divider"], {
      hidden: true
    }), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Group, {
      size: "mini"
    }, DashboardHeader_jsx(external_semantic_ui_react_["Statistic"], null, DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Value, null, carData.car.trips.length), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Label, null, " Total trips ")), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"], null, DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Value, null, carData.car.travelDistanceTotal, " KM"), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Label, null, "Total Distance")), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"], null, DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Value, null, carData.car.timeInCar, " "), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Label, null, "Time in Car (hrs) ")), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"], null, DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Value, null, Math.floor(carData.car.odometer), " KM"), DashboardHeader_jsx(external_semantic_ui_react_["Statistic"].Label, null, "Current Odometer")))));
  }
}
// EXTERNAL MODULE: external "reverse-geocode"
var external_reverse_geocode_ = __webpack_require__("GbLe");
var external_reverse_geocode_default = /*#__PURE__*/__webpack_require__.n(external_reverse_geocode_);

// CONCATENATED MODULE: ./src/Components/Card/LastFillUpCard.js
var LastFillUpCard_jsx = external_react_default.a.createElement;




class LastFillUpCard_LastFillUpCard extends external_react_default.a.Component {
  render(props) {
    if (this.props.lastFillUpData[0] === undefined || this.props.lastFillUpData[0] === null) {
      return LastFillUpCard_jsx(external_semantic_ui_react_["Card"], {
        className: "data-cards-r1"
      }, LastFillUpCard_jsx(external_semantic_ui_react_["Card"].Content, null, LastFillUpCard_jsx(external_semantic_ui_react_["Icon"], {
        float: "left",
        circular: true,
        inverted: true,
        color: "teal",
        name: "battery high",
        size: "big"
      }), LastFillUpCard_jsx("div", {
        className: "data-content"
      }, LastFillUpCard_jsx("h2", null, " You have no data ")), LastFillUpCard_jsx(external_semantic_ui_react_["Card"].Content, {
        extra: true
      }, LastFillUpCard_jsx("hr", null))));
    } else {
      this.lat = this.props.lastFillUpData[0].location.lat;
      this.lng = this.props.lastFillUpData[0].location.lng;
      this.time = new Date(this.props.lastFillUpData[0].timestamp);
      this.reverseGeo = external_reverse_geocode_default.a.lookup(this.lat, this.lng, 'au');
      return LastFillUpCard_jsx(external_semantic_ui_react_["Card"], {
        className: "data-cards-r1"
      }, LastFillUpCard_jsx(external_semantic_ui_react_["Card"].Content, null, LastFillUpCard_jsx(external_semantic_ui_react_["Icon"], {
        float: "left",
        circular: true,
        inverted: true,
        color: "teal",
        name: "battery high",
        size: "big"
      }), LastFillUpCard_jsx("div", {
        className: "data-content"
      }, LastFillUpCard_jsx("p", null, "Litres input last fillup "), LastFillUpCard_jsx("h2", null, this.props.lastFillUpData[0].litres, " L")), LastFillUpCard_jsx(external_semantic_ui_react_["Card"].Content, {
        extra: true
      }, LastFillUpCard_jsx("hr", null), LastFillUpCard_jsx("h4", null, "Last refill"), LastFillUpCard_jsx("p", null, "Time: ", this.time.toDateString()), LastFillUpCard_jsx("p", null, "Location: ", this.reverseGeo.city))));
    }
  }

}

/* harmony default export */ var Card_LastFillUpCard = (LastFillUpCard_LastFillUpCard);
// CONCATENATED MODULE: ./src/Components/Card/FuelLeftCard.js
var FuelLeftCard_jsx = external_react_default.a.createElement;



class FuelLeftCard_FuelLeftCard extends external_react_["Component"] {
  render(props) {
    if (!this.props.lastRefillOdo[0]) {
      return FuelLeftCard_jsx(external_semantic_ui_react_["Card"], {
        className: "data-cards-r1"
      }, FuelLeftCard_jsx(external_semantic_ui_react_["Card"].Content, null, FuelLeftCard_jsx(external_semantic_ui_react_["Icon"], {
        circular: true,
        inverted: true,
        color: "orange",
        name: "tachometer alternate",
        size: "big"
      }), FuelLeftCard_jsx("div", {
        className: "data-content"
      }, FuelLeftCard_jsx("h2", null, "You have no data")), FuelLeftCard_jsx(external_semantic_ui_react_["Card"].Content, {
        extra: true
      }, FuelLeftCard_jsx("hr", null))));
    } else {
      this.odometer = this.props.currentOdo;
      this.lastRefillOdo = this.props.lastRefillOdo[0].odometerKms;
      this.kmSinceLastRefill = this.odometer - this.lastRefillOdo;
      this.kmSinceLastRefillRounded = Math.floor(this.kmSinceLastRefill);
      return FuelLeftCard_jsx(external_semantic_ui_react_["Card"], {
        className: "data-cards-r1"
      }, FuelLeftCard_jsx(external_semantic_ui_react_["Card"].Content, null, FuelLeftCard_jsx(external_semantic_ui_react_["Icon"], {
        circular: true,
        inverted: true,
        color: "orange",
        name: "tachometer alternate",
        size: "big"
      }), FuelLeftCard_jsx("div", {
        className: "data-content"
      }, FuelLeftCard_jsx("p", null, "Estimated Fuel Left"), FuelLeftCard_jsx("h2", null, this.props.fuelLeft, " km")), FuelLeftCard_jsx(external_semantic_ui_react_["Card"].Content, {
        extra: true
      }, FuelLeftCard_jsx("hr", null), FuelLeftCard_jsx("p", null, " ", this.kmSinceLastRefillRounded, " km (since last fill up) "))));
    }
  }

}

/* harmony default export */ var Card_FuelLeftCard = (FuelLeftCard_FuelLeftCard);
// CONCATENATED MODULE: ./src/Components/Card/DiagnosticCard.js
var DiagnosticCard_jsx = external_react_default.a.createElement;



class DiagnosticCard_DiagnosticCard extends external_react_["Component"] {
  render(props) {
    if (this.props.diagnosticIssue[0] === undefined || this.props.diagnosticIssue[0] === null) {
      return DiagnosticCard_jsx(external_semantic_ui_react_["Card"], {
        className: "data-cards-r1"
      }, DiagnosticCard_jsx(external_semantic_ui_react_["Card"].Content, null, DiagnosticCard_jsx(external_semantic_ui_react_["Icon"], {
        circular: true,
        inverted: true,
        color: "red",
        name: "wrench",
        size: "big"
      }), DiagnosticCard_jsx("div", {
        className: "data-content"
      }, DiagnosticCard_jsx("p", null, "Diagnostic Issues"), DiagnosticCard_jsx("h2", null, "No Data")), DiagnosticCard_jsx(external_semantic_ui_react_["Card"].Content, {
        extra: true
      }, DiagnosticCard_jsx("hr", null), DiagnosticCard_jsx("a", {
        href: "/#"
      }, this.props.diagnosticDetail))));
    } else {
      return DiagnosticCard_jsx(external_semantic_ui_react_["Card"], {
        className: "data-cards-r1"
      }, DiagnosticCard_jsx(external_semantic_ui_react_["Card"].Content, null, DiagnosticCard_jsx(external_semantic_ui_react_["Icon"], {
        circular: true,
        inverted: true,
        color: "red",
        name: "wrench",
        size: "big"
      }), DiagnosticCard_jsx("div", {
        className: "data-content"
      }, DiagnosticCard_jsx("p", null, "Diagnostic Issues"), DiagnosticCard_jsx("h2", null, this.props.diagnosticIssue[0].code)), DiagnosticCard_jsx(external_semantic_ui_react_["Card"].Content, {
        extra: true
      }, DiagnosticCard_jsx("hr", null), DiagnosticCard_jsx("a", {
        href: "/#"
      }, this.props.diagnosticDetail))));
    }
  }

}

/* harmony default export */ var Card_DiagnosticCard = (DiagnosticCard_DiagnosticCard);
// CONCATENATED MODULE: ./src/Components/Card/BusinessRatioCard.js
var BusinessRatioCard_jsx = external_react_default.a.createElement;



class BusinessRatioCard_BusinessRatioCard extends external_react_["Component"] {
  render() {
    return BusinessRatioCard_jsx(external_semantic_ui_react_["Card"], {
      className: "data-cards-r1"
    }, BusinessRatioCard_jsx(external_semantic_ui_react_["Card"].Content, null, BusinessRatioCard_jsx(external_semantic_ui_react_["Icon"], {
      circular: true,
      inverted: true,
      color: "blue",
      name: "handshake",
      size: "big"
    }), BusinessRatioCard_jsx("div", {
      className: "data-content"
    }, BusinessRatioCard_jsx("p", null, "Business Travel"), BusinessRatioCard_jsx("h2", null, this.props.businessRatio, "%"), BusinessRatioCard_jsx("h2", null, this.props.businessTotal, " km")), BusinessRatioCard_jsx(external_semantic_ui_react_["Card"].Content, {
      extra: true
    })));
  }

}

/* harmony default export */ var Card_BusinessRatioCard = (BusinessRatioCard_BusinessRatioCard);
// CONCATENATED MODULE: ./src/Components/Card/AverageSpeedCard.js
var AverageSpeedCard_jsx = external_react_default.a.createElement;



class AverageSpeedCard_AverageSpeedCard extends external_react_["Component"] {
  render() {
    return AverageSpeedCard_jsx(external_semantic_ui_react_["Card"], {
      className: "data-cards-r1"
    }, AverageSpeedCard_jsx(external_semantic_ui_react_["Card"].Content, null, AverageSpeedCard_jsx(external_semantic_ui_react_["Icon"], {
      circular: true,
      inverted: true,
      color: "yellow",
      name: "shipping fast",
      size: "big"
    }), AverageSpeedCard_jsx("div", {
      className: "data-content"
    }, AverageSpeedCard_jsx("p", null, "Average Speed"), AverageSpeedCard_jsx("h2", null, this.props.speed, " km/hr")), AverageSpeedCard_jsx(external_semantic_ui_react_["Card"].Content, {
      extra: true
    })));
  }

}

/* harmony default export */ var Card_AverageSpeedCard = (AverageSpeedCard_AverageSpeedCard);
// CONCATENATED MODULE: ./src/Components/Card/TravelDistanceTotalCard.js
var TravelDistanceTotalCard_jsx = external_react_default.a.createElement;



class TravelDistanceTotalCard_TravelDistanceTotalCard extends external_react_["Component"] {
  render() {
    return TravelDistanceTotalCard_jsx(external_semantic_ui_react_["Card"], {
      className: "data-cards-r1"
    }, TravelDistanceTotalCard_jsx(external_semantic_ui_react_["Card"].Content, null, TravelDistanceTotalCard_jsx(external_semantic_ui_react_["Icon"], {
      circular: true,
      inverted: true,
      color: "brown",
      name: "road",
      size: "big"
    }), TravelDistanceTotalCard_jsx("div", {
      className: "data-content"
    }, TravelDistanceTotalCard_jsx("p", null, "Total Distance"), TravelDistanceTotalCard_jsx("h2", null, this.props.distanceTotal, " km"), TravelDistanceTotalCard_jsx("h2", null, this.props.distanceTotalThisYear, " km")), TravelDistanceTotalCard_jsx(external_semantic_ui_react_["Card"].Content, {
      extra: true
    })));
  }

}

/* harmony default export */ var Card_TravelDistanceTotalCard = (TravelDistanceTotalCard_TravelDistanceTotalCard);
// CONCATENATED MODULE: ./src/Components/Card/TimeInCarCard.js
var TimeInCarCard_jsx = external_react_default.a.createElement;



class TimeInCarCard_TimeInCarCard extends external_react_["Component"] {
  render() {
    return TimeInCarCard_jsx(external_semantic_ui_react_["Card"], {
      className: "data-cards-r1"
    }, TimeInCarCard_jsx(external_semantic_ui_react_["Card"].Content, null, TimeInCarCard_jsx(external_semantic_ui_react_["Icon"], {
      circular: true,
      inverted: true,
      color: "grey",
      name: "car",
      size: "big"
    }), TimeInCarCard_jsx("div", {
      className: "data-content"
    }, TimeInCarCard_jsx("p", null, "Time in Car (this year)"), TimeInCarCard_jsx("h2", null, this.props.timeInCar, " Hours")), TimeInCarCard_jsx(external_semantic_ui_react_["Card"].Content, {
      extra: true
    })));
  }

}

/* harmony default export */ var Card_TimeInCarCard = (TimeInCarCard_TimeInCarCard);
// CONCATENATED MODULE: ./src/Components/Card/EmissionsCard.js
var EmissionsCard_jsx = external_react_default.a.createElement;



class EmissionsCard_EmissionsCard extends external_react_["Component"] {
  render() {
    return EmissionsCard_jsx(external_semantic_ui_react_["Card"], {
      className: "data-cards-r1"
    }, EmissionsCard_jsx(external_semantic_ui_react_["Card"].Content, null, EmissionsCard_jsx(external_semantic_ui_react_["Icon"], {
      circular: true,
      inverted: true,
      color: "green",
      name: "tree",
      size: "big"
    }), EmissionsCard_jsx("div", {
      className: "data-content"
    }, EmissionsCard_jsx("p", null, "Emissions"), EmissionsCard_jsx("h2", null, this.props.emission, "kg C0", EmissionsCard_jsx("sub", null, "2")))));
  }

}

/* harmony default export */ var Card_EmissionsCard = (EmissionsCard_EmissionsCard);
// CONCATENATED MODULE: ./src/Components/Card/FuelEconomyCard.js
var FuelEconomyCard_jsx = external_react_default.a.createElement;



class FuelEconomyCard_FuelEconomyCard extends external_react_["Component"] {
  render() {
    return FuelEconomyCard_jsx(external_semantic_ui_react_["Card"], {
      className: "data-cards-r1"
    }, FuelEconomyCard_jsx(external_semantic_ui_react_["Card"].Content, null, FuelEconomyCard_jsx(external_semantic_ui_react_["Icon"], {
      circular: true,
      inverted: true,
      color: "violet",
      name: "dollar sign",
      size: "big"
    }), FuelEconomyCard_jsx("div", {
      className: "data-content"
    }, FuelEconomyCard_jsx("p", null, "Fuel Economy"), FuelEconomyCard_jsx("h2", null, this.props.fuelEconomy, "/100km")), FuelEconomyCard_jsx(external_semantic_ui_react_["Card"].Content, {
      extra: true
    })));
  }

}

/* harmony default export */ var Card_FuelEconomyCard = (FuelEconomyCard_FuelEconomyCard);
// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__("yOsI");

// CONCATENATED MODULE: ./src/Components/GoogleMap/Google_Secret.js
const GOOGLE_MAPS_API_KEY = 'AIzaSyB05HDuP6Jvdsy8jUcnvvkrW-Qq0Uluoyw';
/* harmony default export */ var Google_Secret = (GOOGLE_MAPS_API_KEY);
// CONCATENATED MODULE: ./src/Components/GoogleMap/GoogleMap.js
var GoogleMap_jsx = external_react_default.a.createElement;




console.log(`Coming from google maps`, Google_Secret);

class GoogleMap_SimpleMap extends external_react_["Component"] {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
  //   //   { latitude: 47.359423, longitude: -122.021071 },
  //   //   { latitude: 47.2052192687988, longitude: -121.988426208496 },
  //   //   { latitude: 47.6307081, longitude: -122.1434325 },
  //   //   { latitude: 47.3084488, longitude: -122.2140121 },
  //   //   { latitude: 47.5524695, longitude: -122.0425407 }]
  //   // }
  // }
  // displayMarkers = () => {
  //   //TODO;
  //   // return parkData.features.map(park => {
  //   //   return (
  //   //     <Marker
  //   //       key={park.properties.PARK_ID}
  //   //       position={{
  //   //         lat: park.geometry.coordinates[1],
  //   //         lng: park.geometry.coordinates[0]
  //   //       }}
  //   //       onClick={() => console.log("You clicked me!")}
  //   //     />
  //   //   );
  //   // });
  // };
  render() {
    return GoogleMap_jsx(external_semantic_ui_react_["Segment"], {
      style: {
        width: "85%"
      }
    }, GoogleMap_jsx(external_semantic_ui_react_["Header"], {
      icon: true
    }, GoogleMap_jsx(external_semantic_ui_react_["Icon"], {
      color: "red",
      name: "map marker alternate",
      size: "1.5rem"
    }), "Parking Location"), GoogleMap_jsx("div", {
      className: "ui embed",
      style: {
        maxWidth: "100vw",
        paddingBottom: "45%"
      }
    }, GoogleMap_jsx(external_google_maps_react_["Map"], {
      google: this.props.google,
      zoom: 9,
      initialCenter: {
        lat: 45.4211,
        lng: -75.6903
      }
    })));
  }

}

/* harmony default export */ var GoogleMap = (Object(external_google_maps_react_["GoogleApiWrapper"])({
  apiKey: Google_Secret
})(GoogleMap_SimpleMap));
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./src/Components/AntdTable/AntdTableComponent.js
var AntdTableComponent_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AntdTableComponent_AntdTableComponent extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter
      });
    });

    _defineProperty(this, "clearFilters", () => {
      this.setState({
        filteredInfo: null
      });
    });

    _defineProperty(this, "clearAll", () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null
      });
    });

    _defineProperty(this, "setTimeSort", () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'time'
        }
      });
    });

    _defineProperty(this, "setDistanceSort", () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'time'
        }
      });
    });

    this.state = {
      filteredInfo: null,
      sortedInfo: null
    };
  }

  render() {
    const trips = this.props.tripData;
    {
      console.log(trips);
    }
    let {
      sortedInfo,
      filteredInfo
    } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Time',
      dataIndex: 'startTime',
      key: 'startTime',
      sorter: (a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0,
      sortOrder: sortedInfo.columnKey === 'startTime' && sortedInfo.order
    }, {
      title: 'Distance',
      dataIndex: 'distance',
      key: 'distance',
      sorter: (a, b) => a.distance - b.distance,
      sortOrder: sortedInfo.columnKey === 'distance' && sortedInfo.order
    }, {
      title: 'Tags',
      dataIndex: 'tags',
      render: tags => AntdTableComponent_jsx("span", null, tags.map(tag => {
        let color = 'green';

        if (tag === 'vacation') {
          color = 'red';
        } else if (tag === 'busuiness') {
          color = 'blue';
        }

        return AntdTableComponent_jsx(external_antd_["Tag"], {
          color: color,
          key: tag
        }, tag.toUpperCase());
      })),
      key: 'tagType',
      filters: [{
        text: 'busuiness',
        value: 'busuiness'
      }, {
        text: 'vacation',
        value: 'vacation'
      }],
      filteredValue: filteredInfo.tags || null,
      onFilter: (value, record) => record.tags.includes(value)
    }, {
      title: 'Start Location',
      dataIndex: 'startLocation',
      key: 'geoPoint',
      filters: [{
        text: 'Sydney',
        value: 'Sydney'
      }, {
        text: 'Brisbane',
        value: 'Brisbane'
      }],
      filteredValue: filteredInfo.startLocation || null,
      onFilter: (value, record) => record.startLocation.includes(value)
    }, {
      title: 'End Location',
      dataIndex: 'endlocation',
      key: 'endlocation',
      filters: [{
        text: 'Sydney',
        value: 'Sydney'
      }, {
        text: 'Brisbane',
        value: 'Brisbane'
      }],
      filteredValue: filteredInfo.endlocation || null,
      onFilter: (value, record) => record.endlocation.includes(value)
    }];
    return AntdTableComponent_jsx(external_semantic_ui_react_["Segment"], null, AntdTableComponent_jsx("div", null, AntdTableComponent_jsx("div", {
      className: "table-operations"
    }, AntdTableComponent_jsx(external_antd_["Button"], {
      onClick: this.setTimeSort
    }, "Sort time"), AntdTableComponent_jsx(external_antd_["Button"], {
      onClick: this.setDistanceSort
    }, "Sort Distance"), AntdTableComponent_jsx(external_antd_["Button"], {
      onClick: this.clearFilters
    }, "Clear filters"), AntdTableComponent_jsx(external_antd_["Button"], {
      onClick: this.clearAll
    }, "Clear filters and sorters")), AntdTableComponent_jsx(external_antd_["Table"], {
      columns: columns,
      dataSource: trips,
      onChange: this.handleChange
    })));
  }

}

/* harmony default export */ var AntdTable_AntdTableComponent = (AntdTableComponent_AntdTableComponent);
// CONCATENATED MODULE: ./src/Components/TripList.js
var TripList_jsx = external_react_default.a.createElement;




function TripData({
  trips
}) {
  return TripList_jsx("div", null);
}

/* harmony default export */ var TripList = (TripData);
// CONCATENATED MODULE: ./src/Components/CarData.js
var CarData_jsx = external_react_default.a.createElement;

















function CarData(props) {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(queries["b" /* getDashboardAllDataQuery */], {
    variables: {
      vehicleId: props.vehicleIdState.value
    }
  });

  if (loading) {
    return CarData_jsx(LoadingSpinner["a" /* default */], null);
  } else if (error) {
    return CarData_jsx("p", null, "Error! ", error);
  } else {
    return CarData_jsx("div", {
      className: "ui container"
    }, CarData_jsx(external_semantic_ui_react_["Card"].Group, null, console.log(data.car), CarData_jsx(TripList, {
      trips: data.car.trips
    }), CarData_jsx(Card_LastFillUpCard, {
      lastFillUpData: data.car.refillData
    }), CarData_jsx(Card_FuelLeftCard, {
      fuelLeft: data.car.fuelLeft,
      travelSince: data.car.recentTrip,
      lastRefillOdo: data.car.refillData,
      currentOdo: data.car.odometer
    }), CarData_jsx(Card_DiagnosticCard, {
      diagnosticIssue: data.car.diagnosticIssue // diagnosticDetail={data.car.diagnosticDetail}

    }), CarData_jsx(Card_BusinessRatioCard, {
      businessRatio: data.car.businessRatio,
      businessTotal: data.car.businessTotal
    })), CarData_jsx("div", {
      className: "ui container"
    }, CarData_jsx(GoogleMap, null)), CarData_jsx("div", {
      className: "ui container"
    }, CarData_jsx(external_semantic_ui_react_["Card"].Group, null, CarData_jsx(Card_AverageSpeedCard, {
      speed: data.car.averageSpeed
    }), CarData_jsx(Card_TravelDistanceTotalCard, {
      distanceTotal: data.car.travelDistanceTotal,
      distanceTotalThisYear: data.car.travelDistanceThisYear
    }), CarData_jsx(Card_TimeInCarCard, {
      timeInCar: data.car.timeInCar
    }))), CarData_jsx("div", {
      className: "ui container"
    }, CarData_jsx(external_semantic_ui_react_["Card"].Group, null, CarData_jsx(Card_EmissionsCard, {
      emission: data.car.emissions
    }), CarData_jsx(Card_FuelEconomyCard, {
      fuelEconomy: data.car.fuelEconomy
    }))), CarData_jsx("div", {
      className: "ui container"
    }, CarData_jsx(AntdTable_AntdTableComponent, {
      tripData: data.car.trips
    })));
  }
}
// CONCATENATED MODULE: ./src/Components/Footer.js
var Footer_jsx = external_react_default.a.createElement;



const Footer = () => {
  return Footer_jsx("div", {
    className: "footer-content"
  }, Footer_jsx("div", {
    className: "media-content"
  }, Footer_jsx("a", {
    href: "https://www.facebook.com/GoFarCar/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Footer_jsx(external_semantic_ui_react_["Icon"], {
    className: "icon-color",
    size: "big",
    name: "facebook official"
  })), Footer_jsx("a", {
    href: "https://twitter.com/gofarcar",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Footer_jsx(external_semantic_ui_react_["Icon"], {
    size: "big",
    className: "icon-color",
    name: "twitter square"
  })), Footer_jsx("a", {
    href: "https://www.youtube.com/c/GofarCar",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Footer_jsx(external_semantic_ui_react_["Icon"], {
    size: "big",
    className: "icon-color",
    name: "youtube"
  })), Footer_jsx("a", {
    href: "https://www.linkedin.com/company/gofar/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Footer_jsx(external_semantic_ui_react_["Icon"], {
    size: "big",
    className: "icon-color",
    name: "linkedin"
  }))), Footer_jsx("div", {
    className: "resources-content"
  }, Footer_jsx(external_semantic_ui_react_["List"], null, Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/features/",
    target: "_blank"
  }, "Features"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/about-us/",
    target: "_blank"
  }, "About Us"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/fleets-government-corporations/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Fleets,Governments,Coporations"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/blog/",
    target: "_blank"
  }, "Blog"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/press-reviews/",
    target: "_blank"
  }, "Press & Reviews", ' ')), Footer_jsx(external_semantic_ui_react_["List"], null, Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/support/",
    target: "_blank"
  }, "Support"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/privacy-policy/",
    target: "_blank"
  }, "Privacy Policy"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/legal/",
    target: "_blank"
  }, "Legal"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/terms/",
    target: "_blank"
  }, "Terms"), Footer_jsx(external_semantic_ui_react_["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/shipping-refunds/",
    target: "_blank"
  }, "Shipping & Refund Policy"))));
};

/* harmony default export */ var Components_Footer = (Footer);
// CONCATENATED MODULE: ./src/pages/Dashboard/DashboardView.js
var DashboardView_jsx = external_react_default.a.createElement;





function DashboardView() {
  const {
    0: vehicleIdSelectionState,
    1: setVehicleIdSelectionState
  } = Object(external_react_["useState"])(null);

  const selectVehicle = vehicleIdSelectionState => {
    setVehicleIdSelectionState(vehicleIdSelectionState);
  };

  if (vehicleIdSelectionState != null) {
    return DashboardView_jsx(external_react_default.a.Fragment, null, DashboardView_jsx(DashboardHeader, {
      vehicleIdState: vehicleIdSelectionState
    }), DashboardView_jsx(CarList, {
      vehicleSelection: selectVehicle
    }), DashboardView_jsx(CarData, {
      vehicleIdState: vehicleIdSelectionState
    }), DashboardView_jsx(Components_Footer, null));
  } else {
    return DashboardView_jsx(external_react_default.a.Fragment, null, DashboardView_jsx(CarList, {
      vehicleSelection: selectVehicle
    }), DashboardView_jsx("div", {
      style: {
        height: '500px',
        textAlign: 'center',
        paddingTop: '50px'
      }
    }, DashboardView_jsx("h1", null, "You have to choose a vehicle"), DashboardView_jsx("img", {
      src: "https://media.giphy.com/media/xT3i0ZscbtF5DvLrGg/giphy.gif",
      alt: "Patrick-Gif"
    })), DashboardView_jsx(Components_Footer, null));
  }
}
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");

// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__("3i/4");
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// CONCATENATED MODULE: ./pages/dashboard.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPage; });
var dashboard_jsx = external_react_default.a.createElement;









const dashboard_link = Object(external_apollo_link_http_["createHttpLink"])({
  uri: '/graphql',
  fetch: external_node_fetch_default.a
});
function DashboardPage(props) {
  // TODO if not logged in redirect to login
  const client = new external_apollo_boost_default.a({
    uri: 'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.token,
      UserID: props.userId,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu'
    },
    fetch: external_node_fetch_default.a
  });
  return dashboard_jsx(external_react_apollo_["ApolloProvider"], {
    client: client
  }, dashboard_jsx(DashboardView, null));
}

DashboardPage.getInitialProps = ctx => {
  const token = external_next_cookies_default()(ctx).GofarDashboardToken;
  const userId = external_next_cookies_default()(ctx).GofarDashboardUserId;
  return {
    cookiez: external_next_cookies_default()(ctx) || '',
    token,
    userId
  };
};

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "yOsI":
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ })

/******/ });