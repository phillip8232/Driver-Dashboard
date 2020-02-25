webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _src_Components_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/PrivateRoute */ "./src/Components/PrivateRoute.js");
/* harmony import */ var _src_Components_DashboardSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/DashboardSidebar */ "./src/Components/DashboardSidebar.js");
/* harmony import */ var _src_Pages_Login_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Pages/Login/LoginPage */ "./src/Pages/Login/LoginPage.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_styles_App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _src_styles_App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function App() {
  const {
    0: loginDetails,
    1: setLoginDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: localUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: localToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => {
      window.localStorage.setItem('GofarDashboardToken', loginResult.authToken);
      window.localStorage.setItem('GofarDashboardUserId', loginResult.userId); // localStorage.getItem('GofarDashboardUserId')
      // localStorage.getItem('GofarDashboardToken'))
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_src_Components_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: _src_Components_DashboardSidebar__WEBPACK_IMPORTED_MODULE_4__["default"],
    userId: localUserId,
    authToken: localToken,
    exact: true,
    path: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: props => __jsx(_src_Pages_Login_LoginPage__WEBPACK_IMPORTED_MODULE_5__["LoginPage"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      handleLoggedIn: loginResult => {
        // TODO - you have auth token and user ID now.
        setLoginDetails(loginResult);
      },
      authToken: loginDetails.authToken,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })),
    exact: true,
    path: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.0c98200c445ec7d91c70.hot-update.js.map