(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateUserContainer"],{

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

/***/ "./client/user/UpdateUser.js":
/*!***********************************!*\
  !*** ./client/user/UpdateUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_UserInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserInformation */ "./client/components/UserInformation.js");
/* harmony import */ var _components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SwitchToggle */ "./client/components/SwitchToggle.js");
/* harmony import */ var _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/stylesheets/components/addUser.css */ "./client/assets/stylesheets/components/addUser.css");
/* harmony import */ var _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const UpdateUser = ({
  message,
  userId,
  permissions,
  initialValues,
  redirect,
  onSubmit,
  handleSubmit,
  updateFinished
}) => {
  const [isActivate, setIsActivate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isActivate: initialValues.isActivate
  });
  const [viewUsers, setViewUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    viewUsers: permissions.viewUsers
  });
  const [createUser, setCreateUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    createUser: permissions.createUser
  });
  const [updateUser, setUpdateUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    updateUser: permissions.updateUser
  });
  const [deleteUser, setDeleteUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    deleteUser: permissions.deleteUser
  });
  const [viewGroups, setViewGroups] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    viewGroups: permissions.viewGroups
  });
  const [createGroup, setCreateGroup] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    createGroup: permissions.createGroup
  });
  const [updateGroup, setUpdateGroup] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    updateGroup: permissions.updateGroup
  });
  const [deleteGroup, setDeleteGroup] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    deleteGroup: permissions.deleteGroup
  });
  const [isAdmin, setIsAdmin] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isAdmin: permissions.isAdmin
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      updateFinished();
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._addUser_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._grid_container,
    onSubmit: handleSubmit(onSubmit(userId))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "username",
    label: "Username",
    placeholder: "Username",
    type: "text",
    value: initialValues.username
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
    value: initialValues.email
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Activate status",
    permissionName: "isActivate",
    status: isActivate.isActivate,
    setIsActivate: setIsActivate
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._grid_second_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._permissions_title_item
  }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._permissions_check_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "View users",
    permissionName: "viewUsers",
    status: viewUsers.viewUsers,
    setIsActivate: setViewUsers
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Add users",
    permissionName: "createUser",
    status: createUser.createUser,
    setIsActivate: setCreateUser
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Edit users",
    permissionName: "updateUser",
    status: updateUser.updateUser,
    setIsActivate: setUpdateUser
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Delete users",
    permissionName: "deleteUser",
    status: deleteUser.deleteUser,
    setIsActivate: setDeleteUser
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "View groups",
    permissionName: "viewGroups",
    status: viewGroups.viewGroups,
    setIsActivate: setViewGroups
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Add groups",
    permissionName: "createGroup",
    status: createGroup.createGroup,
    setIsActivate: setCreateGroup
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Edit groups",
    permissionName: "updateGroup",
    status: updateGroup.updateGroup,
    setIsActivate: setUpdateGroup
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Delete groups",
    permissionName: "deleteGroup",
    status: deleteGroup.deleteGroup,
    setIsActivate: setDeleteGroup
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SwitchToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Admin",
    permissionName: "isAdmin",
    status: isAdmin.isAdmin,
    setIsActivate: setIsAdmin
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._grid_third_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._cancel_botton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._anchor_cancel_botton,
    to: `/user/${userId}`
  }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _assets_stylesheets_components_addUser_css__WEBPACK_IMPORTED_MODULE_5___default.a._submit_botton,
    type: "submit"
  }, "Update"), redirect ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: `/user/${userId}`
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null))));
};

__signature__(UpdateUser, "useState{[isActivate, setIsActivate]({isActivate: initialValues.isActivate})}\nuseState{[viewUsers, setViewUsers]({viewUsers: permissions.viewUsers})}\nuseState{[createUser, setCreateUser]({createUser: permissions.createUser})}\nuseState{[updateUser, setUpdateUser]({updateUser: permissions.updateUser})}\nuseState{[deleteUser, setDeleteUser]({deleteUser: permissions.deleteUser})}\nuseState{[viewGroups, setViewGroups]({viewGroups: permissions.viewGroups})}\nuseState{[createGroup, setCreateGroup]({createGroup: permissions.createGroup})}\nuseState{[updateGroup, setUpdateGroup]({updateGroup: permissions.updateGroup})}\nuseState{[deleteGroup, setDeleteGroup]({deleteGroup: permissions.deleteGroup})}\nuseState{[isAdmin, setIsAdmin]({isAdmin: permissions.isAdmin})}\nuseEffect{}");

UpdateUser.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateFinished: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = UpdateUser;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UpdateUser, "UpdateUser", "/home/aekryz/Workspace/system-administration/client/user/UpdateUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/UpdateUser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/updateUserContainer.js":
/*!********************************************!*\
  !*** ./client/user/updateUserContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/user */ "./client/store/actions/user.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _UpdateUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdateUser */ "./client/user/UpdateUser.js");
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
  } = state.updateUserReducer;
  const {
    id
  } = ownProps.match.params;
  const {
    initialValues
  } = ownProps.location.state;
  const permissions = initialValues.permission;
  console.log('************************');
  console.log(initialValues);
  console.log('************************');
  return {
    message: message,
    redirect: redirect,
    userId: id,
    initialValues: initialValues,
    permissions: permissions
  };
};

const mapDispatchUpdateUserToProps = (dispatch, ownProps) => ({
  updateFinished: () => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__["updateFinished"])())
});

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateUpdateUserToProps, mapDispatchUpdateUserToProps)(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'updateuser',
  onSubmit: id => (values, dispatch) => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__["startUpdateUser"])(id, values))
})(_UpdateUser__WEBPACK_IMPORTED_MODULE_4__["default"])));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateUpdateUserToProps, "mapStateUpdateUserToProps", "/home/aekryz/Workspace/system-administration/client/user/updateUserContainer.js");
  reactHotLoader.register(mapDispatchUpdateUserToProps, "mapDispatchUpdateUserToProps", "/home/aekryz/Workspace/system-administration/client/user/updateUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/updateUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3M/ZGUwYyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Td2l0Y2hUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2VyL1VwZGF0ZVVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3VzZXIvdXBkYXRlVXNlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJTd2l0Y2hUb2dnbGUiLCJsYWJlbCIsInBlcm1pc3Npb25OYW1lIiwic3RhdHVzIiwic2V0SXNBY3RpdmF0ZSIsImFkZFVzZXJTdHlsZSIsIl90ZF9sYWJlbF9zd2l0Y2hfdG9nZ2xlIiwiX3RkX3N3aXRjaF90b2dnbGUiLCJfbGFiZWxfY2hlY2siLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIl9zbGlkZXIiLCJfcm91bmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJVc2VySW5mb3JtYXRpb24iLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJfcm93XyIsIl9hZGRfdXNlcl9sYWJlbCIsIl9hZGRfdXNlcl9pbnB1dCIsIlVwZGF0ZVVzZXIiLCJtZXNzYWdlIiwidXNlcklkIiwicGVybWlzc2lvbnMiLCJpbml0aWFsVmFsdWVzIiwicmVkaXJlY3QiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsInVwZGF0ZUZpbmlzaGVkIiwiaXNBY3RpdmF0ZSIsInVzZVN0YXRlIiwidmlld1VzZXJzIiwic2V0Vmlld1VzZXJzIiwiY3JlYXRlVXNlciIsInNldENyZWF0ZVVzZXIiLCJ1cGRhdGVVc2VyIiwic2V0VXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJzZXREZWxldGVVc2VyIiwidmlld0dyb3VwcyIsInNldFZpZXdHcm91cHMiLCJjcmVhdGVHcm91cCIsInNldENyZWF0ZUdyb3VwIiwidXBkYXRlR3JvdXAiLCJzZXRVcGRhdGVHcm91cCIsImRlbGV0ZUdyb3VwIiwic2V0RGVsZXRlR3JvdXAiLCJpc0FkbWluIiwic2V0SXNBZG1pbiIsInVzZUVmZmVjdCIsIl9hZGRVc2VyX2NvbnRhaW5lciIsIl9ncmlkX2NvbnRhaW5lciIsInVzZXJuYW1lIiwiZW1haWwiLCJfZ3JpZF9zZWNvbmRfaXRlbSIsIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtIiwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW0iLCJfZ3JpZF90aGlyZF9pdGVtIiwiX2NhbmNlbF9ib3R0b24iLCJfYW5jaG9yX2NhbmNlbF9ib3R0b24iLCJfc3VibWl0X2JvdHRvbiIsIm9iamVjdCIsIm1hcFN0YXRlVXBkYXRlVXNlclRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXBkYXRlVXNlclJlZHVjZXIiLCJpZCIsIm1hdGNoIiwicGFyYW1zIiwibG9jYXRpb24iLCJwZXJtaXNzaW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVXBkYXRlVXNlclRvUHJvcHMiLCJkaXNwYXRjaCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwicmVkdXhGb3JtIiwiZm9ybSIsInZhbHVlcyIsInN0YXJ0VXBkYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQThILEVBQUUsUUFBUyxHQUFHLDBDQUEwQztBQUNwTjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0MsT0FBRDtBQUFRQyxnQkFBUjtBQUF3QkMsUUFBeEI7QUFBZ0NDO0FBQWhDLENBQUQsS0FDbkIsdUVBQ0U7QUFBSSxXQUFTLEVBQUVDLGlGQUFZLENBQUNDO0FB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Q1ZDLE1BQUksRUFBRSxZQURJO0FBRVZwRCxVQUFRLEVBQUd3QyxFQUFELElBQVEsQ0FBQ2EsTUFBRCxFQUFTTCxRQUFULEtBQXNCQSxRQUFRLENBQUNNLDJFQUFlLENBQUNkLEVBQUQsRUFBS2EsTUFBTCxDQUFoQjtBQUZ0QyxDQUFELENBQVQsQ0FHQzNELG1EQUhELENBSHdCLENBQUQsQzs7QUFBVjs7Ozs7Ozs7OzswQkFyQlQwQyx5QjswQkFpQkFXLDRCIiwiZmlsZSI6InVwZGF0ZVVzZXJDb250YWluZXIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIl9hZGRVc2VyX2NvbnRhaW5lclwiOlwia183d3lpMzZnSm4xQ3I5QWxzN2plXCIsXCJfZ3JpZF9jb250YWluZXJcIjpcIl8xMTZzWm5ZaVBtQXhmT0lTRXhHYnJqXCIsXCJfZ3JpZF9zZWNvbmRfaXRlbVwiOlwiXzJiNzB5djJpWDBFS3RBNmlvRjk2enZcIixcIl9ncmlkX3RoaXJkX2l0ZW1cIjpcIl8zM2xuQnA0RUZZR2JzUVdpdzlTMlU5XCIsXCJfY2FuY2VsX2JvdHRvblwiOlwiXzFiZ1hDTzI4ajBOekxPS0FBcEhHZjJcIixcIl9hbmNob3JfY2FuY2VsX2JvdHRvblwiOlwiVTc2a2pmRkRWSHN4Y0FfVzRxZEd4XCIsXCJfc3VibWl0X2JvdHRvblwiOlwiXzIzUDg4eTRNblFDV3ZkV0FMZE1kYTZcIixcIl9yb3dfXCI6XCJfMi1xRWJaQlFMczFWLU5mYXkybmU4bVwiLFwiX2FkZF91c2VyX2xhYmVsXCI6XCJfTVJTYy0xUTdQWU9uY21iSTByVGVcIixcIl9hZGRfdXNlcl9pbnB1dFwiOlwiXzN3SkJyaHVLZ0ZkZm9VOWJNTWVIeVZcIixcIl9sYWJlbF9jaGVja1wiOlwiXzF5QkdVTVpIZFlQMFRINVhQbFV0SjJcIixcIl9zbGlkZXJcIjpcIl80OGdud2V4QlRkaXpOTnJybXBCWVhcIixcIl9yb3VuZFwiOlwiXzI5Q1lUNkRqV0hMLWlOR2pxQjdYemVcIixcIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtXCI6XCJfMS10ZTJ1ekQ0NEFuSVg3NU9menJLV1wiLFwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW1cIjpcIl8xYjIxTlR1NjJ6ZDF0bHBqUk9UY3hVXCIsXCJfdGRfbGFiZWxfc3dpdGNoX3RvZ2dsZVwiOlwiXzJrRGItS1JESFE4NjhfTG5NbWhJTmJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODMxNzUwMTA2M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hZWtyeXovV29ya3NwYWNlL3N5c3RlbS1hZG1pbmlzdHJhdGlvbi9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGFkZFVzZXJTdHlsZSBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hZGRVc2VyLmNzcyc7XG5cbmNvbnN0IFN3aXRjaFRvZ2dsZSA9ICh7bGFiZWwsIHBlcm1pc3Npb25OYW1lLCBzdGF0dXMsIHNldElzQWN0aXZhdGUgfSkgPT4gKFxuICA8dHI+XG4gICAgPHRkIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl90ZF9sYWJlbF9zd2l0Y2hfdG9nZ2xlfT48bGFiZWw+e2xhYmVsfTwvbGFiZWw+PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3RkX3N3aXRjaF90b2dnbGV9PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9sYWJlbF9jaGVja30gaHRtbEZvcj17cGVybWlzc2lvbk5hbWV9PlxuICAgICAgICB7KHN0YXR1cyAmJiBzZXRJc0FjdGl2YXRlKSA/XG4gICAgICAgICAgPEZpZWxkIG5hbWU9e3Blcm1pc3Npb25OYW1lfSBpZD17cGVybWlzc2lvbk5hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c3RhdHVzfSBvbkNoYW5nZT17ZSA9PiBzZXRJc0FjdGl2YXRlKGUudGFyZ2V0LmNoZWNrZWQpfS8+IDogXG4gICAgICAgICAgPEZpZWxkIG5hbWU9e3Blcm1pc3Npb25OYW1lfSBpZD17cGVybWlzc2lvbk5hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2FkZFVzZXJTdHlsZS5fc2xpZGVyfSAke2FkZFVzZXJTdHlsZS5fcm91bmR9YH0+PC9zcGFuPiAgIFxuICAgICAgPC9sYWJlbD5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuU3dpdGNoVG9nZ2xlLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGVybWlzc2lvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhdHVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2V0SXNBY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hUb2dnbGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGFkZFVzZXJTdHlsZSBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hZGRVc2VyLmNzcyc7XG5cbmNvbnN0IFVzZXJJbmZvcm1hdGlvbiA9ICh7bmFtZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCB2YWx1ZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3Jvd199PlxuICAgIDxsYWJlbCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfbGFiZWx9IGh0bWxGb3I9e25hbWV9PntsYWJlbH06IDwvbGFiZWw+XG4gICAge3ZhbHVlID9cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfaW5wdXR9IG5hbWU9e25hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPXt0eXBlfSB2YWx1ZT17dmFsdWV9Lz4gOiBcbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkX3VzZXJfaW5wdXR9IG5hbWU9e25hbWV9IGNvbXBvbmVudD1cImlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPXt0eXBlfS8+XG4gICAgfVxuICA8L2Rpdj5cbik7XG5cblVzZXJJbmZvcm1hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvcm1hdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWRpcmVjdCwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFVzZXJJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvcm1hdGlvbic7XG5pbXBvcnQgU3dpdGNoVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvU3dpdGNoVG9nZ2xlJztcbmltcG9ydCBhZGRVc2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3MnO1xuXG5jb25zdCBVcGRhdGVVc2VyID0gKHsgbWVzc2FnZSwgdXNlcklkLCBwZXJtaXNzaW9ucywgaW5pdGlhbFZhbHVlcywgcmVkaXJlY3QsIG9uU3VibWl0LCBoYW5kbGVTdWJtaXQsIHVwZGF0ZUZpbmlzaGVkIH0pID0+IHtcblxuICBjb25zdCBbaXNBY3RpdmF0ZSwgc2V0SXNBY3RpdmF0ZV0gPSB1c2VTdGF0ZSh7aXNBY3RpdmF0ZTogaW5pdGlhbFZhbHVlcy5pc0FjdGl2YXRlfSk7XG4gIGNvbnN0IFt2aWV3VXNlcnMsIHNldFZpZXdVc2Vyc10gPSB1c2VTdGF0ZSh7dmlld1VzZXJzOiBwZXJtaXNzaW9ucy52aWV3VXNlcnN9KTtcbiAgY29uc3QgW2NyZWF0ZVVzZXIsIHNldENyZWF0ZVVzZXJdID0gdXNlU3RhdGUoe2NyZWF0ZVVzZXI6IHBlcm1pc3Npb25zLmNyZWF0ZVVzZXJ9KTtcbiAgY29uc3QgW3VwZGF0ZVVzZXIsIHNldFVwZGF0ZVVzZXJdID0gdXNlU3RhdGUoe3VwZGF0ZVVzZXI6IHBlcm1pc3Npb25zLnVwZGF0ZVVzZXJ9KTtcbiAgY29uc3QgW2RlbGV0ZVVzZXIsIHNldERlbGV0ZVVzZXJdID0gdXNlU3RhdGUoe2RlbGV0ZVVzZXI6IHBlcm1pc3Npb25zLmRlbGV0ZVVzZXJ9KTtcbiAgY29uc3QgW3ZpZXdHcm91cHMsIHNldFZpZXdHcm91cHNdID0gdXNlU3RhdGUoe3ZpZXdHcm91cHM6IHBlcm1pc3Npb25zLnZpZXdHcm91cHN9KTtcbiAgY29uc3QgW2NyZWF0ZUdyb3VwLCBzZXRDcmVhdGVHcm91cF0gPSB1c2VTdGF0ZSh7Y3JlYXRlR3JvdXA6IHBlcm1pc3Npb25zLmNyZWF0ZUdyb3VwfSk7XG4gIGNvbnN0IFt1cGRhdGVHcm91cCwgc2V0VXBkYXRlR3JvdXBdID0gdXNlU3RhdGUoe3VwZGF0ZUdyb3VwOiBwZXJtaXNzaW9ucy51cGRhdGVHcm91cH0pO1xuICBjb25zdCBbZGVsZXRlR3JvdXAsIHNldERlbGV0ZUdyb3VwXSA9IHVzZVN0YXRlKHtkZWxldGVHcm91cDogcGVybWlzc2lvbnMuZGVsZXRlR3JvdXB9KTtcbiAgY29uc3QgW2lzQWRtaW4sIHNldElzQWRtaW5dID0gdXNlU3RhdGUoe2lzQWRtaW46IHBlcm1pc3Npb25zLmlzQWRtaW59KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1cGRhdGVGaW5pc2hlZCgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9hZGRVc2VyX2NvbnRhaW5lcn0+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fZ3JpZF9jb250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQodXNlcklkKSl9PlxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICA8VXNlckluZm9ybWF0aW9uIFxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5pdGlhbFZhbHVlcy51c2VybmFtZX0gLz5cblxuICAgICAgICAgIDxVc2VySW5mb3JtYXRpb24gXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbml0aWFsVmFsdWVzLmVtYWlsfSAvPlxuXG4gICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgIGxhYmVsPSdBY3RpdmF0ZSBzdGF0dXMnXG4gICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0naXNBY3RpdmF0ZSdcbiAgICAgICAgICAgIHN0YXR1cz17aXNBY3RpdmF0ZS5pc0FjdGl2YXRlfVxuICAgICAgICAgICAgc2V0SXNBY3RpdmF0ZT17c2V0SXNBY3RpdmF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fZ3JpZF9zZWNvbmRfaXRlbX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fcGVybWlzc2lvbnNfdGl0bGVfaXRlbX0+UGVybWlzc2lvbnM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9wZXJtaXNzaW9uc19jaGVja19pdGVtfT5cbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICAgIGxhYmVsPSdWaWV3IHVzZXJzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0ndmlld1VzZXJzJ1xuICAgICAgICAgICAgICBzdGF0dXM9e3ZpZXdVc2Vycy52aWV3VXNlcnN9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldFZpZXdVc2Vyc30gLz5cbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICAgIGxhYmVsPSdBZGQgdXNlcnMnXG4gICAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lPSdjcmVhdGVVc2VyJ1xuICAgICAgICAgICAgICBzdGF0dXM9e2NyZWF0ZVVzZXIuY3JlYXRlVXNlcn1cbiAgICAgICAgICAgICAgc2V0SXNBY3RpdmF0ZT17c2V0Q3JlYXRlVXNlcn0gLz5cbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICAgIGxhYmVsPSdFZGl0IHVzZXJzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0ndXBkYXRlVXNlcidcbiAgICAgICAgICAgICAgc3RhdHVzPXt1cGRhdGVVc2VyLnVwZGF0ZVVzZXJ9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldFVwZGF0ZVVzZXJ9IC8+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nRGVsZXRlIHVzZXJzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0nZGVsZXRlVXNlcidcbiAgICAgICAgICAgICAgc3RhdHVzPXtkZWxldGVVc2VyLmRlbGV0ZVVzZXJ9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldERlbGV0ZVVzZXJ9IC8+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nVmlldyBncm91cHMnXG4gICAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lPSd2aWV3R3JvdXBzJ1xuICAgICAgICAgICAgICBzdGF0dXM9e3ZpZXdHcm91cHMudmlld0dyb3Vwc31cbiAgICAgICAgICAgICAgc2V0SXNBY3RpdmF0ZT17c2V0Vmlld0dyb3Vwc30gLz5cbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICAgIGxhYmVsPSdBZGQgZ3JvdXBzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0nY3JlYXRlR3JvdXAnXG4gICAgICAgICAgICAgIHN0YXR1cz17Y3JlYXRlR3JvdXAuY3JlYXRlR3JvdXB9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldENyZWF0ZUdyb3VwfSAvPlxuICAgICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgICAgbGFiZWw9J0VkaXQgZ3JvdXBzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0ndXBkYXRlR3JvdXAnXG4gICAgICAgICAgICAgIHN0YXR1cz17dXBkYXRlR3JvdXAudXBkYXRlR3JvdXB9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldFVwZGF0ZUdyb3VwfSAvPlxuICAgICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgICAgbGFiZWw9J0RlbGV0ZSBncm91cHMnXG4gICAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lPSdkZWxldGVHcm91cCdcbiAgICAgICAgICAgICAgc3RhdHVzPXtkZWxldGVHcm91cC5kZWxldGVHcm91cH1cbiAgICAgICAgICAgICAgc2V0SXNBY3RpdmF0ZT17c2V0RGVsZXRlR3JvdXB9IC8+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nQWRtaW4nXG4gICAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lPSdpc0FkbWluJ1xuICAgICAgICAgICAgICBzdGF0dXM9e2lzQWRtaW4uaXNBZG1pbn1cbiAgICAgICAgICAgICAgc2V0SXNBY3RpdmF0ZT17c2V0SXNBZG1pbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fZ3JpZF90aGlyZF9pdGVtfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9jYW5jZWxfYm90dG9ufT5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9hbmNob3JfY2FuY2VsX2JvdHRvbn0gdG89e2AvdXNlci8ke3VzZXJJZH1gfSA+Q2FuY2VsPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3N1Ym1pdF9ib3R0b259IHR5cGU9XCJzdWJtaXRcIiA+VXBkYXRlPC9idXR0b24+XG4gICAgXG4gICAgICAgICAge3JlZGlyZWN0ID8gXG4gICAgICAgICAgICA8UmVkaXJlY3QgdG89e2AvdXNlci8ke3VzZXJJZH1gfS8+IDogPGRpdj48L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVXBkYXRlVXNlci5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlZGlyZWN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB1c2VySWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW5pdGlhbFZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGVybWlzc2lvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUZpbmlzaGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVVc2VyOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBzdGFydFVwZGF0ZVVzZXIsIHVwZGF0ZUZpbmlzaGVkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IFVwZGF0ZVVzZXIgZnJvbSAnLi9VcGRhdGVVc2VyJztcblxuY29uc3QgbWFwU3RhdGVVcGRhdGVVc2VyVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlLCByZWRpcmVjdCB9ID0gc3RhdGUudXBkYXRlVXNlclJlZHVjZXI7XG4gIGNvbnN0IHsgaWQgfSA9IG93blByb3BzLm1hdGNoLnBhcmFtcztcbiAgY29uc3QgeyBpbml0aWFsVmFsdWVzIH0gPSBvd25Qcm9wcy5sb2NhdGlvbi5zdGF0ZTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBpbml0aWFsVmFsdWVzLnBlcm1pc3Npb247XG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgY29uc29sZS5sb2coaW5pdGlhbFZhbHVlcyk7XG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIHJlZGlyZWN0OiByZWRpcmVjdCxcbiAgICB1c2VySWQ6IGlkLFxuICAgIGluaXRpYWxWYWx1ZXM6IGluaXRpYWxWYWx1ZXMsXG4gICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25zLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hVcGRhdGVVc2VyVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+ICh7XG4gIHVwZGF0ZUZpbmlzaGVkOiAoKSA9PiBkaXNwYXRjaCh1cGRhdGVGaW5pc2hlZCgpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgbWFwU3RhdGVVcGRhdGVVc2VyVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hVcGRhdGVVc2VyVG9Qcm9wc1xuKShyZWR1eEZvcm0oe1xuICBmb3JtOiAndXBkYXRldXNlcicsXG4gIG9uU3VibWl0OiAoaWQpID0+ICh2YWx1ZXMsIGRpc3BhdGNoKSA9PiBkaXNwYXRjaChzdGFydFVwZGF0ZVVzZXIoaWQsIHZhbHVlcykpXG59KShVcGRhdGVVc2VyKSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==