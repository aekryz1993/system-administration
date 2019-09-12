(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userContainer"],{

/***/ "./client/assets/stylesheets/components/user.css":
/*!*******************************************************!*\
  !*** ./client/assets/stylesheets/components/user.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"_user_container":"_2xQr2PcJm7YX6UcJbimezk","_user_grid_container":"_21o8FzJ79XGNGDqvxUUPWX","_user_grid_first_item":"_3VvG69lmasTHJuBLxHu_JF","_use_username_profile":"_2lhz7aizOba8XcAM4QZZMn","_user_update_button":"_33Ymnq9ElQI8K6LxMDg_xT","_user_anchor_update":"_2Wiz3M2Pfg0PLeNtpBcY4L","_user_ul":"_1G7UDhgcjesEGAdtkWXuaH","_user_li_active":"_10r5Ux3aTCzu0gwqMQmBDU","_user_li":"dQuK00gNoQkTJRikxGzil","_user_li_anchor":"_11TRFNsTf7EzwO0BwHJR7p","_table":"_1mODUnpwerynHkBe7OvWtC","_tr":"FJaRIlkppsZJH0mqVp26n","_td_title":"_3tdjY6zsmJNE_4gTsW0qCM","_td":"_34nmJtj7et6q2Wir7CvVsU","_table_permissions":"_1m1CIYA3M_FPWCznS2zpCK _1mODUnpwerynHkBe7OvWtC","_tr_permissions":"_1M2QS0x6pNbRE4rl-wG_Di","_td_title_permissions":"_247EVuHsqsDSLl4CG3wnt9 _3tdjY6zsmJNE_4gTsW0qCM","_td_permissions":"CIw1eHObUf8IF6obusN8I _34nmJtj7et6q2Wir7CvVsU"};
    if(true) {
      // 1568317501485
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./client/components/UserData.js":
/*!***************************************!*\
  !*** ./client/components/UserData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/stylesheets/components/user.css */ "./client/assets/stylesheets/components/user.css");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const UserData = ({
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._table
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, user.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, user.isActivate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Active  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"],
  size: "lg",
  color: "#1B5E20"
})) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "deactivate ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimesCircle"],
  size: "lg",
  color: "#d50000"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Created date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, dateformat__WEBPACK_IMPORTED_MODULE_3___default()(user.createdAt))))));

UserData.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
const _default = UserData;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserData, "UserData", "/home/aekryz/Workspace/system-administration/client/components/UserData.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/components/UserData.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/Permissions.js":
/*!************************************!*\
  !*** ./client/user/Permissions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/stylesheets/components/user.css */ "./client/assets/stylesheets/components/user.css");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const Permissions = ({
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._table_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "View users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.viewUsers ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Create users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.createUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Edit users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.updateUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Delete users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.deleteUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "View groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.viewGroups ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Create groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.createGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Edit groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.updateGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Delete groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.deleteGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Is admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.isAdmin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))))));

Permissions.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
const _default = Permissions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Permissions, "Permissions", "/home/aekryz/Workspace/system-administration/client/user/Permissions.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/Permissions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/User.js":
/*!*****************************!*\
  !*** ./client/user/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserData */ "./client/components/UserData.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/stylesheets/components/user.css */ "./client/assets/stylesheets/components/user.css");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Permissions */ "./client/user/Permissions.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const Users = ({
  user,
  pathname,
  deletePermission,
  updatePermission,
  fetchUser
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUser();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_grid_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_grid_first_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._use_username_profile
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_update_button
  }, updatePermission && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_anchor_update,
    to: {
      pathname: `/updateuser/${user.id}`,
      state: {
        initialValues: user
      }
    }
  }, "Update"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_grid_second_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_nav
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_ul
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_anchor,
    exact: true,
    to: `${pathname}`,
    activeClassName: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_active
  }, "Information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_anchor,
    to: `${pathname}/permissions`,
    activeClassName: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_active
  }, "Permissions")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: `${pathname}`,
    render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserData__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: `${pathname}/permissions`,
    render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Permissions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user
    })
  }))))));
};

__signature__(Users, "useEffect{}");

Users.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  updatePermission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  deletePermission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fetchUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = Users;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Users, "Users", "/home/aekryz/Workspace/system-administration/client/user/User.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/User.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/userContainer.js":
/*!**************************************!*\
  !*** ./client/user/userContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./client/user/User.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/user */ "./client/store/actions/user.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const mapStateUserToProps = (state, ownProps) => {
  const {
    user,
    updatePermission,
    deletePermission
  } = state.userReducer;
  const {
    url
  } = ownProps.match;
  console.log('************************');
  console.log(user);
  console.log('************************');
  return {
    user: user,
    updatePermission: updatePermission,
    deletePermission: deletePermission,
    pathname: url
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    id
  } = ownProps.match.params;
  return {
    fetchUser: () => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_3__["startFetchUser"])(id))
  };
};

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateUserToProps, mapDispatchToProps)(_User__WEBPACK_IMPORTED_MODULE_2__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateUserToProps, "mapStateUserToProps", "/home/aekryz/Workspace/system-administration/client/user/userContainer.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/aekryz/Workspace/system-administration/client/user/userContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz/Workspace/system-administration/client/user/userContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],
          tt:   H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],
          T:    H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],
          TT:   H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dateFormat;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlci5jc3M/YzIzNCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Vc2VyRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXNlci9QZXJtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2VyL3VzZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGVmb3JtYXQvbGliL2RhdGVmb3JtYXQuanMiXSwibmFtZXMiOlsiVXNlckRhdGEiLCJ1c2VyIiwidXNlclN0eWxlcyIsIl90YWJsZSIsIl90ciIsIl90ZF90aXRsZSIsIl90ZCIsInVzZXJuYW1lIiwiZW1haWwiLCJpc0FjdGl2YXRlIiwiZmFDaGVja0NpcmNsZSIsImZhVGltZXNDaXJjbGUiLCJkYXRlRm9ybWF0IiwiY3JlYXRlZEF0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiUGVybWlzc2lvbnMiLCJfdGFibGVfcGVybWlzc2lvbnMiLCJfdHJfcGVybWlzc2lvbnMiLCJfdGRfdGl0bGVfcGVybWlzc2lvbnMiLCJfdGRfcGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uIiwidmlld1VzZXJzIiwiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJkZWxldGVVc2VyIiwidmlld0dyb3VwcyIsImNyZWF0ZUdyb3VwIiwidXBkYXRlR3JvdXAiLCJkZWxldGVHcm91cCIsImlzQWRtaW4iLCJVc2VycyIsInBhdGhuYW1lIiwiZGVsZXRlUGVybWlzc2lvbiIsInVwZGF0ZVBlcm1pc3Npb24iLCJmZXRjaFVzZXIiLCJ1c2VFZmZlY3QiLCJ1c2VyU3R5bGUiLCJfdXNlcl9jb250YWluZXIiLCJfdXNlcl9ncmlkX2NvbnRhaW5lciIsIl91c2VyX2dyaWRfZmlyc3RfaXRlbSIsIl91c2VfdXNlcm5hbWVfcHJvZmlsZSIsIl91c2VyX3VwZGF0ZV9idXR0b24iLCJfdXNlcl9hbmNob3JfdXBkYXRlIiwiaWQiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJfdXNlcl9ncmlkX3NlY29uZF9pdGVtIiwiX3VzZXJfbmF2IiwiX3VzZXJfdWwiLCJfdXNlcl9saSIsIl91c2VyX2xpX2FuY2hvciIsIl91c2VyX2xpX2FjdGl2ZSIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm1hcFN0YXRlVXNlclRvUHJvcHMiLCJvd25Qcm9wcyIsInVzZXJSZWR1Y2VyIiwidXJsIiwibWF0Y2giLCJjb25zb2xlIiwibG9nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXJhbXMiLCJzdGFydEZldGNoVXNlciIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQThILEVBQUUsUUFBUyxHQUFHLDBDQUEwQztBQUNwTjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNmLHdFQUNFO0FBQU8sV0FBUyxFQUFFQyw4RUFBVSxDQUFDQztBQUE3QixHQUNFLDBFQUNFO0FBQUksV0FBUyxFQUFFRCw4RUFBVSxDQUFDRTtBQUExQixHQUNFO0FBQUksV0FBUyxFQUFFRiw4RUFBVSxDQUFDRztBQUExQixjQURGLEVBRUU7QUFBSSxXQUFTLEVBQUVILDhFQUFVLENBQUNJO0FBQTFCLEdBQWdDTCxJQUFJLENBQUNNLFFBQXJDLENBRkYsQ0FERixFQUtFO0FBQUksV0FBUyxFQUFFTCw4RUFBVSxDQUFDRTtBQUExQixHQUNFO0FBQUksV0FBUyxFQUFFRiw4RUFBVSxDQUFDRztBQUExQixX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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7Ozs7QUFJQSxNQUFNLElBQTBDO0FBQ2hELElBQUksbUNBQU87QUFDWDtBQUNBLEtBQUs7QUFBQSxvR0FBQztBQUNOLEdBQUcsTUFBTSxFQUlOO0FBQ0gsQ0FBQyIsImZpbGUiOiJ1c2VyQ29udGFpbmVyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJfdXNlcl9jb250YWluZXJcIjpcIl8yeFFyMlBjSm03WVg2VWNKYmltZXprXCIsXCJfdXNlcl9ncmlkX2NvbnRhaW5lclwiOlwiXzIxbzhGeko3OVhHTkdEcXZ4VVVQV1hcIixcIl91c2VyX2dyaWRfZmlyc3RfaXRlbVwiOlwiXzNWdkc2OWxtYXNUSEp1Qkx4SHVfSkZcIixcIl91c2VfdXNlcm5hbWVfcHJvZmlsZVwiOlwiXzJsaHo3YWl6T2JhOFhjQU00UVpaTW5cIixcIl91c2VyX3VwZGF0ZV9idXR0b25cIjpcIl8zM1ltbnE5RWxRSThLNkx4TURnX3hUXCIsXCJfdXNlcl9hbmNob3JfdXBkYXRlXCI6XCJfMldpejNNMlBmZzBQTGVOdHBCY1k0TFwiLFwiX3VzZXJfdWxcIjpcIl8xRzdVRGhnY2plc0VHQWR0a1dYdWFIXCIsXCJfdXNlcl9saV9hY3RpdmVcIjpcIl8xMHI1VXgzYVRDenUwZ3dxTVFtQkRVXCIsXCJfdXNlcl9saVwiOlwiZFF1SzAwZ05vUWtUSlJpa3hHemlsXCIsXCJfdXNlcl9saV9hbmNob3JcIjpcIl8xMVRSRk5zVGY3RXp3TzBCd0hKUjdwXCIsXCJfdGFibGVcIjpcIl8xbU9EVW5wd2VyeW5Ia0JlN092V3RDXCIsXCJfdHJcIjpcIkZKYVJJbGtwcHNaSkgwbXFWcDI2blwiLFwiX3RkX3RpdGxlXCI6XCJfM3Rkalk2enNtSk5FXzRnVHNXMHFDTVwiLFwiX3RkXCI6XCJfMzRubUp0ajdldDZxMldpcjdDdlZzVVwiLFwiX3RhYmxlX3Blcm1pc3Npb25zXCI6XCJfMW0xQ0lZQTNNX0ZQV0N6blMyenBDSyBfMW1PRFVucHdlcnluSGtCZTdPdld0Q1wiLFwiX3RyX3Blcm1pc3Npb25zXCI6XCJfMU0yUVMweDZwTmJSRTRybC13R19EaVwiLFwiX3RkX3RpdGxlX3Blcm1pc3Npb25zXCI6XCJfMjQ3RVZ1SHNxc0RTTGw0Q0czd250OSBfM3Rkalk2enNtSk5FXzRnVHNXMHFDTVwiLFwiX3RkX3Blcm1pc3Npb25zXCI6XCJDSXcxZUhPYlVmOElGNm9idXNOOEkgXzM0bm1KdGo3ZXQ2cTJXaXI3Q3ZWc1VcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODMxNzUwMTQ4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hZWtyeXovV29ya3NwYWNlL3N5c3RlbS1hZG1pbmlzdHJhdGlvbi9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXNlclN0eWxlcyBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy91c2VyLmNzcyc7IFxuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFDaGVja0NpcmNsZSwgZmFUaW1lc0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmNvbnN0IFVzZXJEYXRhID0gKHsgdXNlciB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHRhYmxlIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGFibGV9PlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cn0+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGV9PlVzZXJuYW1lPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZH0+e3VzZXIudXNlcm5hbWV9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJ9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlfT5FbWFpbDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGR9Pnt1c2VyLmVtYWlsfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZX0+U3RhdHVzPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZH0+e3VzZXIuaXNBY3RpdmF0ZSA/IDxzcGFuPkFjdGl2ZSAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSBzaXplPVwibGdcIiBjb2xvcj1cIiMxQjVFMjBcIiAvPjwvc3Bhbj46IDxzcGFuPmRlYWN0aXZhdGUgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfSBzaXplPVwibGdcIiBjb2xvcj1cIiNkNTAwMDBcIiAvPjwvc3Bhbj59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJ9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlfT5DcmVhdGVkIGRhdGU8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkfT57ZGF0ZUZvcm1hdCh1c2VyLmNyZWF0ZWRBdCl9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4pO1xuXG5Vc2VyRGF0YS5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGF0YTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1c2VyU3R5bGVzIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL3VzZXIuY3NzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUNoZWNrQ2lyY2xlLCBmYVRpbWVzQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuY29uc3QgUGVybWlzc2lvbnMgPSAoeyB1c2VyIH0pID0+IChcbiAgPGRpdj5cbiAgICA8dGFibGUgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90YWJsZV9wZXJtaXNzaW9uc30+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyX3Blcm1pc3Npb25zfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZV9wZXJtaXNzaW9uc30+VmlldyB1c2VyczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24udmlld1VzZXJzID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSAgY29sb3I9XCIjMUI1RTIwXCIgLz46IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gIGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyX3Blcm1pc3Npb25zfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZV9wZXJtaXNzaW9uc30+Q3JlYXRlIHVzZXJzPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF9wZXJtaXNzaW9uc30+e3VzZXIucGVybWlzc2lvbi5jcmVhdGVVc2VyID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSAgY29sb3I9XCIjMUI1RTIwXCIgLz46IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gIGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyX3Blcm1pc3Npb25zfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZV9wZXJtaXNzaW9uc30+RWRpdCB1c2VyczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24udXBkYXRlVXNlciA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9ICBjb2xvcj1cIiNkNTAwMDBcIiAvPn08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PkRlbGV0ZSB1c2VyczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24uZGVsZXRlVXNlciA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9ICBjb2xvcj1cIiNkNTAwMDBcIiAvPn08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PlZpZXcgZ3JvdXBzPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF9wZXJtaXNzaW9uc30+e3VzZXIucGVybWlzc2lvbi52aWV3R3JvdXBzID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSAgY29sb3I9XCIjMUI1RTIwXCIgLz46IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gIGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyX3Blcm1pc3Npb25zfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZV9wZXJtaXNzaW9uc30+Q3JlYXRlIGdyb3VwczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24uY3JlYXRlR3JvdXAgPyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tDaXJjbGV9ICBjb2xvcj1cIiMxQjVFMjBcIiAvPjogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfSAgY29sb3I9XCIjZDUwMDAwXCIgLz59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJfcGVybWlzc2lvbnN9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlX3Blcm1pc3Npb25zfT5FZGl0IGdyb3VwczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24udXBkYXRlR3JvdXAgPyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tDaXJjbGV9ICBjb2xvcj1cIiMxQjVFMjBcIiAvPjogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfSAgY29sb3I9XCIjZDUwMDAwXCIgLz59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJfcGVybWlzc2lvbnN9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlX3Blcm1pc3Npb25zfT5EZWxldGUgZ3JvdXBzPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF9wZXJtaXNzaW9uc30+e3VzZXIucGVybWlzc2lvbi5kZWxldGVHcm91cCA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9ICBjb2xvcj1cIiNkNTAwMDBcIiAvPn08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PklzIGFkbWluPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF9wZXJtaXNzaW9uc30+e3VzZXIucGVybWlzc2lvbi5pc0FkbWluID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSAgY29sb3I9XCIjMUI1RTIwXCIgLz46IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gY29sb3I9XCIjZDUwMDAwXCIgLz59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4pO1xuXG5QZXJtaXNzaW9ucy5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJtaXNzaW9uczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVXNlckRhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyRGF0YSc7XG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCBSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB1c2VyU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlci5jc3MnO1xuaW1wb3J0IFBlcm1pc3Npb25zIGZyb20gJy4vUGVybWlzc2lvbnMnO1xuXG5jb25zdCBVc2VycyA9ICh7XG4gIHVzZXIsXG4gIHBhdGhuYW1lLFxuICBkZWxldGVQZXJtaXNzaW9uLFxuICB1cGRhdGVQZXJtaXNzaW9uLFxuICBmZXRjaFVzZXIsXG59KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFVzZXIoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3VzZXJTdHlsZS5fdXNlcl9jb250YWluZXJ9ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfZ3JpZF9jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2dyaWRfZmlyc3RfaXRlbX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJTdHlsZS5fdXNlX3VzZXJuYW1lX3Byb2ZpbGV9PjxzcGFuPnt1c2VyLnVzZXJuYW1lfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX3VwZGF0ZV9idXR0b259PlxuICAgICAgICAgICAgeyB1cGRhdGVQZXJtaXNzaW9uICYmIFxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3VzZXJTdHlsZS5fdXNlcl9hbmNob3JfdXBkYXRlfVxuICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC91cGRhdGV1c2VyLyR7dXNlci5pZH1gLCBcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiB7aW5pdGlhbFZhbHVlczogdXNlcn1cbiAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9MaW5rPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfZ3JpZF9zZWNvbmRfaXRlbX0+XG4gICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbmF2fT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX3VsfT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbGl9PlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbGlfYW5jaG9yfSBleGFjdCB0bz17YCR7cGF0aG5hbWV9YH0gYWN0aXZlQ2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbGlfYWN0aXZlfSA+SW5mb3JtYXRpb248L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbGl9PlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbGlfYW5jaG9yfSB0bz17YCR7cGF0aG5hbWV9L3Blcm1pc3Npb25zYH0gYWN0aXZlQ2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfbGlfYWN0aXZlfT5QZXJtaXNzaW9uczwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7cGF0aG5hbWV9YH0gcmVuZGVyPXsoKSA9PiA8VXNlckRhdGEgdXNlcj17dXNlcn0gLz59ICAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7cGF0aG5hbWV9L3Blcm1pc3Npb25zYH0gcmVuZGVyPXsoKSA9PiA8UGVybWlzc2lvbnMgdXNlcj17dXNlcn0gLz59ICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKntkZWxldGVQZXJtaXNzaW9uICYmXG4gICAgICAgICAgPExpbmsgXG4gICAgICAgICAgdG89e3tcbiAgICAgICAgICAgIHBhdGhuYW1lOiBgL2RlbGV0ZXVzZXIvJHt1c2VyLl9pZH1gLCBcbiAgICAgICAgICAgIHN0YXRlOiB7aW5pdGlhbFZhbHVlczogdXNlcn1cbiAgICAgICAgICB9fSA+XG4gICAgICAgICAgICBERUxFVEVcbiAgICAgICAgPC9MaW5rPiAgIH1cbiAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIDxMaW5rIHRvPScvdXNlcnMnID4gVVNFUlMgPC9MaW5rPiAgKi99IFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Vc2Vycy5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cGRhdGVQZXJtaXNzaW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVsZXRlUGVybWlzc2lvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGZldGNoVXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgc3RhcnRGZXRjaFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXInO1xuXG5jb25zdCBtYXBTdGF0ZVVzZXJUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHVzZXIsIHVwZGF0ZVBlcm1pc3Npb24sIGRlbGV0ZVBlcm1pc3Npb24gfSA9IHN0YXRlLnVzZXJSZWR1Y2VyO1xuICBjb25zdCB7dXJsfSA9IG93blByb3BzLm1hdGNoO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gIHJldHVybiB7XG4gICAgdXNlcjogdXNlcixcbiAgICB1cGRhdGVQZXJtaXNzaW9uOiB1cGRhdGVQZXJtaXNzaW9uLFxuICAgIGRlbGV0ZVBlcm1pc3Npb246IGRlbGV0ZVBlcm1pc3Npb24sXG4gICAgcGF0aG5hbWU6IHVybCxcbiAgfTtcbn07XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBvd25Qcm9wcy5tYXRjaC5wYXJhbXM7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hVc2VyOiAoKSA9PiBkaXNwYXRjaChzdGFydEZldGNoVXNlcihpZCkpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIG1hcFN0YXRlVXNlclRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoVXNlcikpO1xuIiwiLypcbiAqIERhdGUgRm9ybWF0IDEuMi4zXG4gKiAoYykgMjAwNy0yMDA5IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxuICogTUlUIGxpY2Vuc2VcbiAqXG4gKiBJbmNsdWRlcyBlbmhhbmNlbWVudHMgYnkgU2NvdHQgVHJlbmRhIDxzY290dC50cmVuZGEubmV0PlxuICogYW5kIEtyaXMgS293YWwgPGNpeGFyLmNvbS9+a3Jpcy5rb3dhbC8+XG4gKlxuICogQWNjZXB0cyBhIGRhdGUsIGEgbWFzaywgb3IgYSBkYXRlIGFuZCBhIG1hc2suXG4gKiBSZXR1cm5zIGEgZm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZGF0ZSBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBkYXRlL3RpbWUuXG4gKiBUaGUgbWFzayBkZWZhdWx0cyB0byBkYXRlRm9ybWF0Lm1hc2tzLmRlZmF1bHQuXG4gKi9cblxuKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGRhdGVGb3JtYXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdG9rZW4gPSAvZHsxLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98W0xsb1NaV05dfFwiW15cIl0qXCJ8J1teJ10qJy9nO1xuICAgICAgdmFyIHRpbWV6b25lID0gL1xcYig/OltQTUNFQV1bU0RQXVR8KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWV8KD86R01UfFVUQykoPzpbLStdXFxkezR9KT8pXFxiL2c7XG4gICAgICB2YXIgdGltZXpvbmVDbGlwID0gL1teLStcXGRBLVpdL2c7XG4gIFxuICAgICAgLy8gUmVnZXhlcyBhbmQgc3VwcG9ydGluZyBmdW5jdGlvbnMgYXJlIGNhY2hlZCB0aHJvdWdoIGNsb3N1cmVcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgbWFzaywgdXRjLCBnbXQpIHtcbiAgXG4gICAgICAgIC8vIFlvdSBjYW4ndCBwcm92aWRlIHV0YyBpZiB5b3Ugc2tpcCBvdGhlciBhcmdzICh1c2UgdGhlICdVVEM6JyBtYXNrIHByZWZpeClcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYga2luZE9mKGRhdGUpID09PSAnc3RyaW5nJyAmJiAhL1xcZC8udGVzdChkYXRlKSkge1xuICAgICAgICAgIG1hc2sgPSBkYXRlO1xuICAgICAgICAgIGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGRhdGUgPSBkYXRlIHx8IG5ldyBEYXRlO1xuICBcbiAgICAgICAgaWYoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmIChpc05hTihkYXRlKSkge1xuICAgICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBkYXRlJyk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIG1hc2sgPSBTdHJpbmcoZGF0ZUZvcm1hdC5tYXNrc1ttYXNrXSB8fCBtYXNrIHx8IGRhdGVGb3JtYXQubWFza3NbJ2RlZmF1bHQnXSk7XG4gIFxuICAgICAgICAvLyBBbGxvdyBzZXR0aW5nIHRoZSB1dGMvZ210IGFyZ3VtZW50IHZpYSB0aGUgbWFza1xuICAgICAgICB2YXIgbWFza1NsaWNlID0gbWFzay5zbGljZSgwLCA0KTtcbiAgICAgICAgaWYgKG1hc2tTbGljZSA9PT0gJ1VUQzonIHx8IG1hc2tTbGljZSA9PT0gJ0dNVDonKSB7XG4gICAgICAgICAgbWFzayA9IG1hc2suc2xpY2UoNCk7XG4gICAgICAgICAgdXRjID0gdHJ1ZTtcbiAgICAgICAgICBpZiAobWFza1NsaWNlID09PSAnR01UOicpIHtcbiAgICAgICAgICAgIGdtdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICB2YXIgXyA9IHV0YyA/ICdnZXRVVEMnIDogJ2dldCc7XG4gICAgICAgIHZhciBkID0gZGF0ZVtfICsgJ0RhdGUnXSgpO1xuICAgICAgICB2YXIgRCA9IGRhdGVbXyArICdEYXknXSgpO1xuICAgICAgICB2YXIgbSA9IGRhdGVbXyArICdNb250aCddKCk7XG4gICAgICAgIHZhciB5ID0gZGF0ZVtfICsgJ0Z1bGxZZWFyJ10oKTtcbiAgICAgICAgdmFyIEggPSBkYXRlW18gKyAnSG91cnMnXSgpO1xuICAgICAgICB2YXIgTSA9IGRhdGVbXyArICdNaW51dGVzJ10oKTtcbiAgICAgICAgdmFyIHMgPSBkYXRlW18gKyAnU2Vjb25kcyddKCk7XG4gICAgICAgIHZhciBMID0gZGF0ZVtfICsgJ01pbGxpc2Vjb25kcyddKCk7XG4gICAgICAgIHZhciBvID0gdXRjID8gMCA6IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgdmFyIFcgPSBnZXRXZWVrKGRhdGUpO1xuICAgICAgICB2YXIgTiA9IGdldERheU9mV2VlayhkYXRlKTtcbiAgICAgICAgdmFyIGZsYWdzID0ge1xuICAgICAgICAgIGQ6ICAgIGQsXG4gICAgICAgICAgZGQ6ICAgcGFkKGQpLFxuICAgICAgICAgIGRkZDogIGRhdGVGb3JtYXQuaTE4bi5kYXlOYW1lc1tEXSxcbiAgICAgICAgICBkZGRkOiBkYXRlRm9ybWF0LmkxOG4uZGF5TmFtZXNbRCArIDddLFxuICAgICAgICAgIG06ICAgIG0gKyAxLFxuICAgICAgICAgIG1tOiAgIHBhZChtICsgMSksXG4gICAgICAgICAgbW1tOiAgZGF0ZUZvcm1hdC5pMThuLm1vbnRoTmFtZXNbbV0sXG4gICAgICAgICAgbW1tbTogZGF0ZUZvcm1hdC5pMThuLm1vbnRoTmFtZXNbbSArIDEyXSxcbiAgICAgICAgICB5eTogICBTdHJpbmcoeSkuc2xpY2UoMiksXG4gICAgICAgICAgeXl5eTogeSxcbiAgICAgICAgICBoOiAgICBIICUgMTIgfHwgMTIsXG4gICAgICAgICAgaGg6ICAgcGFkKEggJSAxMiB8fCAxMiksXG4gICAgICAgICAgSDogICAgSCxcbiAgICAgICAgICBISDogICBwYWQoSCksXG4gICAgICAgICAgTTogICAgTSxcbiAgICAgICAgICBNTTogICBwYWQoTSksXG4gICAgICAgICAgczogICAgcyxcbiAgICAgICAgICBzczogICBwYWQocyksXG4gICAgICAgICAgbDogICAgcGFkKEwsIDMpLFxuICAgICAgICAgIEw6ICAgIHBhZChNYXRoLnJvdW5kKEwgLyAxMCkpLFxuICAgICAgICAgIHQ6ICAgIEggPCAxMiA/IGRhdGVGb3JtYXQuaTE4bi50aW1lTmFtZXNbMF0gOiBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzFdLFxuICAgICAgICAgIHR0OiAgIEggPCAxMiA/IGRhdGVGb3JtYXQuaTE4bi50aW1lTmFtZXNbMl0gOiBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzNdLFxuICAgICAgICAgIFQ6ICAgIEggPCAxMiA/IGRhdGVGb3JtYXQuaTE4bi50aW1lTmFtZXNbNF0gOiBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzVdLFxuICAgICAgICAgIFRUOiAgIEggPCAxMiA/IGRhdGVGb3JtYXQuaTE4bi50aW1lTmFtZXNbNl0gOiBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzddLFxuICAgICAgICAgIFo6ICAgIGdtdCA/ICdHTVQnIDogdXRjID8gJ1VUQycgOiAoU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKSB8fCBbJyddKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCwgJycpLFxuICAgICAgICAgIG86ICAgIChvID4gMCA/ICctJyA6ICcrJykgKyBwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhvKSAvIDYwKSAqIDEwMCArIE1hdGguYWJzKG8pICUgNjAsIDQpLFxuICAgICAgICAgIFM6ICAgIFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXVtkICUgMTAgPiAzID8gMCA6IChkICUgMTAwIC0gZCAlIDEwICE9IDEwKSAqIGQgJSAxMF0sXG4gICAgICAgICAgVzogICAgVyxcbiAgICAgICAgICBOOiAgICBOXG4gICAgICAgIH07XG4gIFxuICAgICAgICByZXR1cm4gbWFzay5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICBpZiAobWF0Y2ggaW4gZmxhZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGFnc1ttYXRjaF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXRjaC5zbGljZSgxLCBtYXRjaC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgZGF0ZUZvcm1hdC5tYXNrcyA9IHtcbiAgICAnZGVmYXVsdCc6ICAgICAgICAgICAgICAgJ2RkZCBtbW0gZGQgeXl5eSBISDpNTTpzcycsXG4gICAgJ3Nob3J0RGF0ZSc6ICAgICAgICAgICAgICdtL2QveXknLFxuICAgICdtZWRpdW1EYXRlJzogICAgICAgICAgICAnbW1tIGQsIHl5eXknLFxuICAgICdsb25nRGF0ZSc6ICAgICAgICAgICAgICAnbW1tbSBkLCB5eXl5JyxcbiAgICAnZnVsbERhdGUnOiAgICAgICAgICAgICAgJ2RkZGQsIG1tbW0gZCwgeXl5eScsXG4gICAgJ3Nob3J0VGltZSc6ICAgICAgICAgICAgICdoOk1NIFRUJyxcbiAgICAnbWVkaXVtVGltZSc6ICAgICAgICAgICAgJ2g6TU06c3MgVFQnLFxuICAgICdsb25nVGltZSc6ICAgICAgICAgICAgICAnaDpNTTpzcyBUVCBaJyxcbiAgICAnaXNvRGF0ZSc6ICAgICAgICAgICAgICAgJ3l5eXktbW0tZGQnLFxuICAgICdpc29UaW1lJzogICAgICAgICAgICAgICAnSEg6TU06c3MnLFxuICAgICdpc29EYXRlVGltZSc6ICAgICAgICAgICAneXl5eS1tbS1kZFxcJ1RcXCdISDpNTTpzc28nLFxuICAgICdpc29VdGNEYXRlVGltZSc6ICAgICAgICAnVVRDOnl5eXktbW0tZGRcXCdUXFwnSEg6TU06c3NcXCdaXFwnJyxcbiAgICAnZXhwaXJlc0hlYWRlckZvcm1hdCc6ICAgJ2RkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWidcbiAgfTtcblxuICAvLyBJbnRlcm5hdGlvbmFsaXphdGlvbiBzdHJpbmdzXG4gIGRhdGVGb3JtYXQuaTE4biA9IHtcbiAgICBkYXlOYW1lczogW1xuICAgICAgJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcsXG4gICAgICAnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXG4gICAgXSxcbiAgICBtb250aE5hbWVzOiBbXG4gICAgICAnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnLFxuICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXSxcbiAgICB0aW1lTmFtZXM6IFtcbiAgICAgICdhJywgJ3AnLCAnYW0nLCAncG0nLCAnQScsICdQJywgJ0FNJywgJ1BNJ1xuICAgIF1cbiAgfTtcblxuZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gIHZhbCA9IFN0cmluZyh2YWwpO1xuICBsZW4gPSBsZW4gfHwgMjtcbiAgd2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHtcbiAgICB2YWwgPSAnMCcgKyB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIElTTyA4NjAxIHdlZWsgbnVtYmVyXG4gKiBCYXNlZCBvbiBjb21tZW50cyBmcm9tXG4gKiBodHRwOi8vdGVjaGJsb2cucHJvY3VyaW9zLm5sL2svbjYxOC9uZXdzL3ZpZXcvMzM3OTYvMTQ4NjMvQ2FsY3VsYXRlLUlTTy04NjAxLXdlZWstYW5kLXllYXItaW4tamF2YXNjcmlwdC5odG1sXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBgZGF0ZWBcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0V2VlayhkYXRlKSB7XG4gIC8vIFJlbW92ZSB0aW1lIGNvbXBvbmVudHMgb2YgZGF0ZVxuICB2YXIgdGFyZ2V0VGh1cnNkYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICB0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKSAtICgodGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMyk7XG5cbiAgLy8gVGFrZSBKYW51YXJ5IDR0aCBhcyBpdCBpcyBhbHdheXMgaW4gd2VlayAxIChzZWUgSVNPIDg2MDEpXG4gIHZhciBmaXJzdFRodXJzZGF5ID0gbmV3IERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG5cbiAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG4gIGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKSAtICgoZmlyc3RUaHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKTtcblxuICAvLyBDaGVjayBpZiBkYXlsaWdodC1zYXZpbmctdGltZS1zd2l0Y2ggb2NjdXJyZWQgYW5kIGNvcnJlY3QgZm9yIGl0XG4gIHZhciBkcyA9IHRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCkgLSBmaXJzdFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIHRhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCkgLSBkcyk7XG5cbiAgLy8gTnVtYmVyIG9mIHdlZWtzIGJldHdlZW4gdGFyZ2V0IFRodXJzZGF5IGFuZCBmaXJzdCBUaHVyc2RheVxuICB2YXIgd2Vla0RpZmYgPSAodGFyZ2V0VGh1cnNkYXkgLSBmaXJzdFRodXJzZGF5KSAvICg4NjQwMDAwMCo3KTtcbiAgcmV0dXJuIDEgKyBNYXRoLmZsb29yKHdlZWtEaWZmKTtcbn1cblxuLyoqXG4gKiBHZXQgSVNPLTg2MDEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiAxIChmb3IgTW9uZGF5KSB0aHJvdWdoIDcgKGZvciBTdW5kYXkpXG4gKiBcbiAqIEBwYXJhbSAge09iamVjdH0gYGRhdGVgXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKSB7XG4gIHZhciBkb3cgPSBkYXRlLmdldERheSgpO1xuICBpZihkb3cgPT09IDApIHtcbiAgICBkb3cgPSA3O1xuICB9XG4gIHJldHVybiBkb3c7XG59XG5cbi8qKlxuICoga2luZC1vZiBzaG9ydGN1dFxuICogQHBhcmFtICB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cblxuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbDtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuXG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbClcbiAgICAuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkYXRlRm9ybWF0O1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZGF0ZUZvcm1hdDtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWwuZGF0ZUZvcm1hdCA9IGRhdGVGb3JtYXQ7XG4gIH1cbn0pKHRoaXMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==