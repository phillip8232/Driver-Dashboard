webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/Components/DashboardHeader.js":
/*!*******************************************!*\
  !*** ./src/Components/DashboardHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/DashboardHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function DashboardHeader(props) {
  const {
    loading: carLoading,
    error: carError,
    data: carData
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_2__["getDashboardAllDataQuery"], {
    variables: {
      vehicleId: props.vehicleIdState.value
    }
  });
  const {
    error: userError,
    data: userData
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_2__["getUserDataQuery"]);

  if (carLoading) {
    return __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  } else if (carError, userError) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Error! ", (carError, userError));
  } else {
    return __jsx("div", {
      className: "hero-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "hero-img-car-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h3", {
      style: {
        color: '#fff'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, carData.car.make, " ", carData.car.model, "'s Lifetime Statistics from GOFAR"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      hidden: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Group, {
      size: "mini",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, carData.car.trips.length), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, " Total trips ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, carData.car.travelDistanceTotal, " KM"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Total Distance")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, carData.car.timeInCar, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Time in Car (hrs) ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, Math.floor(carData.car.odometer), " KM"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Current Odometer")))));
  }
}

/***/ })

})
//# sourceMappingURL=dashboard.js.140a21e4d565020d8422.hot-update.js.map