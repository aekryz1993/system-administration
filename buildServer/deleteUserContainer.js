exports.ids = ["deleteUserContainer"];
exports.modules = {

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
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
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





const DeleteUser = ({
  redirect,
  userId,
  startDeleteUser,
  deleteFinished
}) => {
  const [cancel, setCancel] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      deleteFinished();
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => startDeleteUser(userId)
  }, "YES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setCancel(true)
  }, "CANCEL"), redirect && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/users"
  }), cancel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: `/user/${userId}`
  }));
};

__signature__(DeleteUser, "useState{[cancel, setCancel](false)}\nuseEffect{}");

DeleteUser.propTypes = {
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  startDeleteUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteFinished: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = DeleteUser;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DeleteUser, "DeleteUser", "/home/aekryz/Workspace/system-administration/client/user/DeleteUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/DeleteUser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/deleteUserContainer.js":
/*!********************************************!*\
  !*** ./client/user/deleteUserContainer.js ***!
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
/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteUser */ "./client/user/DeleteUser.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const mapStateDeleteUserToProps = (state, ownProps) => {
  const {
    redirect
  } = state.deleteUserReducer;
  const {
    id
  } = ownProps.match.params;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    redirect: redirect,
    userId: id
  };
};

const mapDispatchDeleteUserToProps = (dispatch, ownProps) => ({
  startDeleteUser: id => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__["startDeleteUser"])(id)),
  deleteFinished: () => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__["deleteFinished"])())
});

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateDeleteUserToProps, mapDispatchDeleteUserToProps)(_DeleteUser__WEBPACK_IMPORTED_MODULE_3__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateDeleteUserToProps, "mapStateDeleteUserToProps", "/home/aekryz/Workspace/system-administration/client/user/deleteUserContainer.js");
  reactHotLoader.register(mapDispatchDeleteUserToProps, "mapDispatchDeleteUserToProps", "/home/aekryz/Workspace/system-administration/client/user/deleteUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/deleteUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};;
//# sourceMappingURL=deleteUserContainer.js.map