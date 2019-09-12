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
      // 1568317501063
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

  reactHotLoader.register(SwitchToggle, "SwitchToggle", "/home/aekryz/Workspace/system-administration/client/components/SwitchToggle.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/components/SwitchToggle.js");
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

  reactHotLoader.register(UserInformation, "UserInformation", "/home/aekryz/Workspace/system-administration/client/components/UserInformation.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/components/UserInformation.js");
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

  reactHotLoader.register(permissionsName, "permissionsName", "/home/aekryz/Workspace/system-administration/client/helpers.js");
  reactHotLoader.register(userInfos, "userInfos", "/home/aekryz/Workspace/system-administration/client/helpers.js");
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

  reactHotLoader.register(AddUser, "AddUser", "/home/aekryz/Workspace/system-administration/client/users/AddUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/users/AddUser.js");
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

  reactHotLoader.register(mapStateAddUserToProps, "mapStateAddUserToProps", "/home/aekryz/Workspace/system-administration/client/users/createUserContainer.js");
  reactHotLoader.register(mapDispatchAddUserToProps, "mapDispatchAddUserToProps", "/home/aekryz/Workspace/system-administration/client/users/createUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/users/createUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3M/ZGUwYyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Td2l0Y2hUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2Vycy9BZGRVc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2Vycy9jcmVhdGVVc2VyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlN3aXRjaFRvZ2dsZSIsImxhYmVsIiwicGVybWlzc2lvbk5hbWUiLCJzdGF0dXMiLCJzZXRJc0FjdGl2YXRlIiwiYWRkVXNlclN0eWxlIiwiX3RkX2xhYmVsX3N3aXRjaF90b2dnbGUiLCJfdGRfc3dpdGNoX3RvZ2dsZSIsIl9sYWJlbF9jaGVjayIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiX3NsaWRlciIsIl9yb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIlVzZXJJbmZvcm1hdGlvbiIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIl9yb3dfIiwiX2FkZF91c2VyX2xhYmVsIiwiX2FkZF91c2VyX2lucHV0IiwicGVybWlzc2lvbnNOYW1lIiwidXNlckluZm9zIiwiQWRkVXNlciIsIm1lc3NhZ2UiLCJyZWRpcmVjdCIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiY3JlYXRlVXNlckVuZGVkIiwiZnJvbSIsImlzQWN0aXZhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIl9hZGRVc2VyX2NvbnRhaW5lciIsIl9ncmlkX2NvbnRhaW5lciIsIm1hcCIsInVzZXJpbmZvIiwiaW5kZXgiLCJfZ3JpZF9zZWNvbmRfaXRlbSIsIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtIiwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW0iLCJfZ3JpZF90aGlyZF9pdGVtIiwiX2NhbmNlbF9ib3R0b24iLCJfYW5jaG9yX2NhbmNlbF9ib3R0b24iLCJfc3VibWl0X2JvdHRvbiIsInBhdGhuYW1lIiwic3RhdGUiLCJtYXBTdGF0ZUFkZFVzZXJUb1Byb3BzIiwib3duUHJvcHMiLCJjcmVhdGVVc2VyUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoQWRkVXNlclRvUHJvcHMiLCJkaXNwYXRjaCIsImNyZWF0ZUVuZGVkIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJmb3JtIiwidmFsdWVzIiwic3RhcnRDcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0S0FBOEgsRUFBRSxRQUFTLEdBQUcsMENBQTBDO0FBQ3BOOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQyxPQUFEO0FBQVFDLGdCQUFSO0FBQXdCQyxRQUF4QjtBQUFnQ0M7QUFBaEMsQ0FBRCxLQUNuQix1RUFDRTtBQUFJLFdBQVMsRUFBRUMsaUZBQVksQ0FBQ0M7QUFBNUIsR0FBcUQsMEVBQVFMLEtBQVIsQ0FBckQsQ0FERixFQUVFO0FBQUksV0FBUyxFQUFFSSxpRkFBWSxDQUFDRTtBQUE1QixHQUNFO0FBQU8sV0FBUyxFQUFFRixpRkFBWSxDQUFDRyxZQUEvQjtBQUE2QyxTQUFPLEVBQUVOO0FBQXRELEdBQ0lDLE1BQU0sSUFBSUMsYUFBWCxHQUNDLDJEQUFDLGdEQUFEO0FBQU8sTUFBSSxFQUFFRixjQUFiO0FBQTZCLElBQUUsRUFBRUEsY0FBakM7QUFBaUQsV0FBUyxFQUFDLE9BQTNEO0FBQW1FLE1BQUks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QUNHLGlCQUFwQztBQUNBLFFBQU07QUFBRXBCO0FBQUYsTUFBV21CLFFBQVEsQ0FBQ0UsUUFBVCxDQUFrQkosS0FBbkM7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQSxTQUFPO0FBQ0w1QixXQUFPLEVBQUVBLE9BREo7QUFFTEMsWUFBUSxFQUFFQSxRQUZMO0FBR0xJLFFBQUksRUFBRUE7QUFIRCxHQUFQO0FBS0QsQ0FYRDs7QUFhQSxNQUFNd0IseUJBQXlCLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXTixRQUFYLE1BQXlCO0FBQ3pEcEIsaUJBQWUsRUFBRSxNQUFNMEIsUUFBUSxDQUFDQyx3RUFBVyxFQUFaO0FBRDBCLENBQXpCLENBQWxDOztpQkFJZUMsbUVBQVUsQ0FBQ0MsMkRBQU8sQ0FDL0JWLHNCQUQrQixFQUUvQk0seUJBRitCLENBQVAsQ0FHeEJLLDREQUFTLENBQUM7QUFDVkMsTUFBSSxFQUFFLE9BREk7QUFFVmpDLFVBQVEsRUFBRSxDQUFDa0MsTUFBRCxFQUFTTixRQUFULEtBQXNCQSxRQUFRLENBQUNPLDRFQUFlLENBQUNELE1BQUQsQ0FBaEI7QUFGOUIsQ0FBRCxDQUFULENBR0NyQyxnREFIRCxDQUh3QixDQUFELEM7O0FBQVY7Ozs7Ozs7Ozs7MEJBakJUd0Isc0I7MEJBYUFNLHlCIiwiZmlsZSI6ImNyZWF0ZVVzZXJDb250YWluZXIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIl9hZGRVc2VyX2NvbnRhaW5lclwiOlwia183d3lpMzZnSm4xQ3I5QWxzN2plXCIsXCJfZ3JpZF9jb250YWluZXJcIjpcIl8xMTZzWm5ZaVBtQXhmT0lTRXhHYnJqXCIsXCJfZ3JpZF9zZWNvbmRfaXRlbVwiOlwiXzJiNzB5djJpWDBFS3RBNmlvRjk2enZcIixcIl9ncmlkX3RoaXJkX2l0ZW1cIjpcIl8zM2xuQnA0RUZZR2JzUVdpdzlTMlU5XCIsXCJfY2FuY2VsX2JvdHRvblwiOlwiXzFiZ1hDTzI4ajBOekxPS0FBcEhHZjJcIixcIl9hbmNob3JfY2FuY2VsX2JvdHRvblwiOlwiVTc2a2pmRkRWSHN4Y0FfVzRxZEd4XCIsXCJfc3VibWl0X2JvdHRvblwiOlwiXzIzUDg4eTRNblFDV3ZkV0FMZE1kYTZcIixcIl9yb3dfXCI6XCJfMi1xRWJaQlFMczFWLU5mYXkybmU4bVwiLFwiX2FkZF91c2VyX2xhYmVsXCI6XCJfTVJTYy0xUTdQWU9uY21iSTByVGVcIixcIl9hZGRfdXNlcl9pbnB1dFwiOlwiXzN3SkJyaHVLZ0ZkZm9VOWJNTWVIeVZcIixcIl9sYWJlbF9jaGVja1wiOlwiXzF5QkdVTVpIZFlQMFRINVhQbFV0SjJcIixcIl9zbGlkZXJcIjpcIl80OGdud2V4QlRkaXpOTnJybXBCWVhcIixcIl9yb3VuZFwiOlwiXzI5Q1lUNkRqV0hMLWlOR2pxQjdYemVcIixcIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtXCI6XCJfMS10ZTJ1ekQ0NEFuSVg3NU9menJLV1wiLFwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW1cIjpcIl8xYjIxTlR1NjJ6ZDF0bHBqUk9UY3hVXCIsXCJfdGRfbGFiZWxfc3dpdGNoX3RvZ2dsZVwiOlwiXzJrRGItS1JESFE4NjhfTG5NbWhJTmJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODMxNzUwMTA2M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hZWtyeXovV29ya3NwYWNlL3N5c3RlbS1hZG1pbmlzdHJhdGlvbi9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGFkZFVzZXJTdHlsZSBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hZGRVc2VyLmNzcyc7XG5cbmNvbnN0IFN3aXRjaFRvZ2dsZSA9ICh7bGFiZWwsIHBlcm1pc3Npb25OYW1lLCBzdGF0dXMsIHNldElzQWN0aXZhdGUgfSkgPT4gKFxuICA8dHI+XG4gICAgPHRkIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl90ZF9sYWJlbF9zd2l0Y2hfdG9nZ2xlfT48bGFiZWw+e2xhYmVsfTwvbGFiZWw+PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3RkX3N3aXRjaF90b2dnbGV9PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9sYWJlbF9jaGVja30gaHRtbEZvcj17cGVybWlzc2lvbk5hbWV9PlxuICAgICAgICB7KHN0YXR1cyAmJiBzZXRJc0FjdGl2YXRlKSA/XG4gICAgICAgICAgPEZpZWxkIG5hbWU9e3Blcm1pc3Npb25OYW1lfSBpZD17cGVybWlzc2lvbk5hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c3RhdHVzfSBvbkNoYW5nZT17ZSA9PiBzZXRJc0FjdGl2YXRlKGUudGFyZ2V0LmNoZWNrZWQpfS8+IDogXG4gICAgICAgICAgPEZpZWxkIG5hbWU9e3Blcm1pc3Npb25OYW1lfSBpZD17cGVybWlzc2lvbk5hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2FkZFVzZXJTdHlsZS5fc2xpZGVyfSAke2FkZFVzZXJTdHlsZS5fcm91bmR9YH0+PC9zcGFuPiAgIFxuICAgICAgPC9sYWJlbD5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuU3dpdGNoVG9nZ2xlLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGVybWlzc2lvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhdHVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2V0SXNBY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hUb2dnbGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGFkZFVzZXJTdHlsZSBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hZGRVc2VyLmNzcyc7XG5cbmNvbnN0IFVzZXJJbmZvcm1hdGlvbiA9ICh7bmFtZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCB2YWx1ZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3Jvd199PlxuICAgIDxsYWJlbCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfbGFiZWx9IGh0bWxGb3I9e25hbWV9PntsYWJlbH06IDwvbGFiZWw+XG4gICAge3ZhbHVlID9cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfaW5wdXR9IG5hbWU9e25hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPXt0eXBlfSB2YWx1ZT17dmFsdWV9Lz4gOiBcbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfaW5wdXR9IG5hbWU9e25hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPXt0eXBlfS8+XG4gICAgfVxuICA8L2Rpdj5cbik7XG5cblVzZXJJbmZvcm1hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvcm1hdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBwZXJtaXNzaW9uc05hbWUgPSBbXG4gIHtsYWJlbDogJ1ZpZXcgdXNlcnMnLCBuYW1lOiAndmlld1VzZXJzJ30sXG4gIHtsYWJlbDogJ0FkZCB1c2VycycsIG5hbWU6ICdjcmVhdGVVc2VyJ30sXG4gIHtsYWJlbDogJ0VkaXQgdXNlcnMnLCBuYW1lOiAndXBkYXRlVXNlcid9LFxuICB7bGFiZWw6ICdEZWxldGUgdXNlcnMnLCBuYW1lOiAnZGVsZXRlVXNlcid9LFxuICB7bGFiZWw6ICdWaWV3IGdyb3VwcycsIG5hbWU6ICd2aWV3R3JvdXBzJ30sXG4gIHtsYWJlbDogJ0FkZCBncm91cHMnLCBuYW1lOiAnY3JlYXRlR3JvdXAnfSxcbiAge2xhYmVsOiAnRWRpdCBncm91cHMnLCBuYW1lOiAndXBkYXRlR3JvdXAnfSxcbiAge2xhYmVsOiAnRGVsZXRlIGdyb3VwcycsIG5hbWU6ICdkZWxldGVHcm91cCd9LFxuICB7bGFiZWw6ICdBZG1pbicsIG5hbWU6ICdpc0FkbWluJ30sXG5dO1xuXG5leHBvcnQgY29uc3QgdXNlckluZm9zID0gW1xuICB7bGFiZWw6ICdVc2VybmFtZScsIG5hbWU6ICd1c2VybmFtZScsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6J1VzZXJuYW1lJ30sXG4gIHtsYWJlbDogJ0VtYWlsJywgbmFtZTogJ2VtYWlsJywgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjonRW1haWwnfSxcbiAge2xhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnLCBwbGFjZWhvbGRlcjonUGFzc3dvcmQnfSxcbl07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBhZGRVc2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3MnO1xuaW1wb3J0IFN3aXRjaFRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL1N3aXRjaFRvZ2dsZSc7XG5pbXBvcnQgVXNlckluZm9ybWF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uJztcbmltcG9ydCB7IHBlcm1pc3Npb25zTmFtZSwgdXNlckluZm9zfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgQWRkVXNlciA9ICh7XG4gIG1lc3NhZ2UsXG4gIHJlZGlyZWN0LFxuICBvblN1Ym1pdCxcbiAgaGFuZGxlU3VibWl0LFxuICBjcmVhdGVVc2VyRW5kZWQsXG4gIGZyb20sXG59KSA9PiB7XG5cbiAgY29uc3QgW2lzQWN0aXZhdGUsIHNldElzQWN0aXZhdGVdID0gdXNlU3RhdGUoe2lzQWN0aXZhdGU6IHRydWV9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjcmVhdGVVc2VyRW5kZWQoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9hZGRVc2VyX2NvbnRhaW5lcn0+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9ncmlkX2NvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICB7dXNlckluZm9zLm1hcCgodXNlcmluZm8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8VXNlckluZm9ybWF0aW9uIFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBuYW1lPXt1c2VyaW5mby5uYW1lfVxuICAgICAgICAgICAgICBsYWJlbD17dXNlcmluZm8ubGFiZWx9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt1c2VyaW5mby5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdHlwZT17dXNlcmluZm8udHlwZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgbGFiZWw9J0FjdGl2YXRlIHN0YXR1cydcbiAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lPSdpc0FjdGl2YXRlJ1xuICAgICAgICAgICAgc3RhdHVzPXtpc0FjdGl2YXRlLmlzQWN0aXZhdGV9XG4gICAgICAgICAgICBzZXRJc0FjdGl2YXRlPXtzZXRJc0FjdGl2YXRlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9ncmlkX3NlY29uZF9pdGVtfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9wZXJtaXNzaW9uc190aXRsZV9pdGVtfT5QZXJtaXNzaW9uczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW19PlxuICAgICAgICAgICAge3Blcm1pc3Npb25zTmFtZS5tYXAoKHBlcm1pc3Npb25OYW1lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3Blcm1pc3Npb25OYW1lLmxhYmVsfVxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lPXtwZXJtaXNzaW9uTmFtZS5uYW1lfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2dyaWRfdGhpcmRfaXRlbX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fY2FuY2VsX2JvdHRvbn0+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYW5jaG9yX2NhbmNlbF9ib3R0b259IHRvPXtmcm9tfSA+Q2FuY2VsPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3N1Ym1pdF9ib3R0b259IHR5cGU9XCJzdWJtaXRcIiA+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVkaXJlY3QgPyA8UmVkaXJlY3QgdG89e3twYXRobmFtZTogJy91c2VycycsIHN0YXRlOiB7IG1lc3NhZ2U6IG1lc3NhZ2UgfX19IC8+IDogPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWRkVXNlci5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlZGlyZWN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjcmVhdGVVc2VyRW5kZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFVzZXI7IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHN0YXJ0Q3JlYXRlVXNlciwgY3JlYXRlRW5kZWQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXJzJztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEFkZFVzZXIgZnJvbSAnLi9BZGRVc2VyJztcblxuY29uc3QgbWFwU3RhdGVBZGRVc2VyVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlLCByZWRpcmVjdCB9ID0gc3RhdGUuY3JlYXRlVXNlclJlZHVjZXI7XG4gIGNvbnN0IHsgZnJvbSB9ID0gb3duUHJvcHMubG9jYXRpb24uc3RhdGU7XG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgY29uc29sZS5sb2cob3duUHJvcHMpO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICByZWRpcmVjdDogcmVkaXJlY3QsXG4gICAgZnJvbTogZnJvbSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoQWRkVXNlclRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiAoe1xuICBjcmVhdGVVc2VyRW5kZWQ6ICgpID0+IGRpc3BhdGNoKGNyZWF0ZUVuZGVkKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgbWFwU3RhdGVBZGRVc2VyVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hBZGRVc2VyVG9Qcm9wc1xuKShyZWR1eEZvcm0oe1xuICBmb3JtOiAndXNlcnMnLFxuICBvblN1Ym1pdDogKHZhbHVlcywgZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHN0YXJ0Q3JlYXRlVXNlcih2YWx1ZXMpKVxufSkoQWRkVXNlcikpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=