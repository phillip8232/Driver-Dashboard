webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/Components/AntdTable/AntdTableComponent.js":
/*!********************************************************!*\
  !*** ./src/Components/AntdTable/AntdTableComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/Users/haydenfuller/Documents/Hayden/Own Projects/gofar/Driver-Dashboard/client/src/Components/AntdTable/AntdTableComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



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

class AntdTableComponent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clearFilters", () => {
      this.setState({
        filteredInfo: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clearAll", () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setTimeSort", () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'time'
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setDistanceSort", () => {
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
          lineNumber: 164
        },
        __self: this
      }, tags.map(tag => {
        let color = 'green';

        if (tag === 'vacation') {
          color = 'red';
        } else if (tag === 'busuiness') {
          color = 'blue';
        }

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
          color: color,
          key: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
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
      roweKy: 'lat, lng',
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
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("div", {
      className: "table-operations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.setTimeSort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "Sort time"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.setDistanceSort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Sort Distance"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.clearFilters,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, "Clear filters"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.clearAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Clear filters and sorters")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      columns: columns,
      dataSource: trips,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AntdTableComponent);

/***/ })

})
//# sourceMappingURL=dashboard.js.8262ff33c2732ca00284.hot-update.js.map