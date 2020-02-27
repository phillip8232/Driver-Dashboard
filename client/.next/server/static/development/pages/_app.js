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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Components_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/PrivateRoute */ "./src/Components/PrivateRoute.js");
/* harmony import */ var _src_Components_DashboardSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/DashboardSidebar */ "./src/Components/DashboardSidebar.js");
/* harmony import */ var _src_Pages_Login_LoginPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Pages/Login/LoginPage */ "./src/Pages/Login/LoginPage.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_styles_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _src_styles_App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function App() {
  const {
    0: loginDetails,
    1: setLoginDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: localUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: localToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      window.localStorage.setItem('GofarDashboardToken', loginResult.authToken);
      window.localStorage.setItem('GofarDashboardUserId', loginResult.userId); // localStorage.getItem('GofarDashboardUserId')
      // localStorage.getItem('GofarDashboardToken'))
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_src_Components_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: _src_Components_DashboardSidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
    userId: localUserId,
    authToken: localToken,
    exact: true,
    path: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: props => __jsx(_src_Pages_Login_LoginPage__WEBPACK_IMPORTED_MODULE_4__["LoginPage"], _extends({}, props, {
      handleLoggedIn: loginResult => {
        // TODO - you have auth token and user ID now.
        setLoginDetails(loginResult);
      },
      authToken: loginDetails.authToken,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })),
    exact: true,
    path: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/AntdTable/AntdTableComponent.js":
/*!********************************************************!*\
  !*** ./src/Components/AntdTable/AntdTableComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/AntdTable/AntdTableComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const data = [{
  key: '1',
  time: '2019-01-17T08:00:00Z',
  distance: 20,
  tags: ['vacation'],
  startlocation: 'Sydney',
  endlocation: 'Melbourne'
}, {
  key: '2',
  time: '2019-04-17T09:52:00Z',
  distance: 22,
  tags: [],
  startlocation: 'Melbourne',
  endlocation: 'Sydney'
}, {
  key: '3',
  time: '2019-05-17T12:32:00Z',
  distance: 23,
  tags: ['busuiness'],
  startlocation: 'Brisbane',
  endlocation: 'Gold Coast'
}, {
  key: '4',
  time: '2019-07-17T11:00:00Z',
  distance: 40,
  tags: [],
  startlocation: 'Gold Coast',
  endlocation: 'Brisbane'
}, {
  key: '5',
  time: '2019-07-21T11:33:00Z',
  distance: 33,
  tags: ['busuiness'],
  startlocation: 'lennox head',
  endlocation: 'Margaret River'
}, {
  key: '6',
  time: '2019-08-01T19:41:00Z',
  distance: 21,
  tags: ['commute'],
  startlocation: 'Perth',
  endlocation: 'Adelaide'
}, {
  key: '7',
  time: '2019-08-15T15:21:00Z',
  distance: 19,
  tags: ['commute'],
  startlocation: 'Adelaide',
  endlocation: 'Brisbane'
}]; // const columns = [
//   {
//     title: "Time",
//     dataIndex: "time"
//   },
//   {
//     title: "Distance",
//     dataIndex: "ditance"
//   },
//   {
//     title: "Tags",
//     dataIndex: "tags"
//   },
//   {
//     title: "Start Loocation",
//     dataIndex: "startlocation"
//   },
//   {
//     title: "End Location",
//     dataIndex: "endlocation"
//   }
// ];

class AntdTableComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    {}
    let {
      sortedInfo,
      filteredInfo
    } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      sorter: (a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0,
      sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order
    }, {
      title: 'Distance',
      dataIndex: 'distance',
      key: 'distance',
      sorter: (a, b) => a.distance - b.distance,
      sortOrder: sortedInfo.columnKey === 'distance' && sortedInfo.order
    }, {
      title: 'Tags',
      dataIndex: 'tags',
      render: tags => __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, tags.map(tag => {
        let color = 'green';

        if (tag === 'vacation') {
          color = 'red';
        } else if (tag === 'busuiness') {
          color = 'blue';
        }

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
          color: color,
          key: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, tag.toUpperCase());
      })),
      key: 'tags',
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
      dataIndex: 'startlocation',
      key: 'startlocation',
      filters: [{
        text: 'Sydney',
        value: 'Sydney'
      }, {
        text: 'Brisbane',
        value: 'Brisbane'
      }],
      filteredValue: filteredInfo.startlocation || null,
      onFilter: (value, record) => record.startlocation.includes(value)
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
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("div", {
      className: "table-operations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.setTimeSort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Sort time"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.setDistanceSort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, "Sort Distance"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clearFilters,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Clear filters"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clearAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Clear filters and sorters")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      columns: columns,
      dataSource: data,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AntdTableComponent);

/***/ }),

/***/ "./src/Components/CarData.js":
/*!***********************************!*\
  !*** ./src/Components/CarData.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
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
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/CarData.js";
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
        lineNumber: 26
      },
      __self: this
    });
  } else if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Error! ", error);
  } else {
    return __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_Card_LastFillUpCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      lastFillUpData: data.car.refillData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx(_Card_FuelLeftCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fuelLeft: data.car.fuelLeft,
      travelSince: data.car.recentTrip,
      lastRefillOdo: data.car.refillData,
      currentOdo: data.car.odometer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx(_Card_DiagnosticCard__WEBPACK_IMPORTED_MODULE_7__["default"] // diagnosticIssue={data.car.diagnosticIssue}
    , {
      diagnosticDetail: data.car.diagnosticDetail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(_Card_BusinessRatioCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      businessRatio: data.car.businessRatio,
      businessTotal: data.car.businessTotal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_GoogleMap_GoogleMap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_Card_AverageSpeedCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      speed: data.car.averageSpeed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx(_Card_TravelDistanceTotalCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      distanceTotal: data.car.travelDistanceTotal,
      distanceTotalThisYear: data.car.travelDistanceThisYear,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx(_Card_TimeInCarCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      timeInCar: data.car.timeInCar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }))), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_Card_EmissionsCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      emission: data.car.emissions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx(_Card_FuelEconomyCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
      fuelEconomy: data.car.fuelEconomy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }))), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(_AntdTable_AntdTableComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })));
  }
}

/***/ }),

/***/ "./src/Components/CarList.js":
/*!***********************************!*\
  !*** ./src/Components/CarList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/CarList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function displayCars(data) {
  return data.cars.map(car => {
    return {
      value: car.id,
      label: `${car.displayName} ${car.make} (${car.model})`
    };
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_3__["getUserDataQuery"]);

  if (loading) {
    return __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  } else if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Error! ", error);
  } else {
    return __jsx("div", {
      style: {
        padding: '10px 140px 0px 140px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
      placeholder: 'Select a vehicle',
      onChange: props.vehicleSelection,
      options: displayCars(data.userData),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }
});

/***/ }),

/***/ "./src/Components/Card/AverageSpeedCard.js":
/*!*************************************************!*\
  !*** ./src/Components/Card/AverageSpeedCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/AverageSpeedCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AverageSpeedCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "yellow",
      name: "shipping fast",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Average Speed"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.speed, " km/hr")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AverageSpeedCard);

/***/ }),

/***/ "./src/Components/Card/BusinessRatioCard.js":
/*!**************************************************!*\
  !*** ./src/Components/Card/BusinessRatioCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/BusinessRatioCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BusinessRatioCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "blue",
      name: "handshake",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Business Travel"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.businessRatio, "%"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.businessTotal, " km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BusinessRatioCard);

/***/ }),

/***/ "./src/Components/Card/DiagnosticCard.js":
/*!***********************************************!*\
  !*** ./src/Components/Card/DiagnosticCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/DiagnosticCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DiagnosticCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "red",
      name: "wrench",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Diagnostic Issues"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.diagnosticIssue)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("a", {
      href: "/#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.diagnosticDetail))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DiagnosticCard);

/***/ }),

/***/ "./src/Components/Card/EmissionsCard.js":
/*!**********************************************!*\
  !*** ./src/Components/Card/EmissionsCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/EmissionsCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class EmissionsCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "green",
      name: "tree",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Emissions"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.emission, "kg C0", __jsx("sub", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "2")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmissionsCard);

/***/ }),

/***/ "./src/Components/Card/FuelEconomyCard.js":
/*!************************************************!*\
  !*** ./src/Components/Card/FuelEconomyCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/FuelEconomyCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FuelEconomyCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "violet",
      name: "dollar sign",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Fuel Economy"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.fuelEconomy, "/100km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FuelEconomyCard);

/***/ }),

/***/ "./src/Components/Card/FuelLeftCard.js":
/*!*********************************************!*\
  !*** ./src/Components/Card/FuelLeftCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/FuelLeftCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FuelLeftCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    if (!this.props.lastRefillOdo[0]) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        circular: true,
        inverted: true,
        color: "orange",
        name: "tachometer alternate",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "You have no data")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))));
    } else {
      this.odometer = this.props.currentOdo;
      this.lastRefillOdo = this.props.lastRefillOdo[0].odometerKms;
      this.kmSinceLastRefill = this.odometer - this.lastRefillOdo;
      this.kmSinceLastRefillRounded = Math.floor(this.kmSinceLastRefill);
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        circular: true,
        inverted: true,
        color: "orange",
        name: "tachometer alternate",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Estimated Fuel Left"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.fuelLeft, " km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " ", this.kmSinceLastRefillRounded, " km (since last fill up) "))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FuelLeftCard);

/***/ }),

/***/ "./src/Components/Card/LastFillUpCard.js":
/*!***********************************************!*\
  !*** ./src/Components/Card/LastFillUpCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reverse_geocode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reverse-geocode */ "reverse-geocode");
/* harmony import */ var reverse_geocode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reverse_geocode__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/LastFillUpCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class LastFillUpCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render(props) {
    if (this.props.lastFillUpData[0] === undefined || this.props.lastFillUpData[0] === null) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        float: "left",
        circular: true,
        inverted: true,
        color: "teal",
        name: "battery high",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, " You have no data ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))));
    } else {
      this.lat = this.props.lastFillUpData[0].location.lat;
      this.lng = this.props.lastFillUpData[0].location.lng;
      this.time = new Date(this.props.lastFillUpData[0].timestamp);
      this.reverseGeo = reverse_geocode__WEBPACK_IMPORTED_MODULE_2___default.a.lookup(this.lat, this.lng, 'au');
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        float: "left",
        circular: true,
        inverted: true,
        color: "teal",
        name: "battery high",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Litres input last fillup "), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.lastFillUpData[0].litres, " L")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Last refill"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Time: ", this.time.toDateString()), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Location: ", this.reverseGeo.city))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LastFillUpCard);

/***/ }),

/***/ "./src/Components/Card/TimeInCarCard.js":
/*!**********************************************!*\
  !*** ./src/Components/Card/TimeInCarCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/TimeInCarCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TimeInCarCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "grey",
      name: "car",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Time in Car (this year)"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.timeInCar, " Hours")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TimeInCarCard);

/***/ }),

/***/ "./src/Components/Card/TravelDistanceTotalCard.js":
/*!********************************************************!*\
  !*** ./src/Components/Card/TravelDistanceTotalCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/TravelDistanceTotalCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TravelDistanceTotalCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "brown",
      name: "road",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Total Distance"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.distanceTotal, " km"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.distanceTotalThisYear, " km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TravelDistanceTotalCard);

/***/ }),

/***/ "./src/Components/DashboardHeader.js":
/*!*******************************************!*\
  !*** ./src/Components/DashboardHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Welcome back! ", userData.firstName), __jsx("div", {
      className: "hero-img-car-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, carData.car.make, " ", carData.car.model, "'s Lifetime Statistics from GOFAR"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      hidden: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Group, {
      size: "mini",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, carData.car.trips.length), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, " Total trips ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, carData.car.travelDistanceTotal, " KM"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Total Distance")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, carData.car.timeInCar, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Time in Car (hrs) ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, Math.floor(carData.car.odometer), " KM"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Current Odometer")))));
  }
}

/***/ }),

/***/ "./src/Components/DashboardSidebar.js":
/*!********************************************!*\
  !*** ./src/Components/DashboardSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown */ "./src/Components/Dropdown.js");
/* harmony import */ var _Pages_Dashboard_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/Dashboard/DashboardPage */ "./src/Pages/Dashboard/DashboardPage.js");
/* harmony import */ var _LogoutModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogoutModal */ "./src/Components/LogoutModal.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/DashboardSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DashboardSidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false,
      icon: 'sidebar'
    });

    _defineProperty(this, "handleHideClick", () => this.setState({
      visible: false
    }));

    _defineProperty(this, "handleShowClick", () => this.setState({
      visible: true,
      icon: ''
    }));

    _defineProperty(this, "handleSidebarHide", () => this.setState({
      visible: false,
      icon: 'sidebar'
    }));

    _defineProperty(this, "DisplayCarData", () => this.setState({
      visible: false
    }));
  }

  render() {
    const {
      visible,
      icon
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "navbar-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: "navbar-button",
      disabled: visible,
      onClick: this.handleShowClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      name: icon,
      style: {
        color: '#fff'
      },
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"].Pushable, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"],
      animation: "overlay",
      icon: "labeled",
      inverted: true,
      onHide: this.handleSidebarHide,
      vertical: true,
      visible: visible,
      width: "thin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Welcome User!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      name: "car",
      size: "massive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), "Cars", __jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.DisplayCarData,
      className: "ui inverted primary basic button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Show Data")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleSidebarHide,
      className: "ui inverted red basic button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      name: "arrow circle left",
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), "Close Sidebar")), __jsx(_LogoutModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hide: this.handleSidebarHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"].Pusher, {
      dimmed: visible,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_Pages_Dashboard_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["DashboardPage"], _extends({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./src/Components/Dropdown.js":
/*!************************************!*\
  !*** ./src/Components/Dropdown.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import React, { Component } from "react";
// import { Dropdown } from "semantic-ui-react";
// import { graphql } from "react-apollo";
// import { getDashboardAllDataQuery } from "../queries/queries";
// class CarDropDown extends Component {
//   render() {
//     return (
//       <Dropdown
//         className="dd-styles"
//         placeholder="Select Car"
//         fluid
//         selection
//         options={[
//           {
//             key: "Honda",
//             text: "Honda",
//             value: "Honda"
//           },
//           {
//             key: "Toyota",
//             text: "Toyota",
//             value: "Toyota"
//           },
//           {
//             key: "Mercedez Benz",
//             text: "Mercedez Benz",
//             value: "Mercdez Benz"
//           }
//         ]}
//       />
//     );
//   }
// }
// export default graphql(getDashboardAllDataQuery)(CarDropDown);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return 'TODO';
});

/***/ }),

/***/ "./src/Components/Footer.js":
/*!**********************************!*\
  !*** ./src/Components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("div", {
    className: "footer-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.facebook.com/GoFarCar/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    className: "icon-color",
    size: "big",
    name: "facebook official",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://twitter.com/gofarcar",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    className: "icon-color",
    name: "twitter square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.youtube.com/c/GofarCar",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    className: "icon-color",
    name: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/gofar/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    className: "icon-color",
    name: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))), __jsx("div", {
    className: "resources-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/features/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Features"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/about-us/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "About Us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/fleets-government-corporations/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Fleets,Governments,Coporations"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/blog/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Blog"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/press-reviews/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Press & Reviews", ' ')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/support/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Support"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/privacy-policy/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Privacy Policy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/legal/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Legal"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/terms/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Terms"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/shipping-refunds/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Shipping & Refund Policy"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Components/GoogleMap/GoogleMap.js":
/*!***********************************************!*\
  !*** ./src/Components/GoogleMap/GoogleMap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/GoogleMap/GoogleMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class SimpleMap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      icon: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      color: "red",
      name: "map marker alternate",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), "Parking Location"), __jsx("div", {
      className: "ui embed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      zoom: 9,
      initialCenter: {
        lat: 45.4211,
        lng: -75.6903
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: `${process.env.REACT_APP_GOOGLE_KEY}`
})(SimpleMap));

/***/ }),

/***/ "./src/Components/LoadingSpinner.js":
/*!******************************************!*\
  !*** ./src/Components/LoadingSpinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/LoadingSpinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LoadingSpinner = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
  active: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
  size: "massive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Loading")));

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./src/Components/Login/LoginForm.js":
/*!*******************************************!*\
  !*** ./src/Components/Login/LoginForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/GoFarlogo.png */ "./src/Images/GoFarlogo.png");
/* harmony import */ var _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Login/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoginForm = props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    textAlign: "center",
    style: {
      height: "100vh"
    },
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      maxWidth: 450
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    color: "teal",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    style: {
      width: "30%",
      height: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    stacked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "user",
    iconPosition: "left",
    placeholder: "E-mail address",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "lock",
    iconPosition: "left",
    placeholder: "Password",
    type: "password",
    onChange: e => setPassword(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: e => {
      props.handleLogin(email, password);
      e.preventDefault();
    },
    color: "blue",
    fluid: true,
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Login"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "New to us? ", __jsx("a", {
    href: "/#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Sign Up"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/Components/LogoutModal.js":
/*!***************************************!*\
  !*** ./src/Components/LogoutModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/LogoutModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class LogOutModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "log out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), "Logout"),
      basic: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      icon: "log out",
      content: "  Log Out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Are you sure you want to log out?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.props.hide,
      open: false,
      basic: true,
      color: "red",
      inverted: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "No"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      basic: true,
      color: "green",
      inverted: true,
      onClick: () => {
        localStorage.clear();
      },
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Yes")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LogOutModal);

/***/ }),

/***/ "./src/Components/Navbar.js":
/*!**********************************!*\
  !*** ./src/Components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/GoFarlogo.png */ "./src/Images/GoFarlogo.png");
/* harmony import */ var _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Navbar = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
  fixed: "top",
  inverted: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  as: "a",
  header: true,
  href: "https://www.gofar.co",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
  size: "tiny",
  src: _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  style: {
    marginRight: "1.5em"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  as: "a",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
  item: true,
  simple: true,
  text: "More",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
  as: "a",
  href: "https://www.gofar.co/about-us/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "About Us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Whatever"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Header Item"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("i", {
  className: "dropdown icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("span", {
  className: "text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Submenu"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "List Item"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "List Item"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "List Item"))))));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/Components/PrivateRoute.js":
/*!****************************************!*\
  !*** ./src/Components/PrivateRoute.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/PrivateRoute.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PrivateRoute = originalProps => {
  const {
    component: Component,
    authToken
  } = originalProps,
        rest = _objectWithoutProperties(originalProps, ["component", "authToken"]);

  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
    render: props => {
      if (authToken) {
        return __jsx(Component, _extends({}, props, originalProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        }));
      }

      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/Images/GoFarlogo.png":
/*!**********************************!*\
  !*** ./src/Images/GoFarlogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAbCAYAAACTMQajAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MGY1OGQ2MC0yYjQ1LTQ0NjctOTQ5ZS05OTgzMDBhMmRmYjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFCQTg5MzFFNTlCMTFFODhEQTNFOTA0RjQ2NENFQkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFCQTg5MzBFNTlCMTFFODhEQTNFOTA0RjQ2NENFQkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozZTRkYzVhOC1lNzBhLTQ0NDUtOTNjYy01ODdlN2IzZWRiMGYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjOTU0NjVmYS05YTE4LWQzNGEtOGI3NS02N2E1OTc5ODU1OWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz53aMV9AAAG8ElEQVR42sxba2xVRRA+tw9KLFIUylsRA03FtFRR8U2l0aDBUGgiPmMTXwhEUBE1GLSpD4ImYAJpi6AF/AHEIoZYqpimgRIoWEQqAYRS5GXTVhC00ALt9Zt0r7k5d/aex+6590zyZdt9zMw5O2d3dnZuwLCgYDCYgmIiMAm4ExgFpIvmDqANOADsBr4LBAL1hiaC7KEoCoAJwFhgBJAsms8DjcAeYCtQCdmXDI0E+TejeAgYAiTZHHYcepS7lBdA8Q6QYmraCp47NDzPBw66XwGagaPATsi/7FRYXxIItASd0WGgEEhSeNAcYBPQ7UDuWeAjIE3Dix4IVATdUY2C3EkSnnWaPgi31A58BYyxK2iaC8MxU76LB+wNLHFoOGZqcSM7TIdBwDEF+SoGVBWF7z1xNKAQXQWKgETpEgosDuqhfIcPlw7sDOqjIpcveZOi3BqXcm+x4LvBBwYUojViu40QsNzG4L+A3cBPQC1wUtWAxHa5z0JuF3CIJgjYBZyxoeuHDl/wKA0v160Bldn4+m/0iQERzTHCHUNUzEAxM4pD9SWwAvgFDlXQpNhgFJMB4jHOxbOVCyeZo5MAGcJGyG0zyc1C8YLQO5kZu4AME+O+sanHBEn9euALoMsGj79dTGx/FM9ZdKNtYzYw39BLFcAypj5ZHJheBnKYdtrKVv9/2gAuSixtLzDawcsocOKHoN/0KFa+TJwC7awc+yU8WoHrberynoTHUMNDAv93bX7154A+mlegpRZjEoFyydiXQp3Wybx/INXN8RvItNEvCTgqkb3Iocw04DcVXuLUyVE/D40nGTjFyNwitm0zzYqlAYlxqeKUG+ELUeMwiaLnYvDlTZU81HYgwQW/DKBT8iwpPjWgpyUyxwGbJWGShFgaUJTDRTUpMh3gFCqG73DG8JaektS/AdndTplhzO8oSpmmfiIQ6keay9TVi4BsCdOWATwaBz25QGJHgoi0cp1XxUCpXKbuEF7eHgWe5Q4d5LgRvuB7RXTfTCHDqQJOMO2vx1hPOmzdzTQ1kgFlMw11mMTzHiuVHnYlEk4/KLLeB7Qw9Vk+XH04Q/gHWCdWVFqFy5g+eeIEGit6G7iBmyuyrOFMw4EoEz8ShZ3rgiYLIxwmqT+i8qQUYgA14c+BpqYhCmzJT7los28zdKiy8QHRvd5Upmk1xreH/U/hkyIj8i6O4jAvajCOFImPRz7jaBGaeYZpPwxUOnasHERq862Wb8m4ZzWsbt8zfI8rONHaA4no96lkfBbTdwPT75JYxeMRSKSg5v2GcJ654FjvGCyLsi86TQPv/kzdvz7yffpIVo9arD4NTH2ZZI5mxEH9q0Ah9KwNGdBpptOYGChyWlKfoTg5dEczkmn600e+T6E4GZpphaR/tWRrn4nn7RVDvSm1Iw/G83WoggxoP9NxvJexD+GrtKJoZZoeUWR9G+P/EDX4ZPWhd/6apHkNt1+gvlv4I2YaLMIwsSBa7W7FvG0LryTHjPbsyabOvcQS+xnDaDMQ7k+QE17gUqlq5gVk4p2Nh6J1Cl83RzUKL29WlC03wom2aH9MYgwqJ7m1CuOPmT4uOmzcxfS7iU0qw2QNl+Tf2IpEo0+u29t4i0h0oouvO9PvkWiRxaCbHlRwopea+qRKrlaucAllCbCqUyi5XBN6aXTiutbDZZFWs0amnjz8TxxODDnfFWL1jHBC8ZydPti+6ISV5wHruRpdCwohzGOaaLcqNecBhWILC4F8IzIXl6Kk2zDoCTA+ovupwZOOgwtCgTMTvSUuct9Evw6LickQxsM5/+RnLfaJ8yyb6PU2tr4Q0TyNMNVNofgc3lOTJj1JH0qRecBUT/8/b3DRfigwL8oSeRkg67vDfJGnsoWF8YiWf3wCeAUYwIwbC3wu9JNRgQM9PNvCRMZlB8O7mW7kHfCZLdFxiY4tLKxvjuSSvU3kL0Uef4G1NpPXf6abWOGrNGvKSNxrIbdb3ERvF2kmzTZ0LXY4yV4a0EJNWZN9RZK7mS5YuRsugsalkjErZQMoeWhVHHOid2h0LN93McmeGBDFaiQG3y2uNJzyWxktzVSjAQ0QBxCO7gvFgcJ9ki6AUkRfBdpj6RyIuBA5mLQUBxVYEZ8p4Fdk+IeeBAYx9Vug5x8u+JVI6ue4zRWSzEmb8I85Kou69YqswpIoqa4yOqjhd2HZwEaHP++hZP9ild+FebgCybbnxxV41jtd+V2mtFLWaINk7PyADUWvQ0EP+jBwOwWUgGtE8wWjJ3XioNHzC9FKD36ZOs3oyeXJFqeP0EnxLNAk5P4oZHcqyss1+BylRVYnQYv3x20tdAf5Ma36LvlS7Gci0/QreH4r+0CY6l1W2QOUHSlswEzt/wkwANjG0uR0A3ovAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/Images/loginHeroImage.jpg":
/*!***************************************!*\
  !*** ./src/Images/loginHeroImage.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loginHeroImage-1de59b2db4154bd5fbe226ac253b07d0.jpg";

/***/ }),

/***/ "./src/Pages/Dashboard/DashboardPage.js":
/*!**********************************************!*\
  !*** ./src/Pages/Dashboard/DashboardPage.js ***!
  \**********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var _DashboardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardView */ "./src/Pages/Dashboard/DashboardView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Pages/Dashboard/DashboardPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function DashboardPage(props) {
  // Apollo client setup
  const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: 'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu'
    }
  });
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_DashboardView__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/Pages/Dashboard/DashboardView.js":
/*!**********************************************!*\
  !*** ./src/Pages/Dashboard/DashboardView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CarList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/CarList */ "./src/Components/CarList.js");
/* harmony import */ var _Components_DashboardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/DashboardHeader */ "./src/Components/DashboardHeader.js");
/* harmony import */ var _Components_CarData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/CarData */ "./src/Components/CarData.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Footer */ "./src/Components/Footer.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Pages/Dashboard/DashboardView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function DashboardView() {
  const {
    0: vehicleIdSelectionState,
    1: setVehicleIdSelectionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const selectVehicle = vehicleIdSelectionState => {
    setVehicleIdSelectionState(vehicleIdSelectionState);
  };

  if (vehicleIdSelectionState != null) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_DashboardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      vehicleIdState: vehicleIdSelectionState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx(_Components_CarList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      vehicleSelection: selectVehicle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(_Components_CarData__WEBPACK_IMPORTED_MODULE_3__["default"], {
      vehicleIdState: vehicleIdSelectionState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_CarList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      vehicleSelection: selectVehicle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("div", {
      style: {
        height: '500px',
        textAlign: 'center',
        paddingTop: '50px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "You have to chose a vehicle"), __jsx("img", {
      src: "https://media.giphy.com/media/xT3i0ZscbtF5DvLrGg/giphy.gif",
      alt: "Patrick-Gif",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }
}

/***/ }),

/***/ "./src/Pages/Login/LoginPage.js":
/*!**************************************!*\
  !*** ./src/Pages/Login/LoginPage.js ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _LoginView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginView */ "./src/Pages/Login/LoginView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Pages/Login/LoginPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function LoginPage(props) {
  if (props.authToken) {
    return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

  const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: 'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu'
    }
  });
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_LoginView__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/Pages/Login/LoginView.js":
/*!**************************************!*\
  !*** ./src/Pages/Login/LoginView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Login/LoginForm */ "./src/Components/Login/LoginForm.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Navbar */ "./src/Components/Navbar.js");
/* harmony import */ var _Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Images/loginHeroImage.jpg */ "./src/Images/loginHeroImage.jpg");
/* harmony import */ var _Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Pages/Login/LoginView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const renderBody = executeLogin => {
  return __jsx(_Components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleLogin: (email, password) => {
      executeLogin({
        variables: {
          email,
          password
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  });
};

const LoginView = props => {
  const [executeLogin, {
    loading,
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useLazyQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_6__["LOGIN_QUERY"]);
  const enteredInvalidPassword = data && data.login && !data.login.successful;

  if (!loading && data && data.login && data.login.successful) {
    props.handleLoggedIn({
      authToken: data.login.authToken,
      userId: data.login.userId
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "bg-image",
    style: {
      backgroundImage: `url(${_Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), enteredInvalidPassword && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Invalid Password"), loading && __jsx(_Components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), renderBody(executeLogin)));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginView);

/***/ }),

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
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
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
      diagnosticDetail
      businessRatio
      businessTotal
      averageSpeed
      travelDistanceTotal
      travelDistanceThisYear
      timeInCar
      emissions
      fuelEconomy
      lifeLitresPerHundredKm {
        litresPerHundredKm
      }
      parking {
        lat
        lng
      }
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
      }
    }
  }
`;


/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "reverse-geocode":
/*!**********************************!*\
  !*** external "reverse-geocode" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reverse-geocode");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map