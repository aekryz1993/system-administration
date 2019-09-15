exports.ids = ["updateUserContainer"];
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/user */ "./client/store/actions/user.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);
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

};;
//# sourceMappingURL=updateUserContainer.js.map