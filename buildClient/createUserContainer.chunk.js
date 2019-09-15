(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createUserContainer"],{

/***/ "./client/assets/stylesheets/components/addUser.css":
/*!**********************************************************!*\
  !*** ./client/assets/stylesheets/components/addUser.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"_addUser_container":"k_7wyi36gJn1Cr9Als7je","_grid_container":"_116sZnYiPmAxfOISExGbrj","_grid_second_item":"_2b70yv2iX0EKtA6ioF96zv","_grid_third_item":"_33lnBp4EFYGbsQWiw9S2U9","_cancel_botton":"_1bgXCO28j0NzLOKAApHGf2","_anchor_cancel_botton":"U76kjfFDVHsxcA_W4qdGx","_submit_botton":"_23P88y4MnQCWvdWALdMda6","_row_":"_2-qEbZBQLs1V-Nfay2ne8m","_add_user_label":"_MRSc-1Q7PYOncmbI0rTe","_add_user_input":"_3wJBrhuKgFdfoU9bMMeHyV","_label_check":"_1yBGUMZHdYP0TH5XPlUtJ2","_slider":"_48gnwexBTdizNNrrmpBYX","_round":"_29CYT6DjWHL-iNGjqB7Xze","_permissions_title_item":"_1-te2uzD44AnIX75OfzrKW","_permissions_check_item":"_1b21NTu62zd1tlpjROTcxU","_td_label_switch_toggle":"_2kDb-KRDHQ868_LnMmhINb"};
    if(true) {
      // 1568557270171
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./client/components/SwitchToggle.js":
/*!*******************************************!*\
  !*** ./client/components/SwitchToggle.js ***!
  \*******************************************/
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






const SwitchToggle = ({
  label,
  permissionName,
  status,
  setIsActivate
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._td_label_switch_toggle
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._td_switch_toggle
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._label_check,
  htmlFor: permissionName
}, status && setIsActivate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: permissionName,
  id: permissionName,
  component: "input",
  type: "checkbox",
  checked: status,
  onChange: e => setIsActivate(e.target.checked)
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: permissionName,
  id: permissionName,
  component: "input",
  type: "checkbox"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: `${_assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._slider} ${_assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._round}`
}))));

SwitchToggle.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  permissionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setIsActivate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
const _default = SwitchToggle;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwitchToggle, "SwitchToggle", "/home/aekryz-laptop/Workspace/system-administration/client/components/SwitchToggle.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/components/SwitchToggle.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ "./client/helpers.js":
/*!***************************!*\
  !*** ./client/helpers.js ***!
  \***************************/
/*! exports provided: permissionsName, userInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsName", function() { return permissionsName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfos", function() { return userInfos; });


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const permissionsName = [{
  label: 'View users',
  name: 'viewUsers'
}, {
  label: 'Add users',
  name: 'createUser'
}, {
  label: 'Edit users',
  name: 'updateUser'
}, {
  label: 'Delete users',
  name: 'deleteUser'
}, {
  label: 'View groups',
  name: 'viewGroups'
}, {
  label: 'Add groups',
  name: 'createGroup'
}, {
  label: 'Edit groups',
  name: 'updateGroup'
}, {
  label: 'Delete groups',
  name: 'deleteGroup'
}, {
  label: 'Admin',
  name: 'isAdmin'
}];
const userInfos = [{
  label: 'Username',
  name: 'username',
  type: 'text',
  placeholder: 'Username'
}, {
  label: 'Email',
  name: 'email',
  type: 'text',
  placeholder: 'Email'
}, {
  label: 'Password',
  name: 'password',
  type: 'password',
  placeholder: 'Password'
}];
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(permissionsName, "permissionsName", "/home/aekryz-laptop/Workspace/system-administration/client/helpers.js");
  reactHotLoader.register(userInfos, "userInfos", "/home/aekryz-laptop/Workspace/system-administration/client/helpers.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/users/AddUser.js":
/*!*********************************!*\
  !*** ./client/users/AddUser.js ***!
  \*********************************/
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
/* harmony import */ var _components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SwitchToggle */ "./client/components/SwitchToggle.js");
/* harmony import */ var _components_UserInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInformation */ "./client/components/UserInformation.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./client/helpers.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const AddUser = ({
  message,
  redirect,
  onSubmit,
  handleSubmit,
  createUserEnded,
  from
}) => {
  const [isActivate, setIsActivate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isActivate: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      createUserEnded();
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._addUser_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._grid_container,
    onSubmit: handleSubmit(onSubmit)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _helpers__WEBPACK_IMPORTED_MODULE_6__["userInfos"].map((userinfo, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInformation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: index,
    name: userinfo.name,
    label: userinfo.label,
    placeholder: userinfo.placeholder,
    type: userinfo.type
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Activate status",
    permissionName: "isActivate",
    status: isActivate.isActivate,
    setIsActivate: setIsActivate
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._grid_second_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._permissions_title_item
  }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._permissions_check_item
  }, _helpers__WEBPACK_IMPORTED_MODULE_6__["permissionsName"].map((permissionName, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    label: permissionName.label,
    permissionName: permissionName.name
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._grid_third_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._cancel_botton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._anchor_cancel_botton,
    to: from
  }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_3___default.a._submit_botton,
    type: "submit"
  }, "Create"), redirect ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: {
      pathname: '/users',
      state: {
        message: message
      }
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, message))));
};

__signature__(AddUser, "useState{[isActivate, setIsActivate]({isActivate: true})}\nuseEffect{}");

AddUser.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  createUserEnded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = AddUser;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AddUser, "AddUser", "/home/aekryz-laptop/Workspace/system-administration/client/users/AddUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/users/AddUser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/users/createUserContainer.js":
/*!*********************************************!*\
  !*** ./client/users/createUserContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/users */ "./client/store/actions/users.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddUser */ "./client/users/AddUser.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const mapStateAddUserToProps = (state, ownProps) => {
  const {
    message,
    redirect
  } = state.createUserReducer;
  const {
    from
  } = ownProps.location.state;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    message: message,
    redirect: redirect,
    from: from
  };
};

const mapDispatchAddUserToProps = (dispatch, ownProps) => ({
  createUserEnded: () => dispatch(Object(_store_actions_users__WEBPACK_IMPORTED_MODULE_2__["createEnded"])())
});

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateAddUserToProps, mapDispatchAddUserToProps)(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'users',
  onSubmit: (values, dispatch) => dispatch(Object(_store_actions_users__WEBPACK_IMPORTED_MODULE_2__["startCreateUser"])(values))
})(_AddUser__WEBPACK_IMPORTED_MODULE_4__["default"])));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateAddUserToProps, "mapStateAddUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/users/createUserContainer.js");
  reactHotLoader.register(mapDispatchAddUserToProps, "mapDispatchAddUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/users/createUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/users/createUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3M/ZGUwYyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Td2l0Y2hUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2Vycy9BZGRVc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2Vycy9jcmVhdGVVc2VyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlN3aXRjaFRvZ2dsZSIsImxhYmVsIiwicGVybWlzc2lvbk5hbWUiLCJzdGF0dXMiLCJzZXRJc0FjdGl2YXRlIiwiYWRkVXNlclN0eWxlIiwiX3RkX2xhYmVsX3N3aXRjaF90b2dnbGUiLCJfdGRfc3dpdGNoX3RvZ2dsZSIsIl9sYWJlbF9jaGVjayIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiX3NsaWRlciIsIl9yb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIlVzZXJJbmZvcm1hdGlvbiIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIl9yb3dfIiwiX2FkZF91c2VyX2xhYmVsIiwiX2FkZF91c2VyX2lucHV0IiwicGVybWlzc2lvbnNOYW1lIiwidXNlckluZm9zIiwiQWRkVXNlciIsIm1lc3NhZ2UiLCJyZWRpcmVjdCIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiY3JlYXRlVXNlckVuZGVkIiwiZnJvbSIsImlzQWN0aXZhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIl9hZGRVc2VyX2NvbnRhaW5lciIsIl9ncmlkX2NvbnRhaW5lciIsIm1hcCIsInVzZXJpbmZvIiwiaW5kZXgiLCJfZ3JpZF9zZWNvbmRfaXRlbSIsIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtIiwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW0iLCJfZ3JpZF90aGlyZF9pdGVtIiwiX2NhbmNlbF9ib3R0b24iLCJfYW5jaG9yX2NhbmNlbF9ib3R0b24iLCJfc3VibWl0X2JvdHRvbiIsInBhdGhuYW1lIiwic3RhdGUiLCJtYXBTdGF0ZUFkZFVzZXJUb1Byb3BzIiwib3duUHJvcHMiLCJjcmVhdGVVc2VyUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoQWRkVXNlclRvUHJvcHMiLCJkaXNwYXRjaCIsImNyZWF0ZUVuZGVkIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJmb3JtIiwidmFsdWVzIiwic3RhcnRDcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0S0FBcUksRUFBRSxRQUFTLEdBQUcsMENBQTBDO0FBQzNOOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQyxPQUFEO0FBQVFDLGdCQUFSO0FBQXdCQyxRQUF4QjtBQUFnQ0M7QUFBaEMsQ0FBRCxLQUNuQix1RUFDRTtBQUFJLFdBQVMsRUFBRUMsaUZBQVksQ0FBQ0M7QUFBNUIsR0FBcUQsMEVBQVFMLEtBQVIsQ0FBckQsQ0FERixFQUVFO0FBQUksV0FBUyxFQUFFSSxpRkFBWSxDQUFDRTtBQUE1QixHQUNFO0FBQU8sV0FBUyxFQUFFRixpRkFBWSxDQUFDRyxZQUEvQjtBQUE2QyxTQUFPLEVBQUVOO0FBQXRELEdBQ0lDLE1BQU0sSUFBSUMsYUFBWCxHQUNDLDJEQUFDLGdEQUFEO0FBQU8sTUFBSSxFQUFFRixjQUFiO0FBQTZCLElBQUUsRUFBRUEsY0FBakM7QUFBaUQsV0FBUyxFQUFDLE9BQTNEO0FBQW1FLE1BQUks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QUNHLGlCQUFwQztBQUNBLFFBQU07QUFBRXBCO0FBQUYsTUFBV21CLFFBQVEsQ0FBQ0UsUUFBVCxDQUFrQkosS0FBbkM7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQSxTQUFPO0FBQ0w1QixXQUFPLEVBQUVBLE9BREo7QUFFTEMsWUFBUSxFQUFFQSxRQUZMO0FBR0xJLFFBQUksRUFBRUE7QUFIRCxHQUFQO0FBS0QsQ0FYRDs7QUFhQSxNQUFNd0IseUJBQXlCLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXTixRQUFYLE1BQXlCO0FBQ3pEcEIsaUJBQWUsRUFBRSxNQUFNMEIsUUFBUSxDQUFDQyx3RUFBVyxFQUFaO0FBRDBCLENBQXpCLENBQWxDOztpQkFJZUMsbUVBQVUsQ0FBQ0MsMkRBQU8sQ0FDL0JWLHNCQUQrQixFQUUvQk0seUJBRitCLENBQVAsQ0FHeEJLLDREQUFTLENBQUM7QUFDVkMsTUFBSSxFQUFFLE9BREk7QUFFVmpDLFVBQVEsRUFBRSxDQUFDa0MsTUFBRCxFQUFTTixRQUFULEtBQXNCQSxRQUFRLENBQUNPLDRFQUFlLENBQUNELE1BQUQsQ0FBaEI7QUFGOUIsQ0FBRCxDQUFULENBR0NyQyxnREFIRCxDQUh3QixDQUFELEM7O0FBQVY7Ozs7Ozs7Ozs7MEJBakJUd0Isc0I7MEJBYUFNLHlCIiwiZmlsZSI6ImNyZWF0ZVVzZXJDb250YWluZXIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIl9hZGRVc2VyX2NvbnRhaW5lclwiOlwia183d3lpMzZnSm4xQ3I5QWxzN2plXCIsXCJfZ3JpZF9jb250YWluZXJcIjpcIl8xMTZzWm5ZaVBtQXhmT0lTRXhHYnJqXCIsXCJfZ3JpZF9zZWNvbmRfaXRlbVwiOlwiXzJiNzB5djJpWDBFS3RBNmlvRjk2enZcIixcIl9ncmlkX3RoaXJkX2l0ZW1cIjpcIl8zM2xuQnA0RUZZR2JzUVdpdzlTMlU5XCIsXCJfY2FuY2VsX2JvdHRvblwiOlwiXzFiZ1hDTzI4ajBOekxPS0FBcEhHZjJcIixcIl9hbmNob3JfY2FuY2VsX2JvdHRvblwiOlwiVTc2a2pmRkRWSHN4Y0FfVzRxZEd4XCIsXCJfc3VibWl0X2JvdHRvblwiOlwiXzIzUDg4eTRNblFDV3ZkV0FMZE1kYTZcIixcIl9yb3dfXCI6XCJfMi1xRWJaQlFMczFWLU5mYXkybmU4bVwiLFwiX2FkZF91c2VyX2xhYmVsXCI6XCJfTVJTYy0xUTdQWU9uY21iSTByVGVcIixcIl9hZGRfdXNlcl9pbnB1dFwiOlwiXzN3SkJyaHVLZ0ZkZm9VOWJNTWVIeVZcIixcIl9sYWJlbF9jaGVja1wiOlwiXzF5QkdVTVpIZFlQMFRINVhQbFV0SjJcIixcIl9zbGlkZXJcIjpcIl80OGdud2V4QlRkaXpOTnJybXBCWVhcIixcIl9yb3VuZFwiOlwiXzI5Q1lUNkRqV0hMLWlOR2pxQjdYemVcIixcIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtXCI6XCJfMS10ZTJ1ekQ0NEFuSVg3NU9menJLV1wiLFwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW1cIjpcIl8xYjIxTlR1NjJ6ZDF0bHBqUk9UY3hVXCIsXCJfdGRfbGFiZWxfc3dpdGNoX3RvZ2dsZVwiOlwiXzJrRGItS1JESFE4NjhfTG5NbWhJTmJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODU1NzI3MDE3MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hZWtyeXotbGFwdG9wL1dvcmtzcGFjZS9zeXN0ZW0tYWRtaW5pc3RyYXRpb24vbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBhZGRVc2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3MnO1xuXG5jb25zdCBTd2l0Y2hUb2dnbGUgPSAoe2xhYmVsLCBwZXJtaXNzaW9uTmFtZSwgc3RhdHVzLCBzZXRJc0FjdGl2YXRlIH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fdGRfbGFiZWxfc3dpdGNoX3RvZ2dsZX0+PGxhYmVsPntsYWJlbH08L2xhYmVsPjwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl90ZF9zd2l0Y2hfdG9nZ2xlfT5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fbGFiZWxfY2hlY2t9IGh0bWxGb3I9e3Blcm1pc3Npb25OYW1lfT5cbiAgICAgICAgeyhzdGF0dXMgJiYgc2V0SXNBY3RpdmF0ZSkgP1xuICAgICAgICAgIDxGaWVsZCBuYW1lPXtwZXJtaXNzaW9uTmFtZX0gaWQ9e3Blcm1pc3Npb25OYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3N0YXR1c30gb25DaGFuZ2U9e2UgPT4gc2V0SXNBY3RpdmF0ZShlLnRhcmdldC5jaGVja2VkKX0vPiA6IFxuICAgICAgICAgIDxGaWVsZCBuYW1lPXtwZXJtaXNzaW9uTmFtZX0gaWQ9e3Blcm1pc3Npb25OYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHthZGRVc2VyU3R5bGUuX3NsaWRlcn0gJHthZGRVc2VyU3R5bGUuX3JvdW5kfWB9Pjwvc3Bhbj4gICBcbiAgICAgIDwvbGFiZWw+XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cblN3aXRjaFRvZ2dsZS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlcm1pc3Npb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXR1czogUHJvcFR5cGVzLmJvb2wsXG4gIHNldElzQWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoVG9nZ2xlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBhZGRVc2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3MnO1xuXG5jb25zdCBVc2VySW5mb3JtYXRpb24gPSAoe25hbWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9yb3dffT5cbiAgICA8bGFiZWwgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FkZF91c2VyX2xhYmVsfSBodG1sRm9yPXtuYW1lfT57bGFiZWx9OiA8L2xhYmVsPlxuICAgIHt2YWx1ZSA/XG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FkZF91c2VyX2lucHV0fSBuYW1lPXtuYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gdHlwZT17dHlwZX0gdmFsdWU9e3ZhbHVlfS8+IDogXG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FkZF91c2VyX2lucHV0fSBuYW1lPXtuYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gdHlwZT17dHlwZX0vPlxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5Vc2VySW5mb3JtYXRpb24ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mb3JtYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3QgcGVybWlzc2lvbnNOYW1lID0gW1xuICB7bGFiZWw6ICdWaWV3IHVzZXJzJywgbmFtZTogJ3ZpZXdVc2Vycyd9LFxuICB7bGFiZWw6ICdBZGQgdXNlcnMnLCBuYW1lOiAnY3JlYXRlVXNlcid9LFxuICB7bGFiZWw6ICdFZGl0IHVzZXJzJywgbmFtZTogJ3VwZGF0ZVVzZXInfSxcbiAge2xhYmVsOiAnRGVsZXRlIHVzZXJzJywgbmFtZTogJ2RlbGV0ZVVzZXInfSxcbiAge2xhYmVsOiAnVmlldyBncm91cHMnLCBuYW1lOiAndmlld0dyb3Vwcyd9LFxuICB7bGFiZWw6ICdBZGQgZ3JvdXBzJywgbmFtZTogJ2NyZWF0ZUdyb3VwJ30sXG4gIHtsYWJlbDogJ0VkaXQgZ3JvdXBzJywgbmFtZTogJ3VwZGF0ZUdyb3VwJ30sXG4gIHtsYWJlbDogJ0RlbGV0ZSBncm91cHMnLCBuYW1lOiAnZGVsZXRlR3JvdXAnfSxcbiAge2xhYmVsOiAnQWRtaW4nLCBuYW1lOiAnaXNBZG1pbid9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJJbmZvcyA9IFtcbiAge2xhYmVsOiAnVXNlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnLCB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOidVc2VybmFtZSd9LFxuICB7bGFiZWw6ICdFbWFpbCcsIG5hbWU6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6J0VtYWlsJ30sXG4gIHtsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6J1Bhc3N3b3JkJ30sXG5dOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJlZGlyZWN0LCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYWRkVXNlclN0eWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FkZFVzZXIuY3NzJztcbmltcG9ydCBTd2l0Y2hUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Td2l0Y2hUb2dnbGUnO1xuaW1wb3J0IFVzZXJJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvcm1hdGlvbic7XG5pbXBvcnQgeyBwZXJtaXNzaW9uc05hbWUsIHVzZXJJbmZvc30gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IEFkZFVzZXIgPSAoe1xuICBtZXNzYWdlLFxuICByZWRpcmVjdCxcbiAgb25TdWJtaXQsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgY3JlYXRlVXNlckVuZGVkLFxuICBmcm9tLFxufSkgPT4ge1xuXG4gIGNvbnN0IFtpc0FjdGl2YXRlLCBzZXRJc0FjdGl2YXRlXSA9IHVzZVN0YXRlKHtpc0FjdGl2YXRlOiB0cnVlfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY3JlYXRlVXNlckVuZGVkKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkVXNlcl9jb250YWluZXJ9PlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fZ3JpZF9jb250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAge3VzZXJJbmZvcy5tYXAoKHVzZXJpbmZvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbiBcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgbmFtZT17dXNlcmluZm8ubmFtZX1cbiAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvLmxhYmVsfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlcmluZm8ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHR5cGU9e3VzZXJpbmZvLnR5cGV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgIGxhYmVsPSdBY3RpdmF0ZSBzdGF0dXMnXG4gICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0naXNBY3RpdmF0ZSdcbiAgICAgICAgICAgIHN0YXR1cz17aXNBY3RpdmF0ZS5pc0FjdGl2YXRlfVxuICAgICAgICAgICAgc2V0SXNBY3RpdmF0ZT17c2V0SXNBY3RpdmF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fZ3JpZF9zZWNvbmRfaXRlbX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fcGVybWlzc2lvbnNfdGl0bGVfaXRlbX0+UGVybWlzc2lvbnM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9wZXJtaXNzaW9uc19jaGVja19pdGVtfT5cbiAgICAgICAgICAgIHtwZXJtaXNzaW9uc05hbWUubWFwKChwZXJtaXNzaW9uTmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGxhYmVsPXtwZXJtaXNzaW9uTmFtZS5sYWJlbH1cbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT17cGVybWlzc2lvbk5hbWUubmFtZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9ncmlkX3RoaXJkX2l0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2NhbmNlbF9ib3R0b259PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FuY2hvcl9jYW5jZWxfYm90dG9ufSB0bz17ZnJvbX0gPkNhbmNlbDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9zdWJtaXRfYm90dG9ufSB0eXBlPVwic3VibWl0XCIgPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZGlyZWN0ID8gPFJlZGlyZWN0IHRvPXt7cGF0aG5hbWU6ICcvdXNlcnMnLCBzdGF0ZTogeyBtZXNzYWdlOiBtZXNzYWdlIH19fSAvPiA6IDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFkZFVzZXIucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZWRpcmVjdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY3JlYXRlVXNlckVuZGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRVc2VyOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBzdGFydENyZWF0ZVVzZXIsIGNyZWF0ZUVuZGVkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2Vycyc7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBBZGRVc2VyIGZyb20gJy4vQWRkVXNlcic7XG5cbmNvbnN0IG1hcFN0YXRlQWRkVXNlclRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgcmVkaXJlY3QgfSA9IHN0YXRlLmNyZWF0ZVVzZXJSZWR1Y2VyO1xuICBjb25zdCB7IGZyb20gfSA9IG93blByb3BzLmxvY2F0aW9uLnN0YXRlO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIGNvbnNvbGUubG9nKG93blByb3BzKTtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgcmVkaXJlY3Q6IHJlZGlyZWN0LFxuICAgIGZyb206IGZyb20sXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaEFkZFVzZXJUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4gKHtcbiAgY3JlYXRlVXNlckVuZGVkOiAoKSA9PiBkaXNwYXRjaChjcmVhdGVFbmRlZCgpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIG1hcFN0YXRlQWRkVXNlclRvUHJvcHMsXG4gIG1hcERpc3BhdGNoQWRkVXNlclRvUHJvcHNcbikocmVkdXhGb3JtKHtcbiAgZm9ybTogJ3VzZXJzJyxcbiAgb25TdWJtaXQ6ICh2YWx1ZXMsIGRpc3BhdGNoKSA9PiBkaXNwYXRjaChzdGFydENyZWF0ZVVzZXIodmFsdWVzKSlcbn0pKEFkZFVzZXIpKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9