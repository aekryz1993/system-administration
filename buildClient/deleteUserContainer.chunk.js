(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deleteUserContainer"],{

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
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

  reactHotLoader.register(DeleteUser, "DeleteUser", "/home/aekryz-laptop/Workspace/system-administration/client/user/DeleteUser.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/DeleteUser.js");
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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

  reactHotLoader.register(mapStateDeleteUserToProps, "mapStateDeleteUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/user/deleteUserContainer.js");
  reactHotLoader.register(mapDispatchDeleteUserToProps, "mapDispatchDeleteUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/user/deleteUserContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/deleteUserContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXNlci9EZWxldGVVc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2VyL2RlbGV0ZVVzZXJDb250YWluZXIuanMiXSwibmFtZXMiOlsiRGVsZXRlVXNlciIsInJlZGlyZWN0IiwidXNlcklkIiwic3RhcnREZWxldGVVc2VyIiwiZGVsZXRlRmluaXNoZWQiLCJjYW5jZWwiLCJzZXRDYW5jZWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsIm1hcFN0YXRlRGVsZXRlVXNlclRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiZGVsZXRlVXNlclJlZHVjZXIiLCJpZCIsIm1hdGNoIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoRGVsZXRlVXNlclRvUHJvcHMiLCJkaXNwYXRjaCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUNDLFVBQUQ7QUFBV0MsUUFBWDtBQUFtQkMsaUJBQW5CO0FBQW9DQztBQUFwQyxDQUFELEtBQXlEO0FBRTFFLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsV0FBTyxNQUFNO0FBQ1hKLG9CQUFjO0FBQ2YsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNFLHdFQUNFO0FBQVEsV0FBTyxFQUFFLE1BQU1ELGVBQWUsQ0FBQ0QsTUFBRDtBQUF0QyxXQURGLEVBRUc7QUFBUSxXQUFPLEVBQUUsTUFBTUksU0FBUyxDQUFDLElBQUQ7QUFBaEMsY0FGSCxFQUlHTCxRQUFRLElBQUksMkRBQUMseURBQUQ7QUFBVSxNQUFFLEVBQUM7QUFBYixJQUpmLEVBS0dJLE1BQU0sSUFBSSwyREFBQyx5REFBRDtBQUFVLE1BQUUsRUFBRyxTQUFRSCxNQUFPO0FBQTlCLElBTGIsQ0FERjtBQVNELENBbkJEOztjQUFNRixVOztBQXFCTkEsVUFBVSxDQUFDUyxTQUFYLEdBQXVCO0FBQ3JCUixVQUFRLEVBQUVTLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFESjtBQUVyQlYsUUFBTSxFQUFFUSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRCxVQUZKO0FBR3JCVCxpQkFBZSxFQUFFTyxpREFBUyxDQUFDSSxJQUFWLENBQWVGLFVBSFg7QUFJckJSLGdCQUFjLEVBQUVNLGlEQUFTLENBQUNJLElBQVYsQ0FBZUY7QUFKVixDQUF2QjtpQkFPZVosVTtBQUFBOzs7Ozs7Ozs7OzBCQTVCVEEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk47QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWUseUJBQXlCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCO0FBQ3JELFFBQU07QUFBRWhCO0FBQUYsTUFBZWUsS0FBSyxDQUFDRSxpQkFBM0I7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsUUFBUSxDQUFDRyxLQUFULENBQWVDLE1BQTlCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0EsU0FBTztBQUNMdEIsWUFBUSxFQUFFQSxRQURMO0FBRUxDLFVBQU0sRUFBRWlCO0FBRkgsR0FBUDtBQUlELENBVkQ7O0FBWUEsTUFBTUssNEJBQTRCLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXUixRQUFYLE1BQXlCO0FBQzVEZCxpQkFBZSxFQUFHZ0IsRUFBRCxJQUFRTSxRQUFRLENBQUN0QiwyRUFBZSxDQUFDZ0IsRUFBRCxDQUFoQixDQUQyQjtBQUU1RGYsZ0JBQWMsRUFBRSxNQUFNcUIsUUFBUSxDQUFDckIsMEVBQWMsRUFBZjtBQUY4QixDQUF6QixDQUFyQzs7aUJBS2VzQixtRUFBVSxDQUFDQywyREFBTyxDQUMvQloseUJBRCtCLEVBRS9CUyw0QkFGK0IsQ0FBUCxDQUd4QnhCLG1EQUh3QixDQUFELEM7O0FBQVY7Ozs7Ozs7Ozs7MEJBakJUZSx5QjswQkFZQVMsNEIiLCJmaWxlIjoiZGVsZXRlVXNlckNvbnRhaW5lci5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBEZWxldGVVc2VyID0gKHtyZWRpcmVjdCwgdXNlcklkLCBzdGFydERlbGV0ZVVzZXIsIGRlbGV0ZUZpbmlzaGVkfSkgPT4ge1xuXG4gIGNvbnN0IFtjYW5jZWwsIHNldENhbmNlbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGVsZXRlRmluaXNoZWQoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdGFydERlbGV0ZVVzZXIodXNlcklkKX0+WUVTPC9idXR0b24+XG4gICAgICB7PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDYW5jZWwodHJ1ZSl9PkNBTkNFTDwvYnV0dG9uPn1cblxuICAgICAge3JlZGlyZWN0ICYmIDxSZWRpcmVjdCB0bz0nL3VzZXJzJy8+fVxuICAgICAge2NhbmNlbCAmJiA8UmVkaXJlY3QgdG89e2AvdXNlci8ke3VzZXJJZH1gfS8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRGVsZXRlVXNlci5wcm9wVHlwZXMgPSB7XG4gIHJlZGlyZWN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB1c2VySWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhcnREZWxldGVVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWxldGVGaW5pc2hlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlVXNlcjtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBzdGFydERlbGV0ZVVzZXIsIGRlbGV0ZUZpbmlzaGVkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyJztcbmltcG9ydCBEZWxldGVVc2VyIGZyb20gJy4vRGVsZXRlVXNlcic7XG5cbmNvbnN0IG1hcFN0YXRlRGVsZXRlVXNlclRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVkaXJlY3QgfSA9IHN0YXRlLmRlbGV0ZVVzZXJSZWR1Y2VyO1xuICBjb25zdCB7IGlkIH0gPSBvd25Qcm9wcy5tYXRjaC5wYXJhbXM7XG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgY29uc29sZS5sb2cob3duUHJvcHMpO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3Q6IHJlZGlyZWN0LFxuICAgIHVzZXJJZDogaWQsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaERlbGV0ZVVzZXJUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4gKHtcbiAgc3RhcnREZWxldGVVc2VyOiAoaWQpID0+IGRpc3BhdGNoKHN0YXJ0RGVsZXRlVXNlcihpZCkpLFxuICBkZWxldGVGaW5pc2hlZDogKCkgPT4gZGlzcGF0Y2goZGVsZXRlRmluaXNoZWQoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIG1hcFN0YXRlRGVsZXRlVXNlclRvUHJvcHMsXG4gIG1hcERpc3BhdGNoRGVsZXRlVXNlclRvUHJvcHMsXG4pKERlbGV0ZVVzZXIpKTsiXSwic291cmNlUm9vdCI6IiJ9