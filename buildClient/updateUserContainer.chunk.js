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

  reactHotLoader.register(UpdateUser, "UpdateUser", "/home/aekryz-laptop/Workspace/system-administration/client/user/UpdateUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/UpdateUser.js");
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

  reactHotLoader.register(mapStateUpdateUserToProps, "mapStateUpdateUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/user/updateUserContainer.js");
  reactHotLoader.register(mapDispatchUpdateUserToProps, "mapDispatchUpdateUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/user/updateUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/updateUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3M/ZGUwYyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Td2l0Y2hUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2VyL1VwZGF0ZVVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3VzZXIvdXBkYXRlVXNlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJTd2l0Y2hUb2dnbGUiLCJsYWJlbCIsInBlcm1pc3Npb25OYW1lIiwic3RhdHVzIiwic2V0SXNBY3RpdmF0ZSIsImFkZFVzZXJTdHlsZSIsIl90ZF9sYWJlbF9zd2l0Y2hfdG9nZ2xlIiwiX3RkX3N3aXRjaF90b2dnbGUiLCJfbGFiZWxfY2hlY2siLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIl9zbGlkZXIiLCJfcm91bmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJVc2VySW5mb3JtYXRpb24iLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJfcm93XyIsIl9hZGRfdXNlcl9sYWJlbCIsIl9hZGRfdXNlcl9pbnB1dCIsIlVwZGF0ZVVzZXIiLCJtZXNzYWdlIiwidXNlcklkIiwicGVybWlzc2lvbnMiLCJpbml0aWFsVmFsdWVzIiwicmVkaXJlY3QiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsInVwZGF0ZUZpbmlzaGVkIiwiaXNBY3RpdmF0ZSIsInVzZVN0YXRlIiwidmlld1VzZXJzIiwic2V0Vmlld1VzZXJzIiwiY3JlYXRlVXNlciIsInNldENyZWF0ZVVzZXIiLCJ1cGRhdGVVc2VyIiwic2V0VXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJzZXREZWxldGVVc2VyIiwidmlld0dyb3VwcyIsInNldFZpZXdHcm91cHMiLCJjcmVhdGVHcm91cCIsInNldENyZWF0ZUdyb3VwIiwidXBkYXRlR3JvdXAiLCJzZXRVcGRhdGVHcm91cCIsImRlbGV0ZUdyb3VwIiwic2V0RGVsZXRlR3JvdXAiLCJpc0FkbWluIiwic2V0SXNBZG1pbiIsInVzZUVmZmVjdCIsIl9hZGRVc2VyX2NvbnRhaW5lciIsIl9ncmlkX2NvbnRhaW5lciIsInVzZXJuYW1lIiwiZW1haWwiLCJfZ3JpZF9zZWNvbmRfaXRlbSIsIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtIiwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW0iLCJfZ3JpZF90aGlyZF9pdGVtIiwiX2NhbmNlbF9ib3R0b24iLCJfYW5jaG9yX2NhbmNlbF9ib3R0b24iLCJfc3VibWl0X2JvdHRvbiIsIm9iamVjdCIsIm1hcFN0YXRlVXBkYXRlVXNlclRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXBkYXRlVXNlclJlZHVjZXIiLCJpZCIsIm1hdGNoIiwicGFyYW1zIiwibG9jYXRpb24iLCJwZXJtaXNzaW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVXBkYXRlVXNlclRvUHJvcHMiLCJkaXNwYXRjaCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwicmVkdXhGb3JtIiwiZm9ybSIsInZhbHVlcyIsInN0YXJ0VXBkYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQXFJLEVBQUUsUUFBUyxHQUFHLDBDQUEwQztBQUMzTjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0MsT0FBRDtBQUFRQyxnQkFBUjtBQUF3QkMsUUFBeEI7QUFBZ0NDO0FBQWhDLENBQUQsS0FDbkIsdUVBQ0U7QUFBSSxXQUFTLEVBQUVDLGlGQUFZLENBQUNDO0FB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Q1ZDLE1BQUksRUFBRSxZQURJO0FBRVZwRCxVQUFRLEVBQUd3QyxFQUFELElBQVEsQ0FBQ2EsTUFBRCxFQUFTTCxRQUFULEtBQXNCQSxRQUFRLENBQUNNLDJFQUFlLENBQUNkLEVBQUQsRUFBS2EsTUFBTCxDQUFoQjtBQUZ0QyxDQUFELENBQVQsQ0FHQzNELG1EQUhELENBSHdCLENBQUQsQzs7QUFBVjs7Ozs7Ozs7OzswQkFyQlQwQyx5QjswQkFpQkFXLDRCIiwiZmlsZSI6InVwZGF0ZVVzZXJDb250YWluZXIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIl9hZGRVc2VyX2NvbnRhaW5lclwiOlwia183d3lpMzZnSm4xQ3I5QWxzN2plXCIsXCJfZ3JpZF9jb250YWluZXJcIjpcIl8xMTZzWm5ZaVBtQXhmT0lTRXhHYnJqXCIsXCJfZ3JpZF9zZWNvbmRfaXRlbVwiOlwiXzJiNzB5djJpWDBFS3RBNmlvRjk2enZcIixcIl9ncmlkX3RoaXJkX2l0ZW1cIjpcIl8zM2xuQnA0RUZZR2JzUVdpdzlTMlU5XCIsXCJfY2FuY2VsX2JvdHRvblwiOlwiXzFiZ1hDTzI4ajBOekxPS0FBcEhHZjJcIixcIl9hbmNob3JfY2FuY2VsX2JvdHRvblwiOlwiVTc2a2pmRkRWSHN4Y0FfVzRxZEd4XCIsXCJfc3VibWl0X2JvdHRvblwiOlwiXzIzUDg4eTRNblFDV3ZkV0FMZE1kYTZcIixcIl9yb3dfXCI6XCJfMi1xRWJaQlFMczFWLU5mYXkybmU4bVwiLFwiX2FkZF91c2VyX2xhYmVsXCI6XCJfTVJTYy0xUTdQWU9uY21iSTByVGVcIixcIl9hZGRfdXNlcl9pbnB1dFwiOlwiXzN3SkJyaHVLZ0ZkZm9VOWJNTWVIeVZcIixcIl9sYWJlbF9jaGVja1wiOlwiXzF5QkdVTVpIZFlQMFRINVhQbFV0SjJcIixcIl9zbGlkZXJcIjpcIl80OGdud2V4QlRkaXpOTnJybXBCWVhcIixcIl9yb3VuZFwiOlwiXzI5Q1lUNkRqV0hMLWlOR2pxQjdYemVcIixcIl9wZXJtaXNzaW9uc190aXRsZV9pdGVtXCI6XCJfMS10ZTJ1ekQ0NEFuSVg3NU9menJLV1wiLFwiX3Blcm1pc3Npb25zX2NoZWNrX2l0ZW1cIjpcIl8xYjIxTlR1NjJ6ZDF0bHBqUk9UY3hVXCIsXCJfdGRfbGFiZWxfc3dpdGNoX3RvZ2dsZVwiOlwiXzJrRGItS1JESFE4NjhfTG5NbWhJTmJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODU1NzI3MDE3MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hZWtyeXotbGFwdG9wL1dvcmtzcGFjZS9zeXN0ZW0tYWRtaW5pc3RyYXRpb24vbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBhZGRVc2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3MnO1xuXG5jb25zdCBTd2l0Y2hUb2dnbGUgPSAoe2xhYmVsLCBwZXJtaXNzaW9uTmFtZSwgc3RhdHVzLCBzZXRJc0FjdGl2YXRlIH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fdGRfbGFiZWxfc3dpdGNoX3RvZ2dsZX0+PGxhYmVsPntsYWJlbH08L2xhYmVsPjwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl90ZF9zd2l0Y2hfdG9nZ2xlfT5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fbGFiZWxfY2hlY2t9IGh0bWxGb3I9e3Blcm1pc3Npb25OYW1lfT5cbiAgICAgICAgeyhzdGF0dXMgJiYgc2V0SXNBY3RpdmF0ZSkgP1xuICAgICAgICAgIDxGaWVsZCBuYW1lPXtwZXJtaXNzaW9uTmFtZX0gaWQ9e3Blcm1pc3Npb25OYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3N0YXR1c30gb25DaGFuZ2U9e2UgPT4gc2V0SXNBY3RpdmF0ZShlLnRhcmdldC5jaGVja2VkKX0vPiA6IFxuICAgICAgICAgIDxGaWVsZCBuYW1lPXtwZXJtaXNzaW9uTmFtZX0gaWQ9e3Blcm1pc3Npb25OYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHthZGRVc2VyU3R5bGUuX3NsaWRlcn0gJHthZGRVc2VyU3R5bGUuX3JvdW5kfWB9Pjwvc3Bhbj4gICBcbiAgICAgIDwvbGFiZWw+XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cblN3aXRjaFRvZ2dsZS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlcm1pc3Npb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXR1czogUHJvcFR5cGVzLmJvb2wsXG4gIHNldElzQWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoVG9nZ2xlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBhZGRVc2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYWRkVXNlci5jc3MnO1xuXG5jb25zdCBVc2VySW5mb3JtYXRpb24gPSAoe25hbWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9yb3dffT5cbiAgICA8bGFiZWwgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FkZF91c2VyX2xhYmVsfSBodG1sRm9yPXtuYW1lfT57bGFiZWx9OiA8L2xhYmVsPlxuICAgIHt2YWx1ZSA/XG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FkZF91c2VyX2lucHV0fSBuYW1lPXtuYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gdHlwZT17dHlwZX0gdmFsdWU9e3ZhbHVlfS8+IDogXG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2FkZF91c2VyX2lucHV0fSBuYW1lPXtuYW1lfSBjb21wb25lbnQ9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gdHlwZT17dHlwZX0vPlxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5Vc2VySW5mb3JtYXRpb24ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mb3JtYXRpb247IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBVc2VySW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mb3JtYXRpb24nO1xuaW1wb3J0IFN3aXRjaFRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL1N3aXRjaFRvZ2dsZSc7XG5pbXBvcnQgYWRkVXNlclN0eWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FkZFVzZXIuY3NzJztcblxuY29uc3QgVXBkYXRlVXNlciA9ICh7IG1lc3NhZ2UsIHVzZXJJZCwgcGVybWlzc2lvbnMsIGluaXRpYWxWYWx1ZXMsIHJlZGlyZWN0LCBvblN1Ym1pdCwgaGFuZGxlU3VibWl0LCB1cGRhdGVGaW5pc2hlZCB9KSA9PiB7XG5cbiAgY29uc3QgW2lzQWN0aXZhdGUsIHNldElzQWN0aXZhdGVdID0gdXNlU3RhdGUoe2lzQWN0aXZhdGU6IGluaXRpYWxWYWx1ZXMuaXNBY3RpdmF0ZX0pO1xuICBjb25zdCBbdmlld1VzZXJzLCBzZXRWaWV3VXNlcnNdID0gdXNlU3RhdGUoe3ZpZXdVc2VyczogcGVybWlzc2lvbnMudmlld1VzZXJzfSk7XG4gIGNvbnN0IFtjcmVhdGVVc2VyLCBzZXRDcmVhdGVVc2VyXSA9IHVzZVN0YXRlKHtjcmVhdGVVc2VyOiBwZXJtaXNzaW9ucy5jcmVhdGVVc2VyfSk7XG4gIGNvbnN0IFt1cGRhdGVVc2VyLCBzZXRVcGRhdGVVc2VyXSA9IHVzZVN0YXRlKHt1cGRhdGVVc2VyOiBwZXJtaXNzaW9ucy51cGRhdGVVc2VyfSk7XG4gIGNvbnN0IFtkZWxldGVVc2VyLCBzZXREZWxldGVVc2VyXSA9IHVzZVN0YXRlKHtkZWxldGVVc2VyOiBwZXJtaXNzaW9ucy5kZWxldGVVc2VyfSk7XG4gIGNvbnN0IFt2aWV3R3JvdXBzLCBzZXRWaWV3R3JvdXBzXSA9IHVzZVN0YXRlKHt2aWV3R3JvdXBzOiBwZXJtaXNzaW9ucy52aWV3R3JvdXBzfSk7XG4gIGNvbnN0IFtjcmVhdGVHcm91cCwgc2V0Q3JlYXRlR3JvdXBdID0gdXNlU3RhdGUoe2NyZWF0ZUdyb3VwOiBwZXJtaXNzaW9ucy5jcmVhdGVHcm91cH0pO1xuICBjb25zdCBbdXBkYXRlR3JvdXAsIHNldFVwZGF0ZUdyb3VwXSA9IHVzZVN0YXRlKHt1cGRhdGVHcm91cDogcGVybWlzc2lvbnMudXBkYXRlR3JvdXB9KTtcbiAgY29uc3QgW2RlbGV0ZUdyb3VwLCBzZXREZWxldGVHcm91cF0gPSB1c2VTdGF0ZSh7ZGVsZXRlR3JvdXA6IHBlcm1pc3Npb25zLmRlbGV0ZUdyb3VwfSk7XG4gIGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKHtpc0FkbWluOiBwZXJtaXNzaW9ucy5pc0FkbWlufSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdXBkYXRlRmluaXNoZWQoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIFxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYWRkVXNlcl9jb250YWluZXJ9PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2dyaWRfY29udGFpbmVyfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KHVzZXJJZCkpfT5cbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbiBcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2luaXRpYWxWYWx1ZXMudXNlcm5hbWV9IC8+XG5cbiAgICAgICAgICA8VXNlckluZm9ybWF0aW9uIFxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5pdGlhbFZhbHVlcy5lbWFpbH0gLz5cblxuICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICBsYWJlbD0nQWN0aXZhdGUgc3RhdHVzJ1xuICAgICAgICAgICAgcGVybWlzc2lvbk5hbWU9J2lzQWN0aXZhdGUnXG4gICAgICAgICAgICBzdGF0dXM9e2lzQWN0aXZhdGUuaXNBY3RpdmF0ZX1cbiAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldElzQWN0aXZhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2dyaWRfc2Vjb25kX2l0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX3Blcm1pc3Npb25zX3RpdGxlX2l0ZW19PlBlcm1pc3Npb25zPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fcGVybWlzc2lvbnNfY2hlY2tfaXRlbX0+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nVmlldyB1c2VycydcbiAgICAgICAgICAgICAgcGVybWlzc2lvbk5hbWU9J3ZpZXdVc2VycydcbiAgICAgICAgICAgICAgc3RhdHVzPXt2aWV3VXNlcnMudmlld1VzZXJzfVxuICAgICAgICAgICAgICBzZXRJc0FjdGl2YXRlPXtzZXRWaWV3VXNlcnN9IC8+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nQWRkIHVzZXJzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0nY3JlYXRlVXNlcidcbiAgICAgICAgICAgICAgc3RhdHVzPXtjcmVhdGVVc2VyLmNyZWF0ZVVzZXJ9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldENyZWF0ZVVzZXJ9IC8+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nRWRpdCB1c2VycydcbiAgICAgICAgICAgICAgcGVybWlzc2lvbk5hbWU9J3VwZGF0ZVVzZXInXG4gICAgICAgICAgICAgIHN0YXR1cz17dXBkYXRlVXNlci51cGRhdGVVc2VyfVxuICAgICAgICAgICAgICBzZXRJc0FjdGl2YXRlPXtzZXRVcGRhdGVVc2VyfSAvPlxuICAgICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgICAgbGFiZWw9J0RlbGV0ZSB1c2VycydcbiAgICAgICAgICAgICAgcGVybWlzc2lvbk5hbWU9J2RlbGV0ZVVzZXInXG4gICAgICAgICAgICAgIHN0YXR1cz17ZGVsZXRlVXNlci5kZWxldGVVc2VyfVxuICAgICAgICAgICAgICBzZXRJc0FjdGl2YXRlPXtzZXREZWxldGVVc2VyfSAvPlxuICAgICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgICAgbGFiZWw9J1ZpZXcgZ3JvdXBzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0ndmlld0dyb3VwcydcbiAgICAgICAgICAgICAgc3RhdHVzPXt2aWV3R3JvdXBzLnZpZXdHcm91cHN9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldFZpZXdHcm91cHN9IC8+XG4gICAgICAgICAgICA8U3dpdGNoVG9nZ2xlIFxuICAgICAgICAgICAgICBsYWJlbD0nQWRkIGdyb3VwcydcbiAgICAgICAgICAgICAgcGVybWlzc2lvbk5hbWU9J2NyZWF0ZUdyb3VwJ1xuICAgICAgICAgICAgICBzdGF0dXM9e2NyZWF0ZUdyb3VwLmNyZWF0ZUdyb3VwfVxuICAgICAgICAgICAgICBzZXRJc0FjdGl2YXRlPXtzZXRDcmVhdGVHcm91cH0gLz5cbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICAgIGxhYmVsPSdFZGl0IGdyb3VwcydcbiAgICAgICAgICAgICAgcGVybWlzc2lvbk5hbWU9J3VwZGF0ZUdyb3VwJ1xuICAgICAgICAgICAgICBzdGF0dXM9e3VwZGF0ZUdyb3VwLnVwZGF0ZUdyb3VwfVxuICAgICAgICAgICAgICBzZXRJc0FjdGl2YXRlPXtzZXRVcGRhdGVHcm91cH0gLz5cbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgXG4gICAgICAgICAgICAgIGxhYmVsPSdEZWxldGUgZ3JvdXBzJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0nZGVsZXRlR3JvdXAnXG4gICAgICAgICAgICAgIHN0YXR1cz17ZGVsZXRlR3JvdXAuZGVsZXRlR3JvdXB9XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldERlbGV0ZUdyb3VwfSAvPlxuICAgICAgICAgICAgPFN3aXRjaFRvZ2dsZSBcbiAgICAgICAgICAgICAgbGFiZWw9J0FkbWluJ1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uTmFtZT0naXNBZG1pbidcbiAgICAgICAgICAgICAgc3RhdHVzPXtpc0FkbWluLmlzQWRtaW59XG4gICAgICAgICAgICAgIHNldElzQWN0aXZhdGU9e3NldElzQWRtaW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRVc2VyU3R5bGUuX2dyaWRfdGhpcmRfaXRlbX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fY2FuY2VsX2JvdHRvbn0+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2FkZFVzZXJTdHlsZS5fYW5jaG9yX2NhbmNlbF9ib3R0b259IHRvPXtgL3VzZXIvJHt1c2VySWR9YH0gPkNhbmNlbDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWRkVXNlclN0eWxlLl9zdWJtaXRfYm90dG9ufSB0eXBlPVwic3VibWl0XCIgPlVwZGF0ZTwvYnV0dG9uPlxuICAgIFxuICAgICAgICAgIHtyZWRpcmVjdCA/IFxuICAgICAgICAgICAgPFJlZGlyZWN0IHRvPXtgL3VzZXIvJHt1c2VySWR9YH0vPiA6IDxkaXY+PC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblVwZGF0ZVVzZXIucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZWRpcmVjdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdXNlcklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHBlcm1pc3Npb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVGaW5pc2hlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlVXNlcjsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgc3RhcnRVcGRhdGVVc2VyLCB1cGRhdGVGaW5pc2hlZCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBVcGRhdGVVc2VyIGZyb20gJy4vVXBkYXRlVXNlcic7XG5cbmNvbnN0IG1hcFN0YXRlVXBkYXRlVXNlclRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgcmVkaXJlY3QgfSA9IHN0YXRlLnVwZGF0ZVVzZXJSZWR1Y2VyO1xuICBjb25zdCB7IGlkIH0gPSBvd25Qcm9wcy5tYXRjaC5wYXJhbXM7XG4gIGNvbnN0IHsgaW5pdGlhbFZhbHVlcyB9ID0gb3duUHJvcHMubG9jYXRpb24uc3RhdGU7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gaW5pdGlhbFZhbHVlcy5wZXJtaXNzaW9uO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIGNvbnNvbGUubG9nKGluaXRpYWxWYWx1ZXMpO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICByZWRpcmVjdDogcmVkaXJlY3QsXG4gICAgdXNlcklkOiBpZCxcbiAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLFxuICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9ucyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVXBkYXRlVXNlclRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiAoe1xuICB1cGRhdGVGaW5pc2hlZDogKCkgPT4gZGlzcGF0Y2godXBkYXRlRmluaXNoZWQoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIG1hcFN0YXRlVXBkYXRlVXNlclRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVXBkYXRlVXNlclRvUHJvcHNcbikocmVkdXhGb3JtKHtcbiAgZm9ybTogJ3VwZGF0ZXVzZXInLFxuICBvblN1Ym1pdDogKGlkKSA9PiAodmFsdWVzLCBkaXNwYXRjaCkgPT4gZGlzcGF0Y2goc3RhcnRVcGRhdGVVc2VyKGlkLCB2YWx1ZXMpKVxufSkoVXBkYXRlVXNlcikpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=