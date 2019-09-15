(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UpdateCurrentUserContainer"],{

/***/ "./client/assets/stylesheets/components/addUser.css":
/*!**********************************************************!*\
  !*** ./client/assets/stylesheets/components/addUser.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"_addUser_container":"k_7wyi36gJn1Cr9Als7je","_grid_container":"_116sZnYiPmAxfOISExGbrj","_grid_second_item":"_2b70yv2iX0EKtA6ioF96zv","_grid_third_item":"_33lnBp4EFYGbsQWiw9S2U9","_cancel_botton":"_1bgXCO28j0NzLOKAApHGf2","_anchor_cancel_botton":"U76kjfFDVHsxcA_W4qdGx","_submit_botton":"_23P88y4MnQCWvdWALdMda6","_row_":"_2-qEbZBQLs1V-Nfay2ne8m","_add_user_label":"_MRSc-1Q7PYOncmbI0rTe","_add_user_input":"_3wJBrhuKgFdfoU9bMMeHyV","_label_check":"_1yBGUMZHdYP0TH5XPlUtJ2","_slider":"_48gnwexBTdizNNrrmpBYX","_round":"_29CYT6DjWHL-iNGjqB7Xze","_permissions_title_item":"_1-te2uzD44AnIX75OfzrKW","_permissions_check_item":"_1b21NTu62zd1tlpjROTcxU","_td_label_switch_toggle":"_2kDb-KRDHQ868_LnMmhINb"};
    if(true) {
      // 1568561520777
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./client/components/UserInformation.js":
/*!**********************************************!*\
  !*** ./client/components/UserInformation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/stylesheets/components/addUser.css */ "./client/assets/stylesheets/components/addUser.css");
/* harmony import */ var _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const UserInformation = ({
  name,
  label,
  placeholder,
  type,
  value
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._row_
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._add_user_label,
  htmlFor: name
}, label, ": "), value ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._add_user_input,
  name: name,
  component: "input",
  placeholder: placeholder,
  type: type,
  value: value
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._add_user_input,
  name: name,
  component: "input",
  placeholder: placeholder,
  type: type
}));

UserInformation.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
const _default = UserInformation;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserInformation, "UserInformation", "/home/aekryz-laptop/Workspace/system-administration/client/components/UserInformation.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/components/UserInformation.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/currentuser/UpdateCurrentUser.js":
/*!*************************************************!*\
  !*** ./client/currentuser/UpdateCurrentUser.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/stylesheets/components/addUser.css */ "./client/assets/stylesheets/components/addUser.css");
/* harmony import */ var _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UserInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserInformation */ "./client/components/UserInformation.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const UpdateCurrentUser = ({
  message,
  initialValues,
  redirect,
  onSubmit,
  handleSubmit,
  updateFinished,
  from
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      updateFinished(); // console.log('initialValues')
      // console.log(initialValues)
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._addUser_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._grid_container,
    onSubmit: handleSubmit(onSubmit())
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "username",
    label: "Username",
    placeholder: "Username",
    type: "text",
    value: initialValues.username
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
    value: initialValues.email
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._grid_third_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._cancel_botton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._anchor_cancel_botton,
    to: from === '/users' || from === '/profile' ? from : '/profile'
  }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._submit_botton,
    type: "submit"
  }, "Update"), redirect ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/profile"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, message))));
};

__signature__(UpdateCurrentUser, "useEffect{}");

UpdateCurrentUser.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateFinished: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = UpdateCurrentUser;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UpdateCurrentUser, "UpdateCurrentUser", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/UpdateCurrentUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/UpdateCurrentUser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/currentuser/UpdateCurrentUserContainer.js":
/*!**********************************************************!*\
  !*** ./client/currentuser/UpdateCurrentUserContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_actions_currentuser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/currentuser */ "./client/store/actions/currentuser.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _UpdateCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdateCurrentUser */ "./client/currentuser/UpdateCurrentUser.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const mapStateUpdateUserToProps = (state, ownProps) => {
  const {
    message,
    redirect
  } = state.updateCurrentUserReducer;
  const {
    username,
    email
  } = state.currentuserReducer;
  const initialValues = ownProps.location.state ? ownProps.location.state.initialValues : {
    username,
    email
  };
  const from = ownProps.location.state ? ownProps.location.state.from : '/profile';
  console.log('************************');
  console.log(initialValues);
  console.log('************************');
  return {
    message: message,
    redirect: redirect,
    initialValues: initialValues,
    from: from
  };
};

const mapDispatchUpdateUserToProps = (dispatch, ownProps) => ({
  updateFinished: () => dispatch(Object(_store_actions_currentuser__WEBPACK_IMPORTED_MODULE_2__["updateFinished"])())
});

const UpdateCurrentUserContainer = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateUpdateUserToProps, mapDispatchUpdateUserToProps)(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'updatecurrentuser',
  onSubmit: () => (values, dispatch) => dispatch(Object(_store_actions_currentuser__WEBPACK_IMPORTED_MODULE_2__["startUpdateCurrentUser"])(values))
})(_UpdateCurrentUser__WEBPACK_IMPORTED_MODULE_4__["default"])));
const _default = UpdateCurrentUserContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateUpdateUserToProps, "mapStateUpdateUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/UpdateCurrentUserContainer.js");
  reactHotLoader.register(mapDispatchUpdateUserToProps, "mapDispatchUpdateUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/UpdateCurrentUserContainer.js");
  reactHotLoader.register(UpdateCurrentUserContainer, "UpdateCurrentUserContainer", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/UpdateCurrentUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/currentuser/UpdateCurrentUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3M/ZGUwYyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Vc2VySW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2N1cnJlbnR1c2VyL1VwZGF0ZUN1cnJlbnRVc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jdXJyZW50dXNlci9VcGRhdGVDdXJyZW50VXNlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJVc2VySW5mb3JtYXRpb24iLCJuYW1lIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsImFkZFVzZXJTdHlsZSIsIl9yb3dfIiwiX2FkZF91c2VyX2xhYmVsIiwiX2FkZF91c2VyX2lucHV0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIlVwZGF0ZUN1cnJlbnRVc2VyIiwibWVzc2FnZSIsImluaXRpYWxWYWx1ZXMiLCJyZWRpcmVjdCIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwidXBkYXRlRmluaXNoZWQiLCJmcm9tIiwidXNlRWZmZWN0IiwiX2FkZFVzZXJfY29udGFpbmVyIiwiX2dyaWRfY29udGFpbmVyIiwidXNlcm5hbWUiLCJlbWFpbCIsIl9ncmlkX3RoaXJkX2l0ZW0iLCJfY2FuY2VsX2JvdHRvbiIsIl9hbmNob3JfY2FuY2VsX2JvdHRvbiIsIl9zdWJtaXRfYm90dG9uIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJtYXBTdGF0ZVVwZGF0ZVVzZXJUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInVwZGF0ZUN1cnJlbnRVc2VyUmVkdWNlciIsImN1cnJlbnR1c2VyUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVXBkYXRlVXNlclRvUHJvcHMiLCJkaXNwYXRjaCIsIlVwZGF0ZUN1cnJlbnRVc2VyQ29udGFpbmVyIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJmb3JtIiwidmFsdWVzIiwic3RhcnRVcGRhdGVDdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQXFJLEVBQUUsUUFBUyxHQUFHLDBDQUEwQztBQUMzTjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLENBQUM7QUFBQ0MsTUFBRDtBQUFPQyxPQUFQO0FBQWNDLGFBQWQ7QUFBMkJDLE1BQTNCO0FBQWlDQztBQUFqQyxDQUFELEtBQ3RCO0FBQUssV0FBUyxFQUFFQyxpRkFBWSxDQUFDQztBQUE3QixHQUNFO0FBQU8sV0FBUyxFQUFFRCxpRkFBWSxDQUFDRSxlQUEvQjtBQUFnRCxTQUFPLEVBQUVQO0FBQXpELEdBQWdFQyxLQUFoRSxPQURGLEVBRUdHLEtBQUssR0FDSiwyREFBQyxnREFBRDtBQUFPLFdBQVMsRUFBRUMsaUZBQVksQ0FBQ0csZUFBL0I7QUFBZ0QsTUFBSSxFQUFFUixJQUF0RDtBQUE0RCxXQUFTLEVBQUMsT0FBdEU7QUFBOEUsYUFBVyxFQUFFRSxXQUEzRjtBQUF3RyxNQUFJLEVBQUVDLElBQTlHO0FBQW9ILE9BQUssRUFBRUM7QUFBM0gsRUFESSxHQUVKLDJEQUFDLGdEQUFEO0FBQU8sV0FBUyxFQUFFQyxpRkFBWSxDQUFDRyxlQUEvQjtBQUFnRCxNQUFJLEVBQUVSLElBQXREO0FBQTRELFdBQVMsRUFBQyxPQUF0RTtBQUE4RSxhQUFXLEVBQUVFLFdBQTNGO0FBQXdHLE1BQUksRUFBRUM7QUFBOUcsRUFKSixDQURGOztBQVVBSixlQUFlLENBQUNVLFNBQWhCLEdBQTRCO0FBQzFCUixPQUFLLEVBQUVTLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREU7QUFFMUJaLE1BQUksRUFBRVUs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LENBQXZCO0FBRnBDLENBQUQsQ0FBVCxDQUdDbkMsMERBSEQsQ0FINEMsQ0FBRCxDQUE3QztpQkFRZThCLDBCO0FBQUE7Ozs7Ozs7Ozs7MEJBNUJUVix5QjswQkFnQkFRLDRCOzBCQUlBRSwwQiIsImZpbGUiOiJVcGRhdGVDdXJyZW50VXNlckNvbnRhaW5lci5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiX2FkZFVzZXJfY29udGFpbmVyXCI6XCJrXzd3eWkzNmdKbjFDcjlBbHM3amVcIixcIl9ncmlkX2NvbnRhaW5lclwiOlwiXzExNnNabllpUG1BeGZPSVNFeEdicmpcIixcIl9ncmlkX3NlY29uZF9pdGVtXCI6XCJfMmI3MHl2MmlYMEVLdEE2aW9GOTZ6dlwiLFwiX2dyaWRfdGhpcmRfaXRlbVwiOlwiXzMzbG5CcDRFRllHYnNRV2l3OVMyVTlcIixcIl9jYW5jZWxfYm90dG9uXCI6XCJfMWJnWENPMjhqME56TE9LQUFwSEdmMlwiLFwiX2FuY2hvcl9jYW5jZWxfYm90dG9uXCI6XCJVNzZramZGRFZIc3hjQV9XNHFkR3hcIixcIl9zdWJtaXRfYm90dG9uXCI6XCJfMjNQODh5NE1uUUNXdmRXQUxkTWRhNlwiLFwiX3Jvd19cIjpcIl8yLXFFYlpCUUxzMVYtTmZheTJuZThtXCIsXCJfYWRkX3VzZXJfbGFiZWxcIjpcIl9NUlNjLTFRN1BZT25jbWJJMHJUZVwiLFwiX2FkZF91c2VyX2lucHV0XCI6XCJfM3dKQnJodUtnRmRmb1U5Yk1NZUh5VlwiLFwiX2xhYmVsX2NoZWNrXCI6XCJfMXlCR1VNWkhkWVAwVEg1WFBsVXRKMlwiLFwiX3NsaWRlclwiOlwiXzQ4Z253ZXhCVGRpek5OcnJtcEJZWFwiLFwiX3JvdW5kXCI6XCJfMjlDWVQ2RGpXSEwtaU5HanFCN1h6ZVwiLFwiX3Blcm1pc3Npb25zX3RpdGxlX2l0ZW1cIjpcIl8xLXRlMnV6RDQ0QW5JWDc1T2Z6cktXXCIsXCJfcGVybWlzc2lvbnNfY2hlY2tfaXRlbVwiOlwiXzFiMjFOVHU2MnpkMXRscGpST1RjeFVcIixcIl90ZF9sYWJlbF9zd2l0Y2hfdG9nZ2xlXCI6XCJfMmtEYi1LUkRIUTg2OF9Mbk1taElOYlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY4NTYxNTIwNzc3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2Fla3J5ei1sYXB0b3AvV29ya3NwYWNlL3N5c3RlbS1hZG1pbmlzdHJhdGlvbi9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGFkZFVzZXJTdHlsZSBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hZGRVc2VyLmNzcyc7XG5cbmNvbnN0IFVzZXJJbmZvcm1hdGlvbiA9ICh7bmFtZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCB2YWx1ZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3Jvd199PlxuICAgIDxsYWJlbCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfbGFiZWx9IGh0bWxGb3I9e25hbWV9PntsYWJlbH06IDwvbGFiZWw+XG4gICAge3ZhbHVlID9cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfaW5wdXR9IG5hbWU9e25hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPXt0eXBlfSB2YWx1ZT17dmFsdWV9Lz4gOiBcbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfaW5wdXR9IG5hbWU9e25hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPXt0eXBlfS8+XG4gICAgfVxuICA8L2Rpdj5cbik7XG5cblVzZXJJbmZvcm1hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvcm1hdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJlZGlyZWN0LCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYWRkVXNlclN0eWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FkZFVzZXIuY3NzJztcbmltcG9ydCBVc2VySW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mb3JtYXRpb24nO1xuXG5jb25zdCBVcGRhdGVDdXJyZW50VXNlciA9ICh7XG4gIG1lc3NhZ2UsXG4gIGluaXRpYWxWYWx1ZXMsXG4gIHJlZGlyZWN0LFxuICBvblN1Ym1pdCxcbiAgaGFuZGxlU3VibWl0LFxuICB1cGRhdGVGaW5pc2hlZCxcbiAgZnJvbVxufSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVwZGF0ZUZpbmlzaGVkKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW5pdGlhbFZhbHVlcycpXG4gICAgICAvLyBjb25zb2xlLmxvZyhpbml0aWFsVmFsdWVzKVxuICAgIH07XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9hZGRVc2VyX2NvbnRhaW5lcn0+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fZ3JpZF9jb250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQoKSl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxVc2VySW5mb3JtYXRpb24gXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbml0aWFsVmFsdWVzLnVzZXJuYW1lfSAvPlxuICAgICAgICAgIDxVc2VySW5mb3JtYXRpb24gXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbml0aWFsVmFsdWVzLmVtYWlsfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9ncmlkX3RoaXJkX2l0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2NhbmNlbF9ib3R0b259PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FuY2hvcl9jYW5jZWxfYm90dG9ufSB0bz17KChmcm9tID09PSAnL3VzZXJzJykgfHwgKGZyb20gPT09ICcvcHJvZmlsZScpKSA/IGZyb20gOiAnL3Byb2ZpbGUnfSA+Q2FuY2VsPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3N1Ym1pdF9ib3R0b259IHR5cGU9XCJzdWJtaXRcIiA+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAge3JlZGlyZWN0ID8gXG4gICAgICAgICAgICA8UmVkaXJlY3QgdG89Jy9wcm9maWxlJyAvPiA6IDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblVwZGF0ZUN1cnJlbnRVc2VyLnByb3BUeXBlcyA9IHtcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVkaXJlY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUZpbmlzaGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVDdXJyZW50VXNlcjsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXBkYXRlRmluaXNoZWQsIHN0YXJ0VXBkYXRlQ3VycmVudFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2N1cnJlbnR1c2VyJztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IFVwZGF0ZUN1cnJlbnRVc2VyIGZyb20gJy4vVXBkYXRlQ3VycmVudFVzZXInO1xuXG5jb25zdCBtYXBTdGF0ZVVwZGF0ZVVzZXJUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IG1lc3NhZ2UsIHJlZGlyZWN0IH0gPSBzdGF0ZS51cGRhdGVDdXJyZW50VXNlclJlZHVjZXI7XG4gIGNvbnN0IHt1c2VybmFtZSwgZW1haWx9ID0gc3RhdGUuY3VycmVudHVzZXJSZWR1Y2VyO1xuICBjb25zdCBpbml0aWFsVmFsdWVzID0gKG93blByb3BzLmxvY2F0aW9uLnN0YXRlKSA/IG93blByb3BzLmxvY2F0aW9uLnN0YXRlLmluaXRpYWxWYWx1ZXMgOiB7dXNlcm5hbWUsIGVtYWlsfTtcbiAgY29uc3QgZnJvbSA9IChvd25Qcm9wcy5sb2NhdGlvbi5zdGF0ZSkgPyBvd25Qcm9wcy5sb2NhdGlvbi5zdGF0ZS5mcm9tIDogJy9wcm9maWxlJztcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICBjb25zb2xlLmxvZyhpbml0aWFsVmFsdWVzKTtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgcmVkaXJlY3Q6IHJlZGlyZWN0LFxuICAgIGluaXRpYWxWYWx1ZXM6IGluaXRpYWxWYWx1ZXMsXG4gICAgZnJvbTogZnJvbSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVXBkYXRlVXNlclRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiAoe1xuICB1cGRhdGVGaW5pc2hlZDogKCkgPT4gZGlzcGF0Y2godXBkYXRlRmluaXNoZWQoKSlcbn0pO1xuXG5jb25zdCBVcGRhdGVDdXJyZW50VXNlckNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgbWFwU3RhdGVVcGRhdGVVc2VyVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hVcGRhdGVVc2VyVG9Qcm9wc1xuKShyZWR1eEZvcm0oe1xuICBmb3JtOiAndXBkYXRlY3VycmVudHVzZXInLFxuICBvblN1Ym1pdDogKCkgPT4gKHZhbHVlcywgZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHN0YXJ0VXBkYXRlQ3VycmVudFVzZXIodmFsdWVzKSlcbn0pKFVwZGF0ZUN1cnJlbnRVc2VyKSkpO1xuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVDdXJyZW50VXNlckNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=