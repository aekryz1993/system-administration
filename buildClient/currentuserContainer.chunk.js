(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["currentuserContainer"],{

/***/ "./client/assets/stylesheets/components/profile.css":
/*!**********************************************************!*\
  !*** ./client/assets/stylesheets/components/profile.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"_profile_container":"luShzaGrbOY-cjlimzyUM","_left_column_item":"_2TS__lgQYu2yJHok5u_-fH","_title_profile_item":"_1O6NnIeHXkAxH7ohkEPZMu","_profile_table":"_8KytngiiappdRhAeBtdZs","_profile_th":"_2syU72HT2NOBguPXbud-pC","profile_td":"_5l1ZhGwkEnkFoLb5Zot3O","_user_anchor_profil":"_2T5pAFWgtzee9vZ3BUvfhs","_user_add_profil":"_4-EXmQGLvrDr4zTAUtDeG","_user_add_anchor_profil":"_2l4Qd1kxErX2qhs90fZTPn","_span":"_2ny4TKp_uuRoc8qxm0os_N","_profile_tbody":"qoExW7xPH3QJgRO0PNjoZ"};
    if(true) {
      // 1568315017606
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./client/currentuser/Currentuser.js":
/*!*******************************************!*\
  !*** ./client/currentuser/Currentuser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvcHJvZmlsZS5jc3M/NjE4ZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY3VycmVudHVzZXIvQ3VycmVudHVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2N1cnJlbnR1c2VyL2N1cnJlbnR1c2VyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkN1cnJlbnRVc2VyIiwiZmV0Y2hDdXJyZW50VXNlciIsInZpZXdVc2VycyIsImFkZFVzZXIiLCJwYXRobmFtZSIsInVzZUVmZmVjdCIsInByb2ZpbGUiLCJfcHJvZmlsZV9jb250YWluZXIiLCJfbGVmdF9jb2x1bW5faXRlbSIsIl90aXRsZV9wcm9maWxlX2l0ZW0iLCJfYXV0aF9wcm9maWxlX2l0ZW0iLCJfcHJvZmlsZV90YWJsZSIsIl9wcm9maWxlX3RoIiwiX3Byb2ZpbGVfdGJvZHkiLCJfcHJvZmlsZV90Ym9keV90ciIsInByb2ZpbGVfdGQiLCJfdXNlcl9hbmNob3JfcHJvZmlsIiwiX3VzZXJfYWRkX3Byb2ZpbCIsIl91c2VyX2FkZF9hbmNob3JfcHJvZmlsIiwic3RhdGUiLCJmcm9tIiwiZmFQbHVzIiwiX3NwYW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsImN1cnJlbnR1c2VyUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3RhcnRGZXRjaEN1cnJlbnRVc2VyIiwiQ3VycmVudHVzZXJDb250YWluZXIiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQThILEVBQUUsUUFB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QVgsTUFBeUI7QUFDbEQ3QixrQkFBZ0IsRUFBRSxNQUFNbUMsUUFBUSxDQUFDQyx3RkFBcUIsRUFBdEI7QUFEa0IsQ0FBekIsQ0FBM0I7O0FBSUEsTUFBTUMsb0JBQW9CLEdBQUdDLG1FQUFVLENBQUNDLDJEQUFPLENBQzdDWCxlQUQ2QyxFQUU3Q00sa0JBRjZDLENBQVAsQ0FHdENuQyxvREFIc0MsQ0FBRCxDQUF2QztpQkFLZXNDLG9CO0FBQUE7Ozs7Ozs7Ozs7MEJBekJUVCxlOzBCQWdCQU0sa0I7MEJBSUFHLG9CIiwiZmlsZSI6ImN1cnJlbnR1c2VyQ29udGFpbmVyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJfcHJvZmlsZV9jb250YWluZXJcIjpcImx1U2h6YUdyYk9ZLWNqbGltenlVTVwiLFwiX2xlZnRfY29sdW1uX2l0ZW1cIjpcIl8yVFNfX2xnUVl1MnlKSG9rNXVfLWZIXCIsXCJfdGl0bGVfcHJvZmlsZV9pdGVtXCI6XCJfMU82Tm5JZUhYa0F4SDdvaGtFUFpNdVwiLFwiX3Byb2ZpbGVfdGFibGVcIjpcIl84S3l0bmdpaWFwcGRSaEFlQnRkWnNcIixcIl9wcm9maWxlX3RoXCI6XCJfMnN5VTcySFQyTk9CZ3VQWGJ1ZC1wQ1wiLFwicHJvZmlsZV90ZFwiOlwiXzVsMVpoR3drRW5rRm9MYjVab3QzT1wiLFwiX3VzZXJfYW5jaG9yX3Byb2ZpbFwiOlwiXzJUNXBBRldndHplZTl2WjNCVXZmaHNcIixcIl91c2VyX2FkZF9wcm9maWxcIjpcIl80LUVYbVFHTHZyRHI0elRBVXREZUdcIixcIl91c2VyX2FkZF9hbmNob3JfcHJvZmlsXCI6XCJfMmw0UWQxa3hFclgycWhzOTBmWlRQblwiLFwiX3NwYW5cIjpcIl8ybnk0VEtwX3V1Um9jOHF4bTBvc19OXCIsXCJfcHJvZmlsZV90Ym9keVwiOlwicW9FeFc3eFBIM1FKZ1JPMFBOam9aXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjgzMTUwMTc2MDZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvYWVrcnl6L1dvcmtzcGFjZS9zeXN0ZW0tYWRtaW5pc3RyYXRpb24vbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL3Byb2ZpbGUuY3NzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5jb25zdCBDdXJyZW50VXNlciA9ICh7XG4gIGZldGNoQ3VycmVudFVzZXIsXG4gIHZpZXdVc2VycyxcbiAgYWRkVXNlcixcbiAgcGF0aG5hbWUsXG59KSA9PiB7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ3VycmVudFVzZXIoKTtcbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvZmlsZS5fcHJvZmlsZV9jb250YWluZXJ9ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9maWxlLl9sZWZ0X2NvbHVtbl9pdGVtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb2ZpbGUuX3RpdGxlX3Byb2ZpbGVfaXRlbX0+XG4gICAgICAgICAgPHNwYW4+U2l0ZSBhZG1pbmlzdHJhdGlvbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9maWxlLl9hdXRoX3Byb2ZpbGVfaXRlbX0+XG4gICAgICAgICAge3ZpZXdVc2VycyAmJiBcbiAgICAgICAgICAgICggPHRhYmxlIGNsYXNzTmFtZT17cHJvZmlsZS5fcHJvZmlsZV90YWJsZX0+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17cHJvZmlsZS5fcHJvZmlsZV90aH0+YXV0aG9udGljYXRpb24gYW5kIGF1dGhvcml6YXRpb248L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9e3Byb2ZpbGUuX3Byb2ZpbGVfdGJvZHl9PlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3Byb2ZpbGUuX3Byb2ZpbGVfdGJvZHlfdHJ9PlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17cHJvZmlsZS5wcm9maWxlX3RkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48TGluayBjbGFzc05hbWU9e3Byb2ZpbGUuX3VzZXJfYW5jaG9yX3Byb2ZpbH0gdG89Jy91c2Vycyc+IHVzZXJzIDwvTGluaz48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9maWxlLl91c2VyX2FkZF9wcm9maWx9PlxuICAgICAgICAgICAgICAgICAgICAgIHthZGRVc2VyICYmIDxMaW5rIGNsYXNzTmFtZT17cHJvZmlsZS5fdXNlcl9hZGRfYW5jaG9yX3Byb2ZpbH0gdG89e3twYXRobmFtZTogJy9hZGQnLCBzdGF0ZToge2Zyb206IHBhdGhuYW1lfX19PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzfSAgY29sb3I9XCIjMDBDODUzXCIgLz48c3BhbiBjbGFzc05hbWU9e3Byb2ZpbGUuX3NwYW59PmFkZDwvc3Bhbj48L0xpbms+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+ICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdXJyZW50VXNlci5wcm9wVHlwZXMgPSB7XG4gIHZpZXdVc2VyczogUHJvcFR5cGVzLmJvb2wsXG4gIGFkZFVzZXI6IFByb3BUeXBlcy5ib29sLFxuICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmV0Y2hDdXJyZW50VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRVc2VyOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ3VycmVudFVzZXIgZnJvbSAnLi9DdXJyZW50dXNlcic7XG5pbXBvcnQgeyBzdGFydEZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2N1cnJlbnR1c2VyJztcblxuLyoqKioqKioqKioqKioqIEZldGNoIHZpZXdVc2VycyBwZXJtaXNzaW9uIGZyb20gY3VycmVudCB1c2VyIGRhdGEgQ29udGFpbmVyICoqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBcbiAgY29uc3QgeyB2aWV3VXNlcnMsIGFkZFVzZXIgfSA9IHN0YXRlLmN1cnJlbnR1c2VyUmVkdWNlcjtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gb3duUHJvcHMubG9jYXRpb247XG5cbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICBjb25zb2xlLmxvZyhvd25Qcm9wcyk7XG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcblxuICByZXR1cm4ge1xuICAgIHZpZXdVc2Vyczogdmlld1VzZXJzLFxuICAgIGFkZFVzZXI6IGFkZFVzZXIsXG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4gKHtcbiAgZmV0Y2hDdXJyZW50VXNlcjogKCkgPT4gZGlzcGF0Y2goc3RhcnRGZXRjaEN1cnJlbnRVc2VyKCkpLFxufSk7XG5cbmNvbnN0IEN1cnJlbnR1c2VyQ29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShDdXJyZW50VXNlcikpO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50dXNlckNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=