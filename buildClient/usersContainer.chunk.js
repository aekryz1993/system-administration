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
      // 1568561520620
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

  reactHotLoader.register(Users, "Users", "/home/aekryz-laptop/Workspace/system-administration/client/users/Users.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/users/Users.js");
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

  reactHotLoader.register(mapStateUsersToProps, "mapStateUsersToProps", "/home/aekryz-laptop/Workspace/system-administration/client/users/usersContainer.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/aekryz-laptop/Workspace/system-administration/client/users/usersContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/users/usersContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlcnMuY3NzPzNlODEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3VzZXJzL1VzZXJzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2Vycy91c2Vyc0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInVzZXJzIiwiZmV0Y2hVc2VycyIsImFkZFVzZXJQZXJtaXNzaW9uIiwicGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJ1c2Vyc1N0eWxlIiwiX3VzZXJzX2NvbnRhaW5lciIsIl9sZWZ0X2NvbHVtbl9pdGVtIiwiX3RpdGxlX3VzZXJzX2l0ZW0iLCJfdXNlcnNfdGFibGUiLCJfdXNlcnNfdGgiLCJfdXNlcnNfdGhfYWN0aXZlIiwiX3VzZXJzX3Rib2R5IiwibWFwIiwidXNlciIsImluZGV4IiwidXNlcnNfdGQiLCJfdXNlcnNfYW5jaG9yX3VzZXJuYW1lIiwiaWQiLCJ1c2VybmFtZSIsIl91c2Vyc19zdHlsZV9lbWFpbCIsImVtYWlsIiwidXNlcnNfdGRfYWN0aXZlIiwiX3VzZXJzX3N0eWxlX2FjdGl2ZSIsImlzQWN0aXZhdGUiLCJmYUNoZWNrQ2lyY2xlIiwiZmFUaW1lc0NpcmNsZSIsIl9yaWdodF9jb2x1bW5faXRlbSIsIl91c2Vyc19hZGQiLCJfdXNlcnNfYW5jaG9yX2FkZCIsInN0YXRlIiwiZnJvbSIsImZhUGx1cyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibWFwU3RhdGVVc2Vyc1RvUHJvcHMiLCJvd25Qcm9wcyIsInVzZXJzUmVkdWNlciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3RhcnRGZXRjaFVzZXJzIiwid2l0aFJvdXRlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FB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RWhCaEMsVUFBUSxFQUFFK0IsaURBQVMsQ0FBQ0UsTUFGSjtBQUdoQmxDLG1CQUFpQixFQUFFZ0MsaURBQVMsQ0FBQ0csSUFIYjtBQUloQnBDLFlBQVUsRUFBRWlDLGlEQUFTLENBQUNJLElBQVYsQ0FBZUM7QUFKWCxDQUFsQjtpQkFPZXhDLEs7QUFBQTs7Ozs7Ozs7OzswQkExRFRBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU15QyxvQkFBb0IsR0FBRyxDQUFDVixLQUFELEVBQVFXLFFBQVIsS0FBcUI7QUFDaEQsUUFBTTtBQUFFekMsU0FBRjtBQUFTRTtBQUFULE1BQStCNEIsS0FBSyxDQUFDWSxZQUEzQztBQUNBLFFBQU07QUFBRXZDO0FBQUYsTUFBZXNDLFFBQVEsQ0FBQ0UsUUFBOUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVk3QyxLQUFaO0FBQ0E0QyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFNBQU87QUFDTDdDLFNBQUssRUFBRUEsS0FERjtBQUVMRyxZQUFRLEVBQUVBLFFBRkw7QUFHTEQscUJBQWlCLEVBQUVBO0FBSGQsR0FBUDtBQUtELENBWEQ7O0FBYUEsTUFBTTRDLGtCQUFrQixHQUFHLENBQUNDLFFBQUQsRUFBV04sUUFBWCxNQUF5QjtBQUNsRHhDLFlBQVUsRUFBRSxNQUFNOEMsUUFBUSxDQUFDQyw0RUFBZSxFQUFoQjtBQUR3QixDQUF6QixDQUEzQjs7aUJBSWVDLG1FQUFVLENBQUNDLDJEQUFPLENBQy9CVixvQkFEK0IsRUFFL0JNLGtCQUYrQixDQUFQLENBR3hCL0MsOENBSHdCLENBQUQsQzs7QUFBVjs7Ozs7Ozs7OzswQkFqQlR5QyxvQjswQkFhQU0sa0IiLCJmaWxlIjoidXNlcnNDb250YWluZXIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIl91c2Vyc19jb250YWluZXJcIjpcIl8yckxJZE9PUkVfLUZiYzE0dkJUZEFTXCIsXCJfbGVmdF9jb2x1bW5faXRlbVwiOlwiXzFPY2RYQXFqcVdqcTgwN05weWRCY09cIixcIl90aXRsZV91c2Vyc19pdGVtXCI6XCJfMnBIRkgyMTdlUjRZOXJ5MWdTR25RbVwiLFwiX3VzZXJzX3RhYmxlXCI6XCJfMTdpYTV5ejc2SUlGYnlUcVlXaW1lQ1wiLFwiX3VzZXJzX3RoXCI6XCJfM1k5V1JYOTlhRjVHR3QzN2tZUC02RVwiLFwiX3VzZXJzX3RoX2FjdGl2ZVwiOlwiXzJnU1dyT2sxOE8wZnVCUGRPNEdfT1hcIixcIl91c2Vyc190Ym9keVwiOlwiXzFHa3dNMWUza3RMN3A3ck9HQjA2dWhcIixcInVzZXJzX3RkXCI6XCJfM3E4eHd6aUhpMGlSQnhVQ0lfcnFNRFwiLFwidXNlcnNfdGRfYWN0aXZlXCI6XCJfMmZfVmx5WU5HakJRcVg1dG1YQXIySlwiLFwiX3VzZXJzX2FuY2hvcl91c2VybmFtZVwiOlwiXzN1VGhtd2gwUkVrLVRiN2tvYlpxSjBcIixcIl91c2Vyc19zdHlsZV9lbWFpbFwiOlwiXzJpQU5kUVZTenNRbzctR2RvazhJcTBcIixcIl9yaWdodF9jb2x1bW5faXRlbVwiOlwiXzE0YXFuMXAwY2FoTEZtX3hzM3hmSFpcIixcIl91c2Vyc19hZGRcIjpcIlFTcWxMTmplc3VINFFFRDZURDBnRFwiLFwiX3VzZXJzX2FuY2hvcl9hZGRcIjpcIl8zQUYxa1pMeGRrbTNYZTVKbmlFTUpjXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Njg1NjE1MjA2MjBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvYWVrcnl6LWxhcHRvcC9Xb3Jrc3BhY2Uvc3lzdGVtLWFkbWluaXN0cmF0aW9uL25vZGVfbW9kdWxlcy9leHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJob3RcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFQbHVzLCBmYUNoZWNrQ2lyY2xlLCBmYVRpbWVzQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB1c2Vyc1N0eWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL3VzZXJzLmNzcyc7XG5cbmNvbnN0IFVzZXJzID0gKHtcbiAgdXNlcnMsXG4gIGZldGNoVXNlcnMsXG4gIGFkZFVzZXJQZXJtaXNzaW9uLFxuICBwYXRobmFtZSxcbn0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVXNlcnMoKTtcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfY29udGFpbmVyfT4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fbGVmdF9jb2x1bW5faXRlbX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl90aXRsZV91c2Vyc19pdGVtfT48c3Bhbj5TZWxlY3QgdXNlcjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfdGFibGV9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfdGh9PnVzZXJuYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfdGh9PmVtYWlsPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfdGhfYWN0aXZlfT5hY3RpdmU8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3VzZXJzX3Rib2R5fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJzU3R5bGUudXNlcnNfdGR9PjxMaW5rIGNsYXNzTmFtZT17dXNlcnNTdHlsZS5fdXNlcnNfYW5jaG9yX3VzZXJuYW1lfSB0bz17YC91c2VyLyR7dXNlci5pZH1gfT57dXNlci51c2VybmFtZX08L0xpbms+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlcnNTdHlsZS51c2Vyc190ZH0+PGRpdiBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3VzZXJzX3N0eWxlX2VtYWlsfT57dXNlci5lbWFpbH08L2Rpdj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLnVzZXJzX3RkX2FjdGl2ZX0+PGRpdiBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3VzZXJzX3N0eWxlX2FjdGl2ZX0+e3VzZXIuaXNBY3RpdmF0ZSA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gc2l6ZT1cInhzXCIgY29sb3I9XCIjMUI1RTIwXCIgLz4gOiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9IHNpemU9XCJ4c1wiIGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvZGl2PjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl9yaWdodF9jb2x1bW5faXRlbX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2Vyc1N0eWxlLl91c2Vyc19hZGR9PlxuICAgICAgICAgIHthZGRVc2VyUGVybWlzc2lvbiAmJiA8TGluayBjbGFzc05hbWU9e3VzZXJzU3R5bGUuX3VzZXJzX2FuY2hvcl9hZGR9IHRvPXt7cGF0aG5hbWU6Jy9hZGQnLCBzdGF0ZToge2Zyb206IHBhdGhuYW1lfX19PkFERCBVU0VSIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzfSAvPjwvTGluaz59XG4gICAgICAgIDwvZGl2Pjxici8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgLypcbiAgICAgICAgICBsb2NhdGlvbi5zdGF0ZS5tZXNzYWdlID8gPGg0Pntsb2NhdGlvbi5zdGF0ZS5tZXNzYWdlfTwvaDQ+IDogJydcbiAgICAgICAgKi99XG4gICAgPC9kaXY+IFxuICApO1xufTtcblxuVXNlcnMucHJvcFR5cGVzID0ge1xuICB1c2VyczogUHJvcFR5cGVzLmFycmF5LFxuICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWRkVXNlclBlcm1pc3Npb246IFByb3BUeXBlcy5ib29sLFxuICBmZXRjaFVzZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vVXNlcnMnO1xuaW1wb3J0IHsgc3RhcnRGZXRjaFVzZXJzIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2Vycyc7XG5cbmNvbnN0IG1hcFN0YXRlVXNlcnNUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHVzZXJzLCBhZGRVc2VyUGVybWlzc2lvbiB9ID0gc3RhdGUudXNlcnNSZWR1Y2VyO1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBvd25Qcm9wcy5sb2NhdGlvbjtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyczogdXNlcnMsXG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIGFkZFVzZXJQZXJtaXNzaW9uOiBhZGRVc2VyUGVybWlzc2lvbixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+ICh7XG4gIGZldGNoVXNlcnM6ICgpID0+IGRpc3BhdGNoKHN0YXJ0RmV0Y2hVc2VycygpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgbWFwU3RhdGVVc2Vyc1RvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoVXNlcnMpKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==