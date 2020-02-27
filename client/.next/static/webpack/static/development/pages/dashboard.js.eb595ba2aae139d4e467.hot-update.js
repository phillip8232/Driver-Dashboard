webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/Components/CarData.js":
/*!***********************************!*\
  !*** ./src/Components/CarData.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var _Card_LastFillUpCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card/LastFillUpCard */ "./src/Components/Card/LastFillUpCard.js");
/* harmony import */ var _Card_FuelLeftCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card/FuelLeftCard */ "./src/Components/Card/FuelLeftCard.js");
/* harmony import */ var _Card_DiagnosticCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card/DiagnosticCard */ "./src/Components/Card/DiagnosticCard.js");
/* harmony import */ var _Card_BusinessRatioCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Card/BusinessRatioCard */ "./src/Components/Card/BusinessRatioCard.js");
/* harmony import */ var _Card_AverageSpeedCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card/AverageSpeedCard */ "./src/Components/Card/AverageSpeedCard.js");
/* harmony import */ var _Card_TravelDistanceTotalCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Card/TravelDistanceTotalCard */ "./src/Components/Card/TravelDistanceTotalCard.js");
/* harmony import */ var _Card_TimeInCarCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Card/TimeInCarCard */ "./src/Components/Card/TimeInCarCard.js");
/* harmony import */ var _Card_EmissionsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Card/EmissionsCard */ "./src/Components/Card/EmissionsCard.js");
/* harmony import */ var _Card_FuelEconomyCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Card/FuelEconomyCard */ "./src/Components/Card/FuelEconomyCard.js");
/* harmony import */ var _GoogleMap_GoogleMap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GoogleMap/GoogleMap */ "./src/Components/GoogleMap/GoogleMap.js");
/* harmony import */ var _AntdTable_AntdTableComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AntdTable/AntdTableComponent */ "./src/Components/AntdTable/AntdTableComponent.js");
/* harmony import */ var _TripList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TripList */ "./src/Components/TripList.js");
var _jsxFileName = "/Users/haydenfuller/Documents/Hayden/Own Projects/gofar/Driver-Dashboard/client/src/Components/CarData.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















function CarData(props) {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_2__["getDashboardAllDataQuery"], {
    variables: {
      vehicleId: props.vehicleIdState.value
    }
  });

  if (loading) {
    return __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  } else if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Error! ", error);
  } else {
    return __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_TripList__WEBPACK_IMPORTED_MODULE_16__["default"], {
      trips: data.car.trips,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(_Card_LastFillUpCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      lastFillUpData: data.car.refillData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx(_Card_FuelLeftCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fuelLeft: data.car.fuelLeft,
      travelSince: data.car.recentTrip,
      lastRefillOdo: data.car.refillData,
      currentOdo: data.car.odometer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(_Card_DiagnosticCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      diagnosticIssue: data.car.diagnosticIssue // diagnosticDetail={data.car.diagnosticDetail}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(_Card_BusinessRatioCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      businessRatio: data.car.businessRatio,
      businessTotal: data.car.businessTotal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_GoogleMap_GoogleMap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_Card_AverageSpeedCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      speed: data.car.averageSpeed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx(_Card_TravelDistanceTotalCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      distanceTotal: data.car.travelDistanceTotal,
      distanceTotalThisYear: data.car.travelDistanceThisYear,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(_Card_TimeInCarCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      timeInCar: data.car.timeInCar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_Card_EmissionsCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      emission: data.car.emissions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx(_Card_FuelEconomyCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
      fuelEconomy: data.car.fuelEconomy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }))), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(_AntdTable_AntdTableComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tripData: data.car.trips,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })));
  }
}

/***/ })

})
//# sourceMappingURL=dashboard.js.eb595ba2aae139d4e467.hot-update.js.map