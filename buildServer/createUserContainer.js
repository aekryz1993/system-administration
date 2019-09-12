exports.ids = ["createUserContainer"];
exports.modules = {

/***/ "./client/assets/stylesheets/components/addUser.css":
/*!**********************************************************!*\
  !*** ./client/assets/stylesheets/components/addUser.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"_addUser_container": "k_7wyi36gJn1Cr9Als7je",
	"_grid_container": "_116sZnYiPmAxfOISExGbrj",
	"_grid_second_item": "_2b70yv2iX0EKtA6ioF96zv",
	"_grid_third_item": "_33lnBp4EFYGbsQWiw9S2U9",
	"_cancel_botton": "_1bgXCO28j0NzLOKAApHGf2",
	"_anchor_cancel_botton": "U76kjfFDVHsxcA_W4qdGx",
	"_submit_botton": "_23P88y4MnQCWvdWALdMda6",
	"_row_": "_2-qEbZBQLs1V-Nfay2ne8m",
	"_add_user_label": "_MRSc-1Q7PYOncmbI0rTe",
	"_add_user_input": "_3wJBrhuKgFdfoU9bMMeHyV",
	"_label_check": "_1yBGUMZHdYP0TH5XPlUtJ2",
	"_slider": "_48gnwexBTdizNNrrmpBYX",
	"_round": "_29CYT6DjWHL-iNGjqB7Xze",
	"_permissions_title_item": "_1-te2uzD44AnIX75OfzrKW",
	"_permissions_check_item": "_1b21NTu62zd1tlpjROTcxU",
	"_td_label_switch_toggle": "_2kDb-KRDHQ868_LnMmhINb"
};

/***/ }),

/***/ "./client/components/SwitchToggle.js":
/*!*******************************************!*\
  !*** ./client/components/SwitchToggle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/users */ "./client/store/actions/users.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);
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

};;
//# sourceMappingURL=createUserContainer.js.map