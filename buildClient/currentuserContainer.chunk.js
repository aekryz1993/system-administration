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
      // 1568557270164
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

  reactHotLoader.register(CurrentUser, "CurrentUser", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/Currentuser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/Currentuser.js");
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

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/currentuserContainer.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/currentuserContainer.js");
  reactHotLoader.register(CurrentuserContainer, "CurrentuserContainer", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/currentuserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/currentuserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvcHJvZmlsZS5jc3M/NjE4ZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY3VycmVudHVzZXIvQ3VycmVudHVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2N1cnJlbnR1c2VyL2N1cnJlbnR1c2VyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkN1cnJlbnRVc2VyIiwiZmV0Y2hDdXJyZW50VXNlciIsInZpZXdVc2VycyIsImFkZFVzZXIiLCJwYXRobmFtZSIsInVzZUVmZmVjdCIsInByb2ZpbGUiLCJfcHJvZmlsZV9jb250YWluZXIiLCJfbGVmdF9jb2x1bW5faXRlbSIsIl90aXRsZV9wcm9maWxlX2l0ZW0iLCJfYXV0aF9wcm9maWxlX2l0ZW0iLCJfcHJvZmlsZV90YWJsZSIsIl9wcm9maWxlX3RoIiwiX3Byb2ZpbGVfdGJvZHkiLCJfcHJvZmlsZV90Ym9keV90ciIsInByb2ZpbGVfdGQiLCJfdXNlcl9hbmNob3JfcHJvZmlsIiwiX3VzZXJfYWRkX3Byb2ZpbCIsIl91c2VyX2FkZF9hbmNob3JfcHJvZmlsIiwic3RhdGUiLCJmcm9tIiwiZmFQbHVzIiwiX3NwYW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsImN1cnJlbnR1c2VyUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3RhcnRGZXRjaEN1cnJlbnRVc2VyIiwiQ3VycmVudHVzZXJDb250YWluZXIiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQXFJLEVBQUUsUUFB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QVgsTUFBeUI7QUFDbEQ3QixrQkFBZ0IsRUFBRSxNQUFNbUMsUUFBUSxDQUFDQyx3RkFBcUIsRUFBdEI7QUFEa0IsQ0FBekIsQ0FBM0I7O0FBSUEsTUFBTUMsb0JBQW9CLEdBQUdDLG1FQUFVLENBQUNDLDJEQUFPLENBQzdDWCxlQUQ2QyxFQUU3Q00sa0JBRjZDLENBQVAsQ0FHdENuQyxvREFIc0MsQ0FBRCxDQUF2QztpQkFLZXNDLG9CO0FBQUE7Ozs7Ozs7Ozs7MEJBekJUVCxlOzBCQWdCQU0sa0I7MEJBSUFHLG9CIiwiZmlsZSI6ImN1cnJlbnR1c2VyQ29udGFpbmVyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJfcHJvZmlsZV9jb250YWluZXJcIjpcImx1U2h6YUdyYk9ZLWNqbGltenlVTVwiLFwiX2xlZnRfY29sdW1uX2l0ZW1cIjpcIl8yVFNfX2xnUVl1MnlKSG9rNXVfLWZIXCIsXCJfdGl0bGVfcHJvZmlsZV9pdGVtXCI6XCJfMU82Tm5JZUhYa0F4SDdvaGtFUFpNdVwiLFwiX3Byb2ZpbGVfdGFibGVcIjpcIl84S3l0bmdpaWFwcGRSaEFlQnRkWnNcIixcIl9wcm9maWxlX3RoXCI6XCJfMnN5VTcySFQyTk9CZ3VQWGJ1ZC1wQ1wiLFwicHJvZmlsZV90ZFwiOlwiXzVsMVpoR3drRW5rRm9MYjVab3QzT1wiLFwiX3VzZXJfYW5jaG9yX3Byb2ZpbFwiOlwiXzJUNXBBRldndHplZTl2WjNCVXZmaHNcIixcIl91c2VyX2FkZF9wcm9maWxcIjpcIl80LUVYbVFHTHZyRHI0elRBVXREZUdcIixcIl91c2VyX2FkZF9hbmNob3JfcHJvZmlsXCI6XCJfMmw0UWQxa3hFclgycWhzOTBmWlRQblwiLFwiX3NwYW5cIjpcIl8ybnk0VEtwX3V1Um9jOHF4bTBvc19OXCIsXCJfcHJvZmlsZV90Ym9keVwiOlwicW9FeFc3eFBIM1FKZ1JPMFBOam9aXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Njg1NTcyNzAxNjRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvYWVrcnl6LWxhcHRvcC9Xb3Jrc3BhY2Uvc3lzdGVtLWFkbWluaXN0cmF0aW9uL25vZGVfbW9kdWxlcy9leHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJob3RcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9wcm9maWxlLmNzcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuY29uc3QgQ3VycmVudFVzZXIgPSAoe1xuICBmZXRjaEN1cnJlbnRVc2VyLFxuICB2aWV3VXNlcnMsXG4gIGFkZFVzZXIsXG4gIHBhdGhuYW1lLFxufSkgPT4ge1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEN1cnJlbnRVc2VyKCk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb2ZpbGUuX3Byb2ZpbGVfY29udGFpbmVyfSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvZmlsZS5fbGVmdF9jb2x1bW5faXRlbX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9maWxlLl90aXRsZV9wcm9maWxlX2l0ZW19PlxuICAgICAgICAgIDxzcGFuPlNpdGUgYWRtaW5pc3RyYXRpb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvZmlsZS5fYXV0aF9wcm9maWxlX2l0ZW19PlxuICAgICAgICAgIHt2aWV3VXNlcnMgJiYgXG4gICAgICAgICAgICAoIDx0YWJsZSBjbGFzc05hbWU9e3Byb2ZpbGUuX3Byb2ZpbGVfdGFibGV9PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3Byb2ZpbGUuX3Byb2ZpbGVfdGh9PmF1dGhvbnRpY2F0aW9uIGFuZCBhdXRob3JpemF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPXtwcm9maWxlLl9wcm9maWxlX3Rib2R5fT5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtwcm9maWxlLl9wcm9maWxlX3Rib2R5X3RyfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3Byb2ZpbGUucHJvZmlsZV90ZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PExpbmsgY2xhc3NOYW1lPXtwcm9maWxlLl91c2VyX2FuY2hvcl9wcm9maWx9IHRvPScvdXNlcnMnPiB1c2VycyA8L0xpbms+PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvZmlsZS5fdXNlcl9hZGRfcHJvZmlsfT5cbiAgICAgICAgICAgICAgICAgICAgICB7YWRkVXNlciAmJiA8TGluayBjbGFzc05hbWU9e3Byb2ZpbGUuX3VzZXJfYWRkX2FuY2hvcl9wcm9maWx9IHRvPXt7cGF0aG5hbWU6ICcvYWRkJywgc3RhdGU6IHtmcm9tOiBwYXRobmFtZX19fT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gIGNvbG9yPVwiIzAwQzg1M1wiIC8+PHNwYW4gY2xhc3NOYW1lPXtwcm9maWxlLl9zcGFufT5hZGQ8L3NwYW4+PC9MaW5rPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPiApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ3VycmVudFVzZXIucHJvcFR5cGVzID0ge1xuICB2aWV3VXNlcnM6IFByb3BUeXBlcy5ib29sLFxuICBhZGRVc2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGF0aG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZldGNoQ3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50VXNlcjsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEN1cnJlbnRVc2VyIGZyb20gJy4vQ3VycmVudHVzZXInO1xuaW1wb3J0IHsgc3RhcnRGZXRjaEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jdXJyZW50dXNlcic7XG5cbi8qKioqKioqKioqKioqKiBGZXRjaCB2aWV3VXNlcnMgcGVybWlzc2lvbiBmcm9tIGN1cnJlbnQgdXNlciBkYXRhIENvbnRhaW5lciAqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IHsgdmlld1VzZXJzLCBhZGRVc2VyIH0gPSBzdGF0ZS5jdXJyZW50dXNlclJlZHVjZXI7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IG93blByb3BzLmxvY2F0aW9uO1xuXG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgY29uc29sZS5sb2cob3duUHJvcHMpO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3VXNlcnM6IHZpZXdVc2VycyxcbiAgICBhZGRVc2VyOiBhZGRVc2VyLFxuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+ICh7XG4gIGZldGNoQ3VycmVudFVzZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0RmV0Y2hDdXJyZW50VXNlcigpKSxcbn0pO1xuXG5jb25zdCBDdXJyZW50dXNlckNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQ3VycmVudFVzZXIpKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudHVzZXJDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9