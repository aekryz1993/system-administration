(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usersContainer"],{

/***/ "./client/assets/stylesheets/components/users.css":
/*!********************************************************!*\
  !*** ./client/assets/stylesheets/components/users.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"_users_container":"_2rLIdOORE_-Fbc14vBTdAS","_left_column_item":"_1OcdXAqjqWjq807NpydBcO","_title_users_item":"_2pHFH217eR4Y9ry1gSGnQm","_users_table":"_17ia5yz76IIFbyTqYWimeC","_users_th":"_3Y9WRX99aF5GGt37kYP-6E","_users_th_active":"_2gSWrOk18O0fuBPdO4G_OX","_users_tbody":"_1GkwM1e3ktL7p7rOGB06uh","users_td":"_3q8xwziHi0iRBxUCI_rqMD","users_td_active":"_2f_VlyYNGjBQqX5tmXAr2J","_users_anchor_username":"_3uThmwh0REk-Tb7kobZqJ0","_users_style_email":"_2iANdQVSzsQo7-Gdok8Iq0","_right_column_item":"_14aqn1p0cahLFm_xs3xfHZ","_users_add":"QSqlLNjesuH4QED6TD0gD","_users_anchor_add":"_3AF1kZLxdkm3Xe5JniEMJc"};
    if(true) {
      // 1568317501057
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./client/users/Users.js":
/*!*******************************!*\
  !*** ./client/users/Users.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/stylesheets/components/users.css */ "./client/assets/stylesheets/components/users.css");
/* harmony import */ var _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const Users = ({
  users,
  fetchUsers,
  addUserPermission,
  pathname
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUsers();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._left_column_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._title_users_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Select user")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_table
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_th
  }, "username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_th
  }, "email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_th_active
  }, "active"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_tbody
  }, users.map((user, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a.users_td
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_anchor_username,
      to: `/user/${user.id}`
    }, user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a.users_td
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_style_email
    }, user.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a.users_td_active
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_style_active
    }, user.isActivate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
      size: "xs",
      color: "#1B5E20"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
      size: "xs",
      color: "#d50000"
    }))));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._right_column_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_add
  }, addUserPermission && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: _assets_stylesheets_components_users_css__WEBPACK_IMPORTED_MODULE_5___default.a._users_anchor_add,
    to: {
      pathname: '/add',
      state: {
        from: pathname
      }
    }
  }, "ADD USER ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"]
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
};

__signature__(Users, "useEffect{}");

Users.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  addUserPermission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = Users;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Users, "Users", "/home/aekryz/Workspace/system-administration/client/users/Users.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/users/Users.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/users/usersContainer.js":
/*!****************************************!*\
  !*** ./client/users/usersContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users */ "./client/users/Users.js");
/* harmony import */ var _store_actions_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/users */ "./client/store/actions/users.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const mapStateUsersToProps = (state, ownProps) => {
  const {
    users,
    addUserPermission
  } = state.usersReducer;
  const {
    pathname
  } = ownProps.location;
  console.log('************************');
  console.log(users);
  console.log('************************');
  return {
    users: users,
    pathname: pathname,
    addUserPermission: addUserPermission
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUsers: () => dispatch(Object(_store_actions_users__WEBPACK_IMPORTED_MODULE_3__["startFetchUsers"])())
});

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateUsersToProps, mapDispatchToProps)(_Users__WEBPACK_IMPORTED_MODULE_2__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateUsersToProps, "mapStateUsersToProps", "/home/aekryz/Workspace/system-administration/client/users/usersContainer.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/aekryz/Workspace/system-administration/client/users/usersContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/users/usersContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlcnMuY3NzPzNlODEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3VzZXJzL1VzZXJzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2Vycy91c2Vyc0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInVzZXJzIiwiZmV0Y2hVc2VycyIsImFkZFVzZXJQZXJtaXNzaW9uIiwicGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJ1c2Vyc1N0eWxlIiwiX3VzZXJzX2NvbnRhaW5lciIsIl9sZWZ0X2NvbHVtbl9pdGVtIiwiX3RpdGxlX3VzZXJzX2l0ZW0iLCJfdXNlcnNfdGFibGUiLCJfdXNlcnNfdGgiLCJfdXNlcnNfdGhfYWN0aXZlIiwiX3VzZXJzX3Rib2R5IiwibWFwIiwidXNlciIsImluZGV4IiwidXNlcnNfdGQiLCJfdXNlcnNfYW5jaG9yX3VzZXJuYW1lIiwiaWQiLCJ1c2VybmFtZSIsIl91c2Vyc19zdHlsZV9lbWFpbCIsImVtYWlsIiwidXNlcnNfdGRfYWN0aXZlIiwiX3VzZXJzX3N0eWxlX2FjdGl2ZSIsImlzQWN0aXZhdGUiLCJmYUNoZWNrQ2lyY2xlIiwiZmFUaW1lc0NpcmNsZSIsIl9yaWdodF9jb2x1bW5faXRlbSIsIl91c2Vyc19hZGQiLCJfdXNlcnNfYW5jaG9yX2FkZCIsInN0YXRlIiwiZnJvbSIsImZhUGx1cyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibWFwU3RhdGVVc2Vyc1RvUHJvcHMiLCJvd25Qcm9wcyIsInVzZXJzUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3RhcnRGZXRjaFVzZXJzIiwid2l0aFJvdXRlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDRLQUE4SCxFQUFFLFFBQVMsR0FBRywwQ0FBMEM7QUFDcE47O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQ2JDLE9BRGE7QUFFYkMsWUFGYTtBQUdiQyxtQkFIYTtBQUliQztBQUphLENBQUQsS0FLUjtBQUVKQyx5REFBUyxDQUFDLE1BQU07QUFDZEgsY0FBVTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFSSwrRUFBVSxDQUFDQztBQUEzQixLQUNFO0FBQUssYUFBUyxFQUFFRCwrRUFBVSxDQUFDRTtBQUEzQixLQUNFO0FBQUssYUFBUyxFQUFFRiwrRUFBVSxDQUFDRztBQUEzQixLQUE4Qyx1RkFBOUMsQ0FERixFQUVFO0FBQU8sYUFBUyxFQUFFSCwrRUFBVSxDQUFDSTtBQUE3QixLQUNFLDBFQUNFLHVFQUNFO0FBQUksYUFBUyxFQUFFSiwrRUFBVSxDQUFDSztBQUExQixnQkFERixFQUVFO0FBQUksYUFBUyxFQUFFTCwrRUFBVSxDQUFDSztBQUExQixhQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUVMLCtFQUFVLENBQUNNO0FBQTFCLGNBSEYsQ0FERixDQURGLEVBUUU7QUFBTyxhQUFTLEVBQUVOLCtFQUFVLENBQUNPO0FBQTdCLEtBRUlaLEtBQUssQ0FBQ2EsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUN6QixXQUNFO0FBQUksU0FBRyxFQUFFQTtBQUFULE9BQ0U7QUFBSSxlQUFTLEVBQUVWLCtFQUFVLENBQUNXO0FBQTFCLE9BQW9DLDJEQUFDLHFEQUFEO0FBQU0sZUFBUyxFQUFFWCwrRUFBVSxDQUFDWSxzQkFBNUI7QUFBb0QsUUFBRSxFQUFHLFNBQVFILElBQUksQ0FBQ0ksRUFBRztBQUF6RSxPQUE2RUosSUFBSSxDQUFDSyxRQUFsRixDQUFwQyxDQURGLEVBRUU7QUFBSSxlQUFTLEVBQUVkLCtFQUFVLENBQUNXO0FBQTFCLE9BQW9DO0FBQUssZUFBUyxFQUFFWCwrRUFBVSxDQUFDZTtBQUEzQixPQUFnRE4sSUFBSSxDQUFDTyxLQUFyRCxDQUFwQyxDQUZGLEVBR0U7QUFBSSxlQUFTLEVBQUVoQiwrRUFBVSxDQUFDaUI7QUFBMUIsT0FBMkM7QUFBSyxlQUFTLEVBQUVqQiwrRUFBVSxDQUFDa0I7QUFBM0IsT0FBaURULElBQUksQ0FBQ1UsVUFBTCxHQUFrQiwyREFBQyw4RUFBRDtBQUFpQixVQUFJLEVBQUVDLCtFQUF2QjtBQUFzQyxVQUFJLEVBQUMsSUFBM0M7QUFBZ0QsV0FBSyxFQUFDO0FBQXRELE1BQWxCLEdBQXVGLDJEQUFDLDhFQUFEO0FBQWlCLFVBQUksRUFBRUMsK0VBQXZCO0FBQXNDLFVBQUksRUFBQyxJQUEzQztBQUFnRCxXQUFLLEVBQUM7QUFBdEQsTUFBeEksQ0FBM0MsQ0FIRixDQURGO0FBT0QsR0FSRCxDQUZKLENBUkYsQ0FGRixDQURGLEVBMkJFO0FBQUssYUFBUyxFQUFFckIsK0VBQVUsQ0FBQ3NCO0FBQTNCLEtBQ0U7QUFBSyxhQUFTLEVBQUV0QiwrRUFBVSxDQUFDdUI7QUFBM0IsS0FDRzFCLGlCQUFpQixJQUFJLDJEQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFFRywrRUFBVSxDQUFDd0IsaUJBQTVCO0FBQStDLE1BQUUsRUFBRTtBQUFDMUIsY0FBUSxFQUFDLE1BQVY7QUFBa0IyQixXQUFLLEVBQUU7QUFBQ0MsWUFBSSxFQUFFNUI7QUFBUDtBQUF6QjtBQUFuRCxrQkFBd0csMkRBQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFNkIsd0VBQU1BO0FBQTdCLElBQXhHLENBRHhCLENBREYsRUFHUSxzRUFIUixDQTNCRixDQURGO0FBc0NELENBakREOztjQUFNakMsSzs7QUFtRE5BLEtBQUssQ0FBQ2tDLFNBQU4sR0FBa0I7QUFDaEJqQyxPQUFLLEVBQUVrQyxpREFBUyxDQUFDQyxLQUREO0FBRWhCaEMsVUFBUSxFQUFFK0IsaURBQVMsQ0FBQ0UsTUFGSjtBQUdoQmxDLG1CQUFpQixFQUFFZ0MsaURBQVMsQ0FBQ0csSUFIYjtBQUloQnBDLFlBQVUsRUFBRWlDLGlEQUFTLENBQUNJLElBQVYsQ0FBZUM7QUFKWCxDQUFsQjtpQkFPZXhDLEs7QUFBQTs7Ozs7Ozs7OzswQkExRFRBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU15QyxvQkFBb0IsR0FBRyxDQUFDVixLQUFELEVBQVFXLFFBQVIsS0FBcUI7QUFDaEQsUUFBTTtBQUFFekMsU0FBRjtBQUFTRTtBQUFULE1BQStCNEIsS0FBSyxDQUFDWSxZQUEzQztBQUNBLFFBQU07QUFBRXZDO0FBQUYsTUFBZXNDLFFBQVEsQ0FBQ0UsUUFBOUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVk3QyxLQUFaO0FBQ0E0QyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFNBQU87QUFDTDdDLFNBQUssRUFBRUEsS0FERjtBQUVMRyxZQUFRLEVBQUVBLFFBRkw7QUFHTEQscUJBQWlCLEVBQUVBO0FBSGQsR0FBUDtBQUtELENBWEQ7O0FBYUEsTUFBTTRDLGtCQUFrQixHQUFHLENBQUNDLFFBQUQsRUFBV04sUUFBWCxNQUF5QjtBQUNsRHhDLFlBQVUsRUFBRSxNQUFNOEMsUUFBUSxDQUFDQyw0RUFBZSxFQUFoQjtBQUR3QixDQUF6QixDQUEzQjs7aUJBSWVDLG1FQUFVLENBQUNDLDJEQUFPLENBQy9CVixvQkFEK0IsRUFFL0JNLGtCQUYrQixDQUFQLENBR3hCL0MsOENBSHdCLENBQUQsQzs7QUFBVjs7Ozs7Ozs7OzswQkFqQlR5QyxvQjswQkFhQU0sa0IiLCJmaWxlIjoidXNlcnNDb250YWluZXIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIl91c2Vyc19jb250YWluZXJcIjpcIl8yckxJZE9PUkVfLUZiYzE0dkJUZEFTXCIsXCJfbGVmdF9jb2x1bW5faXRlbVwiOlwiXzFPY2RYQXFqcVdqcTgwN05weWRCY09cIixcIl90aXRsZV91c2Vyc19pdGVtXCI6XCJfMnBIRkgyMTdlUjRZOXJ5MWdTR25RbVwiLFwiX3VzZXJzX3RhYmxlXCI6XCJfMTdpYTV5ejc2SUlGYnlUcVlXaW1lQ1wiLFwiX3VzZXJzX3RoXCI6XCJfM1k5V1JYOTlhRjVHR3QzN2tZUC02RVwiLFwiX3VzZXJzX3RoX2FjdGl2ZVwiOlwiXzJnU1dyT2sxOE8wZnVCUGRPNEdfT1hcIixcIl91c2Vyc190Ym9keVwiOlwiXzFHa3dNMWUza3RMN3A3ck9HQjA2dWhcIixcInVzZXJzX3RkXCI6XCJfM3E4eHd6aUhpMGlSQnhVQ0lfcnFNRFwiLFwidXNlcnNfdGRfYWN0aXZlXCI6XCJfMmZfVmx5WU5HakJRcVg1dG1YQXIySlwiLFwiX3VzZXJzX2FuY2hvcl91c2VybmFtZVwiOlwiXzN1VGhtd2gwUkVrLVRiN2tvYlpxSjBcIixcIl91c2Vyc19zdHlsZV9lbWFpbFwiOlwiXzJpQU5kUVZTenNRbzctR2RvazhJcTBcIixcIl9yaWdodF9jb2x1bW5faXRlbVwiOlwiXzE0YXFuMXAwY2FoTEZtX3hzM3hmSFpcIixcIl91c2Vyc19hZGRcIjpcIlFTcWxMTmplc3VINFFFRDZURDBnRFwiLFwiX3VzZXJzX2FuY2hvcl9hZGRcIjpcIl8zQUYxa1pMeGRrbTNYZTVKbmlFTUpjXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjgzMTc1MDEwNTdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvYWVrcnl6L1dvcmtzcGFjZS9zeXN0ZW0tYWRtaW5pc3RyYXRpb24vbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBsdXMsIGZhQ2hlY2tDaXJjbGUsIGZhVGltZXNDaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHVzZXJzU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlcnMuY3NzJztcblxuY29uc3QgVXNlcnMgPSAoe1xuICB1c2VycyxcbiAgZmV0Y2hVc2VycyxcbiAgYWRkVXNlclBlcm1pc3Npb24sXG4gIHBhdGhuYW1lLFxufSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VycygpO1xuICB9LCBbXSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc19jb250YWluZXJ9PiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl9sZWZ0X2NvbHVtbl9pdGVtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3RpdGxlX3VzZXJzX2l0ZW19PjxzcGFuPlNlbGVjdCB1c2VyPC9zcGFuPjwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc190YWJsZX0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc190aH0+dXNlcm5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc190aH0+ZW1haWw8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc190aF9hY3RpdmV9PmFjdGl2ZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfdGJvZHl9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlcnNTdHlsZS51c2Vyc190ZH0+PExpbmsgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc19hbmNob3JfdXNlcm5hbWV9IHRvPXtgL3VzZXIvJHt1c2VyLmlkfWB9Pnt1c2VyLnVzZXJuYW1lfTwvTGluaz48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLnVzZXJzX3RkfT48ZGl2IGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfc3R5bGVfZW1haWx9Pnt1c2VyLmVtYWlsfTwvZGl2PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJzU3R5bGUudXNlcnNfdGRfYWN0aXZlfT48ZGl2IGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfc3R5bGVfYWN0aXZlfT57dXNlci5pc0FjdGl2YXRlID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSBzaXplPVwieHNcIiBjb2xvcj1cIiMxQjVFMjBcIiAvPiA6IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gc2l6ZT1cInhzXCIgY29sb3I9XCIjZDUwMDAwXCIgLz59PC9kaXY+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTsgXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3JpZ2h0X2NvbHVtbl9pdGVtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3VzZXJzX2FkZH0+XG4gICAgICAgICAge2FkZFVzZXJQZXJtaXNzaW9uICYmIDxMaW5rIGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfYW5jaG9yX2FkZH0gdG89e3twYXRobmFtZTonL2FkZCcsIHN0YXRlOiB7ZnJvbTogcGF0aG5hbWV9fX0+QUREIFVTRVIgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IC8+PC9MaW5rPn1cbiAgICAgICAgPC9kaXY+PGJyLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyAvKlxuICAgICAgICAgIGxvY2F0aW9uLnN0YXRlLm1lc3NhZ2UgPyA8aDQ+e2xvY2F0aW9uLnN0YXRlLm1lc3NhZ2V9PC9oND4gOiAnJ1xuICAgICAgICAqL31cbiAgICA8L2Rpdj4gXG4gICk7XG59O1xuXG5Vc2Vycy5wcm9wVHlwZXMgPSB7XG4gIHVzZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhZGRVc2VyUGVybWlzc2lvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGZldGNoVXNlcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9Vc2Vycyc7XG5pbXBvcnQgeyBzdGFydEZldGNoVXNlcnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXJzJztcblxuY29uc3QgbWFwU3RhdGVVc2Vyc1RvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlcnMsIGFkZFVzZXJQZXJtaXNzaW9uIH0gPSBzdGF0ZS51c2Vyc1JlZHVjZXI7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IG93blByb3BzLmxvY2F0aW9uO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICByZXR1cm4ge1xuICAgIHVzZXJzOiB1c2VycyxcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgYWRkVXNlclBlcm1pc3Npb246IGFkZFVzZXJQZXJtaXNzaW9uLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4gKHtcbiAgZmV0Y2hVc2VyczogKCkgPT4gZGlzcGF0Y2goc3RhcnRGZXRjaFVzZXJzKCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBtYXBTdGF0ZVVzZXJzVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShVc2VycykpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9