webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/Components/Card/DiagnosticCard.js":
/*!***********************************************!*\
  !*** ./src/Components/Card/DiagnosticCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/haydenfuller/Documents/Hayden/Own Projects/gofar/Driver-Dashboard/client/src/Components/Card/DiagnosticCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DiagnosticCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    if (this.props.diagnosticIssue[0] && this.props.diagnosticIssue[0].length > 0) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
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
          lineNumber: 13
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Diagnostic Issues"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "No Data")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("a", {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.diagnosticDetail))));
    } else {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
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
          lineNumber: 29
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Diagnostic Issues"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.diagnosticIssue[0].code)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("a", {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.diagnosticDetail))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DiagnosticCard);

/***/ })

})
//# sourceMappingURL=dashboard.js.4a2951b76ecfe201ea4c.hot-update.js.map