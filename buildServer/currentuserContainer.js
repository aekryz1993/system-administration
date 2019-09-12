exports.ids = ["currentuserContainer"];
exports.modules = {

/***/ "./client/assets/stylesheets/components/profile.css":
/*!**********************************************************!*\
  !*** ./client/assets/stylesheets/components/profile.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"_profile_container": "luShzaGrbOY-cjlimzyUM",
	"_left_column_item": "_2TS__lgQYu2yJHok5u_-fH",
	"_title_profile_item": "_1O6NnIeHXkAxH7ohkEPZMu",
	"_profile_table": "_8KytngiiappdRhAeBtdZs",
	"_profile_th": "_2syU72HT2NOBguPXbud-pC",
	"profile_td": "_5l1ZhGwkEnkFoLb5Zot3O",
	"_user_anchor_profil": "_2T5pAFWgtzee9vZ3BUvfhs",
	"_user_add_profil": "_4-EXmQGLvrDr4zTAUtDeG",
	"_user_add_anchor_profil": "_2l4Qd1kxErX2qhs90fZTPn",
	"_span": "_2ny4TKp_uuRoc8qxm0os_N",
	"_profile_tbody": "qoExW7xPH3QJgRO0PNjoZ"
};

/***/ }),

/***/ "./client/currentuser/Currentuser.js":
/*!*******************************************!*\
  !*** ./client/currentuser/Currentuser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/stylesheets/components/profile.css */ "./client/assets/stylesheets/components/profile.css");
/* harmony import */ var _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const CurrentUser = ({
  fetchCurrentUser,
  viewUsers,
  addUser,
  pathname
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchCurrentUser();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._profile_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._left_column_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._title_profile_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Site administration")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._auth_profile_item
  }, viewUsers && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._profile_table
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._profile_th
  }, "authontication and authorization"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._profile_tbody
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._profile_tbody_tr
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a.profile_td
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._user_anchor_profil,
    to: "/users"
  }, " users ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._user_add_profil
  }, addUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._user_add_anchor_profil,
    to: {
      pathname: '/add',
      state: {
        from: pathname
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"],
    color: "#00C853"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _assets_stylesheets_components_profile_css__WEBPACK_IMPORTED_MODULE_3___default.a._span
  }, "add"))))))))));
};

__signature__(CurrentUser, "useEffect{}");

CurrentUser.propTypes = {
  viewUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fetchCurrentUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = CurrentUser;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CurrentUser, "CurrentUser", "/home/aekryz/Workspace/system-administration/client/currentuser/Currentuser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/currentuser/Currentuser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/currentuser/currentuserContainer.js":
/*!****************************************************!*\
  !*** ./client/currentuser/currentuserContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Currentuser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Currentuser */ "./client/currentuser/Currentuser.js");
/* harmony import */ var _store_actions_currentuser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/currentuser */ "./client/store/actions/currentuser.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





/************** Fetch viewUsers permission from current user data Container *********************/

const mapStateToProps = (state, ownProps) => {
  const {
    viewUsers,
    addUser
  } = state.currentuserReducer;
  const {
    pathname
  } = ownProps.location;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    viewUsers: viewUsers,
    addUser: addUser,
    pathname: pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCurrentUser: () => dispatch(Object(_store_actions_currentuser__WEBPACK_IMPORTED_MODULE_3__["startFetchCurrentUser"])())
});

const CurrentuserContainer = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Currentuser__WEBPACK_IMPORTED_MODULE_2__["default"]));
const _default = CurrentuserContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/aekryz/Workspace/system-administration/client/currentuser/currentuserContainer.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/aekryz/Workspace/system-administration/client/currentuser/currentuserContainer.js");
  reactHotLoader.register(CurrentuserContainer, "CurrentuserContainer", "/home/aekryz/Workspace/system-administration/client/currentuser/currentuserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/currentuser/currentuserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};;
//# sourceMappingURL=currentuserContainer.js.map